import { Component } from '@angular/core';
import  *  as  data  from  './json/user.json';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

    ngOnInit(){
    console.log("Data::"+JSON.stringify(data));

  }
}
