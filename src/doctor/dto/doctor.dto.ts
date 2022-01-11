import { ApiProperty } from '@nestjs/swagger';

export class CreateDoctorDto {
  @ApiProperty({
    type: String,
    description: 'The Name of the Doctor',
    default: '',
  })
  name: string;
  @ApiProperty({
    type: String,
    description: 'The Department of the Doctor',
    default: '',
  })
  department: string;
  @ApiProperty({
    type: String,
    description: 'The Specialization of the Doctor',
    default: '',
  })
  specialization: string;
  @ApiProperty({
    type: Number,
    description: 'The Phone Number of the Doctor',
    default: 1,
  })
  phoneNo: number;
  @ApiProperty({
    type: String,
    description: 'The Location of the Doctor',
    default: '',
  })
  location: string;

  @ApiProperty({
    type: Array,
    description: 'patients ids',
    default: ['', ''],
  })
  patientIDs: Array<string>;
}
