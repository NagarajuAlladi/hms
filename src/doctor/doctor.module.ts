import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { CaslModule } from 'src/casl/casl.module';
import { DatabaseModule } from 'src/database/database.module';
import { DoctorController } from './doctor.controller';
import { DoctorService } from './doctor.service';
import { DoctorProvider } from './provider/doctor.provider';

@Module({
  imports: [DatabaseModule, AuthModule, CaslModule],
  controllers: [DoctorController],
  providers: [DoctorService, ...DoctorProvider],
})
export class DoctorModule {}
