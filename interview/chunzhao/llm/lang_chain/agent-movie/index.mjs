import { ChatOpenAI } from "@langchain/openai"; // 调用openai api
// agent 模块
// agent 自动化
import { initializeAgentExecutorWithOptions } from "langchain/agents"; // 初始化agent
// fileLoader urlLoader
import { CheerioWebBaseLoader } from "@langchain/community/document_loaders/web/cheerio"; // 网页加载器
import { DynamicTool } from "langchain/tools"; // 动态工具
import { config } from "dotenv";
config();

async function main() {
  // 智能体对模型要求高
  const model = new ChatOpenAI({
    modelName: "gpt-4o",
    temperature: 0,
    apiKey: process.env.OPENAI_API_KEY,
    baseUrl: process.env.OPENAI_BASE_URL,
  });
  const scrapingTool = new DynamicTool({ // 动态工具
    name: "webScraper",// 工具名称
    description: "scrapes movie information from a given url", // 工具描述
    func: async (url) => { // 函数
      // console.log("scraping...", url);
      try {
        const loader = new CheerioWebBaseLoader(url, {
          selector: "tr.item"
        });
        const docs = await loader.load();
        return docs[0].pageContent;
      } catch (e) {
        return "error"
      }
    }
  })
  const executor = await initializeAgentExecutorWithOptions([
    scrapingTool,
  ],
    model,
    {
      agentType: "chat-zero-shot-react-description",// 零样本 
      verbose: true, // 输出
    }
  )
  const result = await executor.call({
    input: "请访问 https://movie.douban.com/chart 并找出中国的电影"
  })
  console.log(result);
}
main()
  .catch(console.error);