import {
  BadRequestException,
  ForbiddenException,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateDoctorDto } from './dto/doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { GetFilterDto } from './filter/get-filter.dto';
import { Doctor } from './interface/doctor.interface';

@Injectable()
export class DoctorService {
  constructor(@Inject('DOCTOR_MODEL') private doctorModel: Model<Doctor>) {}

  async create(createDoctorDto: CreateDoctorDto): Promise<Doctor> {
    try {
      const newDoctor = new this.doctorModel(createDoctorDto);
      await newDoctor.save();
      return newDoctor;
    } catch (error) {
      throw new ForbiddenException({ message: error.message });
    }
  }

  async findAll(): Promise<Doctor[]> {
    try {
      return this.doctorModel.find({});
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async find(filterDto: GetFilterDto): Promise<Doctor> {
    try {
      return this.doctorModel.findById({ _id: filterDto });
    } catch (error) {
      throw new ForbiddenException();
    }
  }

  async update(id: string, updateDoctorDto: UpdateDoctorDto): Promise<Doctor> {
    try {
      return this.doctorModel.findByIdAndUpdate({ _id: id }, updateDoctorDto, {
        new: true,
      });
    } catch (error) {
      throw new ForbiddenException();
    }
  }

  async remove(id: string): Promise<Doctor> {
    try {
      return this.doctorModel.findByIdAndDelete({ _id: id });
    } catch (error) {
      throw new ForbiddenException();
    }
  }
}
