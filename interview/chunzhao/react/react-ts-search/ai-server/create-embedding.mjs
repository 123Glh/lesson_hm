import fs from 'fs/promises'; // 内置模块
// 模块化
import { client } from './app.service.mjs'; // 导入ai服务

const inputFilePath = './data/posts.json'
const outputFilePath = './data/post_with_embedding.json'

// node promisify
const data = await fs.readFile(inputFilePath, 'utf-8')
const posts = JSON.parse(data);
// console.log(posts);
const postWithEmbedding = []; // 存储数据

for (const { title, category } of posts) {
  const respone = await client.embeddings.create({
    model: 'text-embedding-ada-002',
    input: `标题：${title}, 分类：${category}`
  });
  postWithEmbedding.push({
    title,
    category,
    embedding: respone.data[0].embedding
  })
}
await fs.writeFile(outputFilePath, JSON.stringify(postWithEmbedding, null, 2))