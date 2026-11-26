import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  getHello() {
    return {
      mensaje: 'CANS RoboLearn Backend funcionando',
    };
  }

  @Get('test-db')
  async testDb() {
    const resultado =
      await this.prisma.$queryRaw`SELECT current_database(), current_user`;

    return {
      ok: true,
      mensaje: 'Backend conectado correctamente a PostgreSQL',
      resultado,
    };
  }
}