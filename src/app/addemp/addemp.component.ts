import { Component } from '@angular/core';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent {
  empcode=""
  name=""
  designation=""
  salary=""
  company=""
  mobile=""
  username=""
  password=""
  addemployee=()=>
  {
    let data:any={"empcode":this.empcode,"name":this.name,"designation":this.designation,"salary":this.salary,"cmpname":this.company,"mobno":this.mobile,"username":this.username,"password":this.password}
    console.log(data)
  }
}
