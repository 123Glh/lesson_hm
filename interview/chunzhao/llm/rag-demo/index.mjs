import { config } from 'dotenv';
import { TextLoader } from 'langchain/document_loaders/fs/text'; //文本加载器
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'; // 文本分割器

// 链
import { ConversationalRetrievalQAChain } from 'langchain/chains'; // 对话检索链

config(); // 加载环境变量
import { ChatOpenAI, OpenAIEmbeddings } from '@langchain/openai'; // 聊天模型
// 向量数据库
import { MemoryVectorStore } from 'langchain/vectorstores/memory';

const loader = new TextLoader('data/text.txt');
const docs = await loader.load();
// console.log(docs[0]);
const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 100, // 100 个字符
  chunkOverlap: 20, // 20 个字符的重叠
});

const splitDocs = await splitter.splitDocuments(docs);
// console.log(splitDocs);
// 内存向量数据库
const embeddings = new OpenAIEmbeddings(); // 向量化模型
const vectorstore = new MemoryVectorStore(embeddings) // 向量数据库
await vectorstore.addDocuments(splitDocs); // 向数据库中添加文档

// console.log(vectorstore.memoryVectors);

// 数据已经在向量数据库中了，接下来我们可以使用向量数据库来进行查询
// 创建检索器
const retriever = vectorstore.asRetriever(); // 检索器
// const res = await retriever.invoke('我是一个学生'); // 检索相关文档 按照相似度检索
// console.log(res); // 输出检索到的文档

const chatModel = new ChatOpenAI({
  temperature: 0,
  modelName: 'gpt-3.5-turbo',
})
const qachain = ConversationalRetrievalQAChain.fromLLM(
  chatModel,
  retriever
); // 对话检索链
const quesion = "雷军在干嘛？";
const res = await qachain.call({
  question: quesion,
  chat_history: [], // 对话历史
});
console.log(res.text); // 输出检索到的文档