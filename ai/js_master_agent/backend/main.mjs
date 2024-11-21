import dotenv from 'dotenv';
import OpenAI from 'openai';

// 指定 .env 文件的路径
dotenv.config({ path: './backend/.env' });

// 打印所有环境变量进行调试
console.log('All environment variables:', process.env);

// 打印特定的环境变量进行调试
console.log('Loaded API Key:', process.env.OPENAI_API_KEY);

if (!process.env.OPENAI_API_KEY) {
  console.error('OPENAI_API_KEY is missing or empty');
  process.exit(1);
}

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: "https://api.302.ai/v1",
});

const main = async () => {
  try {
    const response = await client.images.generate({
      model: "dall-e-3",
      prompt: "“A man is walking on a pitch-black road with a bright moon in the sky.”",
      n: 1,
      size: "1024x1024",
    });
    console.log(response.data[0].url);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

main();