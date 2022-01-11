import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { CaslModule } from 'src/casl/casl.module';
import { DatabaseModule } from 'src/database/database.module';
import { DoctorProvider } from 'src/doctor/provider/doctor.provider';
import { PatientController } from './patient.controller';
import { PatientService } from './patient.service';
import { PatientProvider } from './provider/Patient.provider';

@Module({
  imports: [DatabaseModule, AuthModule, CaslModule],
  controllers: [PatientController],
  providers: [PatientService, ...PatientProvider, ...DoctorProvider],
})
export class PatientModule {}
