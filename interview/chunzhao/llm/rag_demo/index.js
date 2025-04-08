const fs = require('fs');
const path = require('path');
const { OpenAI } = require('openai');
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_API_BASE_URL,
});
// promise
// await fs.readFile
// 文件内容 + 问题 -> Prompt Engineering (上下文)
// 返回 RAG chatbot
// promise 语法糖 + generator 语法糖
const readCourseInfo = () => {
  return new Promise((resolve, reject) => {
    try {
      const filePath = path.join(__dirname, '课程信息.txt');//IO操作
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    } catch (error) {
      reject(error);
    }
  })
}
const answerQuestion = async (question) => {
  const courseInfo = await readCourseInfo();//IO操作
  // console.log(courseInfo);
  if (!courseInfo) return new Error('课程信息为空');
  // prompt 模板 chatbot 知识库应用
  // 用户的输入 问题？ 私人chatbot
  // 文件内容 prompt
  // LLM token 比较大 的
  // LLM 学习
  // AIGC

  // prompt Template
  const prompt = `
  你是一个课程助手，请根据下面的课程信息回答我的问题：
  只回答课程信息相关的问题。
  课程信息：${courseInfo}
  问题：${question}
  答案：
`
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',// 系统
          content: '你是一个课程助手，请根据下面的课程信息回答我的问题：',
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0,
      max_tokens: 1000,
    });
    const answer = response.choices[0].message.content;
    return answer;
  } catch (error) {
    return new Error('回答问题失败');
  }
}
const question = '有几门课程啊？';
answerQuestion(question)
  .then(answer => {
    console.log(answer);
  })
  .catch(error => {
    console.error(error);
  });

