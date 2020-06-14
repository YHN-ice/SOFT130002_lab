lab11 实验文档
====


### The function of cookie and session
    
#### cookie
    在客户端存储用户访问网站的一些信息
    可用于购物车功能的实现、记住账号密码、记录浏览数据用于广告推荐
    
#### session
    在服务器端储存用户和服务器的会话信息
    可用于记录登录状态、实现购物车功能


### The advantages & disadvantages of cookie and session.

#### advantages of cookie
    可以设为长时间保存
    保存在客户端不占用服务器资源
    支持跨域名访问
    
#### disadvantages of cookie
    只能保管ASCII字符串
    不能直接存取Java对象
    储存在客户端上存在敏感信息泄漏风险
    单个cookie保存的数据不能超过4K
    
#### advantages of session
    可存取任何数据类型
    存储在服务器端不存在敏感信息泄漏风险
    
#### disadvantages of session
    占用服务器内存
    不支持跨域名访问