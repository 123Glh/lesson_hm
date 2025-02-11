# 后端 http 伺服

# - 安装python
# - 配置虚拟环境
# request axios 调用deepseek api
# jsontfy 把数据转成json格式
from flask import Flask, request, jsonify, send_from_directory
# 第三方库
import openai
from dotenv import load_dotenv
# 系统模块
import os
load_dotenv()

# 实例化Flask app 对象
# python 没有new
# 后端驱动的开发中 static 静态文件 => 前端
# 传统的后端， mvc 没有前后端分离
# 在static 目录下启动静态 服务器 cdn
# /直接指向static
app = Flask(__name__, static_url_path='', static_folder='static')

# 装饰器模式 mvc mvvm
# 把 server_index 装饰成路由的处理函数
# 路由 动态资源 router -> 取数据 -> 渲染 index.html
# 文件os
@app.route('/')
def server_index():
    return send_from_directory('static', 'index.html')

# restful 驱动 网站设计的一个规范 一切皆资源
# deepseek 路由接口
# 装饰器模式
@app.route('/chat',methods=['POST'])
def chat():
    try:
        # python 声明变量 不用var 弱类型脚本
        # request 请求对象 json 解析请求体
        # python 是同步 js 是异步
        data = request.json
        # print(date)
        model = data.get('model')
        messages = data.get('messages')
        temperature = data.get('temperature', 1.0)
        if not model or not messages:
            return jsonify({'error': '缺少必要字段'}), 400
        # m views controller
        api_key = os.getenv('OPENAI_API_KEY')
        base_url = os.getenv('DEEPSEEK_BASE_URL')
        if not api_key:
            return jsonify({'error':'OPENAI_API_KEY 未设置'}),500
        client =openai.OpenAI(api_key=api_key,base_url=base_url)

        # 调用openai的api
        # 同步  js单线程 node 异步 性能特别好
        response = client.chat.completions.create(
            model=model,
            messages=messages,
            temperature=temperature,
            stream=False
        )
        return jsonify({'message': response.choices[0].message.content})
    except openai.error.OpenAIError as e:
        return jsonify({'error': str(e)}),500
    except Exception as e:
        return jsonify({'error': str('发生了一个意外错误')}),500

if __name__ == '__main__':
    app.run(debug=True)