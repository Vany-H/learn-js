import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModul } from "./app.module";

async function start() {
  const port = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModul);

  const config = new DocumentBuilder()
    .setTitle('Test Documentation')
    .setDescription('Documentation NEST_JS learn')
    .setVersion("1.0.0")
    .addTag('test')
    .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(port, ()=> {console.log(`server listing ${port}`)});
}

start();