const koa = require('koa');
const app = new koa();

const Router = require('koa-router');
const router = new Router();
const vue3Compile = require('@vue/compiler-ssr');
const { renderToString } = require('@vue/server-renderer');

const Vue = require('vue'); // vue 服务器端渲染
let vueapp = {
  template: `
  <div>
    <h1 @click="add">{{num}}</h1>
    <ul>
      <li v-for="(todo,n) in todos">{{n+1}}--{{todo}}</li>
    </ul>
  </div>
  `,
  data() {
    return {
      num: 1,
      todos: ['吃饭', '睡觉', '打豆豆']
    }
  },
  methods: {
    add() {
      this.num++;
    }
  }
}

// 使用@vue/compiler-ssr解析template
// 这段代码将Vue应用的模板编译成函数，然后通过new Function创建一个可执行的渲染函数，用于服务器端渲染。

vueapp.ssrRender = new Function('require', vue3Compile.compile(vueapp.template).code)(require)

router.get('/', async ctx => {
  // ctx.body = 'Hello World';
  let vapp = Vue.createSSRApp(vueapp); // vue 服务器端渲染
  let html = await renderToString(vapp);
  let ret = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>SSR seo 更友好</title>
      </head>
      <body>
        <div id="app">
          ${html}
        </div>
      </body>
    </html>
  `
  ctx.body = ret;
})

app.use(router.routes())
  .use(router.allowedMethods())

app.listen(3000, () => {
  console.log('服务器启动成功 at http://localhost:3000');
})