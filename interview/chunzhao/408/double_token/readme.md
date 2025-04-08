# 双 token 鉴权

- JWT JSON Web Token

- 单 token 长时间 不安全

- 验证 refresh token 刷新 access_token
  - access_token 负责验证功能 expiresIn 短一些，安全
  - refresh_token 负责刷新 access_token expiresIn 长一些，安全
  - 401 access_token 过期，刷新 token
    refresh_token -> /api/refresh
    返回新的 access_token 给前端
    - 无感刷新