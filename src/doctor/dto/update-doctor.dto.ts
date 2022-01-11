import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateDoctorDto } from './doctor.dto';

export class UpdateDoctorDto extends PartialType(CreateDoctorDto) {
  @ApiProperty({
    type: String,
    description: 'The Name of the Doctor',
    default: '',
  })
  readonly name: string;
  @ApiProperty({
    type: String,
    description: 'The Department of the Doctor',
    default: '',
  })
  readonly department: string;
  @ApiProperty({
    type: String,
    description: 'The Specialization of the Doctor',
    default: '',
  })
  readonly specialization: string;
  @ApiProperty({
    type: Number,
    description: 'The Phone Number of the Doctor',
    default: 1,
  })
  readonly phoneNo: number;
  @ApiProperty({
    type: String,
    description: 'The Location of the Doctor',
    default: '',
  })
  readonly location: string;

  @ApiProperty({
    type: Array,
    description: 'patients ids',
    default: ['', ''],
  })
  patientIDs: Array<string>;
}
