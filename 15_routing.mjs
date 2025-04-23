import express from "express";
import userRouter from "./routes/user.mjs";
import postRouter from "./routes/post.mjs";

const app = express();

app.use(express.json());

// http://192.168.162.183:3000/users
app.use("/users", userRouter);

app.use("/posts", postRouter);

app.listen(3000, () => {
  console.log("서버 실행 중");
});
