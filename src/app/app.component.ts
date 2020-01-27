import { Component, Pipe, PipeTransform } from '@angular/core';
import  *  as  data  from  './json/user.json';
import { FilterPipe } from './shared/filter.pipe';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

    ngOnInit(){
    console.log("Data::"+JSON.stringify(data));
    let filterPipe = new FilterProjectPipe();
     let selectFromDate = Number('1-1-2020');
        let selectToDate = Number('2-1-2020');

        let filterData = filterPipe.transform(data,  selectFromDate, selectToDate,"created_date");
        console.log("Filter Data::"+JSON.stringify(filterData));

  }
}
