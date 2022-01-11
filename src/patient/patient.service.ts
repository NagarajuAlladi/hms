import {
  BadRequestException,
  ForbiddenException,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { Doctor } from 'src/doctor/interface/doctor.interface';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './interface/patient.interface';

@Injectable()
export class PatientService {
  constructor(
    @Inject('DOCTOR_MODEL') private readonly doctorModel: Model<Doctor>,
    @Inject('PATIENT_MODEL') private readonly patientModel: Model<Patient>,
  ) {}

  async create(id: string, createPatientDto: CreatePatientDto) {
    try {
      const newPatient = new this.patientModel(createPatientDto);
      newPatient.doctorId = id;
      await newPatient.save();
      return newPatient;
    } catch (error) {
      throw new ForbiddenException();
    }
  }

  async findAll() {
    try {
      return this.patientModel.find({});
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async find(id, doctorId) {
    try {
      if (id && doctorId === undefined) {
        return this.patientModel.findById({ _id: id });
      } else if (doctorId && id === undefined) {
        return this.patientModel.find({ doctorId: doctorId });
      }
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async update(
    id: string,
    updatePatientDto: UpdatePatientDto,
  ): Promise<Patient> {
    try {
      return this.patientModel.findByIdAndUpdate(
        { _id: id },
        updatePatientDto,
        {
          new: true,
        },
      );
    } catch (error) {
      throw new ForbiddenException();
    }
  }

  async remove(id: string): Promise<Patient> {
    try {
      return this.patientModel.findOneAndDelete({ _id: id });
    } catch (error) {
      throw new ForbiddenException();
    }
  }
}
