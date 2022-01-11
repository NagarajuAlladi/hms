import { Connection } from 'mongoose';
import { DoctorSchema } from '../schema/doctor.schema';

export const DoctorProvider = [
  {
    provide: 'DOCTOR_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Doctor', DoctorSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
