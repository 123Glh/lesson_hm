HTTP/2完全没有并发数的限制了吗 

HTTP/2 通过多路复用实现并发请求，允许多个请求在同一连接上同时进行，理论上没有并发数限制，但实际性能受服务器和客户端配置影响。


- 服务器负载：即使切片上传，过多并发请求仍可能导致服务器负载过高，影响性能。 nginx 负载均衡

- 网络带宽：网络带宽有限，过多并发请求可能导致带宽竞争，影响上传速度。

- 限流可以更好地控制错误重试，避免同时重试多个请求导致的混乱。