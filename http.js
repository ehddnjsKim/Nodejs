const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    // 127.0.0.0.1::3000/
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("home");
  } else if (url == "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("mypage");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("notfound.");
  }
});

// 127.0.0.0.1, localhost
server.listen(3000, () => {
  console.log("서버 실행 중 ");
});
