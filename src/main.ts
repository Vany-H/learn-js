import { NestFactory } from "@nestjs/core";
import { AppModul } from "./app.module";

async function start() {
  const port = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModul);

  await app.listen(port, ()=> {console.log(`server listing ${port}`)});
}