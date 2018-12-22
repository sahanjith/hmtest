import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  exampleForm = new FormGroup({});
  vehicleResults;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {
    this.createForm();
  }


  submit() {
    this.httpClient.post("http://ec2-13-126-31-178.ap-south-1.compute.amazonaws.com:17114/api/org/vehicle",
      {
        "absoluteOwner": "string",
        "barcode": "string",
        "brand": "string",
        "buildYear": "string",
        "chasisNumber": "string",
        "classOfVehicle": "string",
        "countryOfOrigin": "string",
        "cylinderCapacity": "string",
        "email": {
          "email": "string",
          "isprimary": true
        },
        "engineNumber": "string",
        "firstRegDate": "string",
        "fuelType": "string",
        "image": "string",
        "imei": "string",
        "internalRefNum": "string",
        "make": "string",
        "mobileNumber": "string",
        "model": "string",
        "odoMeterReading": "string",
        "officialMobileNumber": "string",
        "officialPhoneNum": {
          "ext": "string",
          "phoneNum": "string"
        },
        "orgId": "string",
        "photo": "string",
        "portEntryPassNum": "string",
        "portEntryValidPeriod": {
          "end": "string",
          "start": "string"
        },
        "previousOwnerDetails": "string",
        "purchasedValue": "string",
        "regNumber": "string",
        "registeredAddress": "string",
        "revenueLicense": "string",
        "rmvRegNumber": "string",
        "statusWhenRegister": "string",
        "taxationClass": "string",
        "type": 0,
        "typeOfIdDocument": "string",
        "vehicleId": "string",
        "vehicleInsurance": "string",
        "warranty": true,
        "warrantyPeriod": "string",
        "weightUnladenGross": "string"

      })

      .subscribe(
        data => {
          console.log("POST Request is successful ", data);
        },
        error => {
          console.log("Error", error);
        }
      );
  }

  load(params) {
    this.vehicleResults = this.httpClient.get("http://ec2-13-126-31-178.ap-south-1.compute.amazonaws.com:17114/api/org/vehicle/byorg/{orgId}", { params });
    console.log(this.vehicleResults);
  }

  createForm() {
    this.exampleForm = this.formBuilder.group({
      abOwner: '',
      barCode: '',
      brand: '',
      buildYear: '',
      chasisNo: '',
      vehicleClass: '',
      countryOrigin: '',
      cylinderCapacity: '',
      email: '',
      engineNo: '',
      firstRegDate: '',
      fuelType: '',
      image: '',
      imei: '',
      internalRefNumber: '',
      make: '',
      mobileNo: '',
      model: '',
      odoMeterReading: '',
      officialMobileNumber: '',
      officialPhoneNum: '',
      orgId: '',
      photo: '',
      portEntryPassNum: '',
      portEntryValidPeriod: '',
      previousOwnerDetails: '',
      purchasedValue: '',
      regNumber: '',
      registeredAddress: '',
      rmvRegNumber: '',
      statusWhenRegister: '',
      taxationClass: '',
      type: '',
      typeOfIdDocument: '',
      vehicleId: '',
      vehicleInsurance: '',
      warranty: '',
      warrantyPeriod: '',
      weightUnladenGross: '',

    });
  }
}