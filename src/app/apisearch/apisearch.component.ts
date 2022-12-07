import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-apisearch',
  templateUrl: './apisearch.component.html',
  styleUrls: ['./apisearch.component.css']
})
export class ApisearchComponent {
  constructor(private api:ApiService){}

  empcode=""

  readValues:any = []

  readValue=()=>

  {

    let data:any={

    "empcode":this.empcode}

    console.log(data)

    this.api.readValues(data).subscribe(

      (response:any)=>{

        console.log(response)

        if (response.length==0) {

          alert("invalide employee code")

         

        } else {

          this.readValues = response

        }

      }

    )

  }
}
