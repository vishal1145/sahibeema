import { Component, OnInit, ViewChild } from '@angular/core';
import { MatProgressBar, MatButton } from '@angular/material';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ITHoursService } from 'providers/it-hours-service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers : [ITHoursService]
})
export class SigninComponent implements OnInit {
  @ViewChild(MatProgressBar) progressBar: MatProgressBar;
  @ViewChild(MatButton) submitButton: MatButton;

  signinForm: FormGroup;

  constructor(
    public itHourService : ITHoursService,
    public router: Router
  ) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rememberMe: new FormControl(false)
    })
  }

  async signin() {
    const signinData = this.signinForm.value
    var input = {
      "modelName": "User",
      "findQuery": {
        "email": signinData.username,
        "password": signinData.password
      }
    }
    var res = await this.itHourService.executeByGet(input,false);
    if(res.apidata.Data.length!=0){
      this.router.navigate(['/product']);
    }
   this.submitButton.disabled = true;
    this.progressBar.mode = 'indeterminate';
  }

}
