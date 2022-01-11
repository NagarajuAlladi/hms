import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePatientDto } from './create-patient.dto';

export class UpdatePatientDto extends PartialType(CreatePatientDto){
  @ApiProperty({
    type: String,
    description: 'Patient Name',
    default: '',
  })
  name: String;

  @ApiProperty({
    type: String,
    description: 'Patient Sex',
    default: '',
  })
  sex: String;

  @ApiProperty({
    type: Number,
    description: 'Patient Mobile Number',
    default: '',
  })
  mobileNumber: Number;

  @ApiProperty({
    type: Number,
    description: 'Patient Age',
    default: '',
  })
  age: Number;

  @ApiProperty({
    type: Object,
    description: 'Patient Address',
    default: {
      street: '',
      city: '',
      state: '',
      country: '',
      pinCode: '',
    },
  })
  address: {
    street: String;
    city: String;
    state: String;
    country: String;
    pinCode: String;
  };
}
