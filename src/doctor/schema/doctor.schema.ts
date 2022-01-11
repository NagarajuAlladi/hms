import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const DoctorSchema = new mongoose.Schema({
  name: String,
  department: String,
  specialization: String,
  phoneNo: Number,
  location: String,
  patientIDs: [String],
});
