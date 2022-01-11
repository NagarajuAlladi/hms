export class Patient {
  doctorId: String;
  name: String;
  sex: String;
  mobileNumber: Number;
  age: Number;
  address: {
    street: String;
    city: String;
    state: String;
    country: String;
    pinCode: String;
  };
}
