import { Component } from '@angular/core';
import { ITHoursService } from '../providers/it-hours-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ITHoursService]
})
export class AppComponent {
  title = 'admin';
  constructor (
   public itHoursService:ITHoursService
  ){
   
  }

  async getProducts(){
   var input = {
    "modelName":"Category",
    "findQuery":{},
    "path":""
  }
    let res = await this.itHoursService.executeByGet(input, false);
    console.log(res)
  }

}
