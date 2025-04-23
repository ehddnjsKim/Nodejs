const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); // 클라이언트 <-> 서버 간의 데이터를 json으로

// 게시글 목록 조회
app.get("/posts", (req, res) => {
  res.send("모든 게시글을 조회합니다.");
});

// 게시글 등록
app.post("/posts", (req, res) => {
  const { title, content } = req.body;
  res.send(`게시글 등록됨: ${title}`);
});

// 게시글 하나 조회
app.get("/posts/:id", (req, res) => {
  res.send(`${req.params.id}번 게스글을 조회합니다.`);
});

// 게시글 부분 수정
app.patch("/posts/:id", (req, res) => {
  res.send(`${req.params.id}번 게시글을 일부 수정했습니다.`);
});

// 게시글 삭제
app.delete("/posts/:id", (req, res) => {
  res.send(`${req.params.id}번 게시글을 삭제했습니다.`);
});

app.listen(port, () => {
  console.log("서버 실행 중");
});
