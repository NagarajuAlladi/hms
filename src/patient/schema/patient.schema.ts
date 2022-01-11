import * as mongoose from 'mongoose';
import { Doctor } from 'src/doctor/interface/doctor.interface';
const Schema = mongoose.Schema;

var Address = new mongoose.Schema({
  street: {
    type: String,
    // required:true,
  },
  city: {
    type: String,
    // required:true,
  },
  state: {
    type: String,
    // required:true,
  },
  country: {
    type: String,
    // required:true,
  },
  pinCode: {
    type: String,
    // required:true,
  },
});

export const PatientSchema = new mongoose.Schema({
  patientId: {
    type: Schema.Types.ObjectId,
    ref: Doctor,
  },
  name: String,
  sex: String,
  mobileNumber: Number,
  age: Number,
  address: Address,
});
