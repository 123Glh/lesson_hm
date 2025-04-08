# 跨站脚本注入(XSS) 跨站请求伪造(CSRF) ，如何预防

- XSS 
  攻击者通过在网页中注入恶意脚本，窃取用户信息或执行未授权的操作的攻击方式。
  <script>alert('XSS')</script>
  假如有一个评论系统，用户可以输入评论。 如果系统没有对用户输入的内容进行过滤和转义，攻击者可以在评论中插入恶意脚本，当其他用户浏览该评论时，恶意脚本会被执行，窃取用户信息或执行未授权的操作。
  - 窃取用户信息： cookie
  - 重定向恶意网站
  - 串改网页内容，钓鱼攻击

  - 解决方案
    - 对用户输入进行严格的验证和过滤。
    - 对 html 转译 < > & &lgt; &gt  &lt &amp;
    - sanitize-html 库 过滤掉一些标签和属性，防止恶意脚本注入。
  
## 跨站请求伪造(CSRF) 如何预防
  攻击者诱使用户在已认证的会话中执行费授权的操作，利用用户身份进行恶意请求。

  - 假设用户已经登入到一个在线银行网站，并且该网站允许用户通过发送 POST 请求来转账。

  - 过程
    - 用户登陆 银行网站
    - 恶意网站
    <form action="https://bank.com/transfer" method="POST" style="display:none;">
      <input type="hidden" name="amount" value="1000">
      <input type="hidden" name="to" value="attacker_account">
    </form>
    <script>
        document.forms[0].submit();
    </script>
    - 当用户访问恶意网站时，恶意网站的脚本会自动提交表单，向银行网站发送转账请求。
    - 由于用户已经认证，恶意网站可以在用户不知情的情况下执行转账操作。

  - 解决方案
    - 使用 CSRF token 敏感操作的时候 验证 csrf token
    - cookie  sameSite 属性 Strict  Lax  None 默认 Lax   只能在当前域名下发送请求，不能在第三方域名下发送请求。  防止 CSRF 攻击。