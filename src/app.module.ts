import { Module } from '@nestjs/common';
import { DoctorModule } from './doctor/doctor.module';
import { PatientModule } from './patient/patient.module';
import { CaslModule } from './casl/casl.module';

@Module({
  imports: [DoctorModule, PatientModule],
})
export class AppModule {}
