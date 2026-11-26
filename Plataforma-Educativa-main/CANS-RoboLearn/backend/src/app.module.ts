import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PrismaModule } from './prisma/prisma.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { EstructuraAcademicaModule } from './estructura-academica/estructura-academica.module';
import { JuegosModule } from './juegos/juegos.module';
import { PuntuacionesModule } from './puntuaciones/puntuaciones.module';
import { ProgresoModule } from './progreso/progreso.module';
import { RankingsModule } from './rankings/rankings.module';
import { MoodleModule } from './moodle/moodle.module';

@Module({
  imports: [
    PrismaModule,
    UsuariosModule,
    EstructuraAcademicaModule,
    JuegosModule,
    PuntuacionesModule,
    ProgresoModule,
    RankingsModule,
    MoodleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}