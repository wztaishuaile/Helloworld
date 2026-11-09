const http = require('http');

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    const now = new Date().toLocaleString('zh-CN', { hour12: false });
    const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello World</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: "Microsoft YaHei", "PingFang SC", sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 18px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #fff;
      padding: 20px;
    }
    h1 { font-size: 30px; text-align: center; }
    p { font-size: 18px; opacity: 0.9; }
    .time {
      margin-top: 10px;
      padding: 10px 22px;
      background: rgba(255, 255, 255, 0.18);
      border-radius: 10px;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <h1>Hello World！我是wztaishuaile，我的第一个AI开发的网站</h1>
  <p>这是用 Node.js 原生 http 模块搭建的低代码实践练习项目</p>
  <div class="time">服务器当前时间：${now}</div>
</body>
</html>`;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.end(html);
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain;charset=utf-8');
    res.end('404 页面不存在');
  }
});

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`);
});
