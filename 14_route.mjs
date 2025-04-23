import express from "express";

const app = express();

app
  .route("/posts")
  .get((req, res) => {
    res.status(200).send("/posts Get 호출");
  })
  .post((req, res) => {
    res.status(201).send("/posts Post 호출");
  })
  .put((req, res) => {
    res.status(201).send("/posts PUT 호출");
  })
  .delete((req, res) => {
    res.status(204).send("/posts DELETE 호출"); // 204 : 바디의 내용이 안옴. 200으로도 사용 가능(내용옴)
  });

app.listen(3000, () => {
  console.log("서버 실행 중");
});
