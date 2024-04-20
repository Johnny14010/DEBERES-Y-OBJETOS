// src/hello-world/hello-world.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class HelloWorldController {
  @Get()
  hello(): string {
    return '¡Hola Mundo!';
  }
}
