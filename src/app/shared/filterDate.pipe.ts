/**
 * This  component is used main screen.
 */

import {Component,  Pipe, PipeTransform  } from '@angular/core';
import 'rxjs/add/operator/filter';

@Pipe({
    name: 'filterDatePipe',
    pure: false
})


export class FilterDatePipe implements PipeTransform {
    transform(items: any[], fromDate: any, toDate: any,field:string):  any {
        if (items) {  
           var fromDate:any = new Date(fromDate);
            var toDate:any = new Date(toDate);
            console.log(fromDate);
            console.log(toDate);
            if (fromDate != 0 && toDate != 0) {
                return items.filter(item => {
                    if (item["created_date"]) {
                        let val1 = new Date(item[field]);
                       
                        
                       //console.log("Date1"+date1);
                        console.log(val1 >= fromDate);
                        console.log(val1 <= toDate);
                        if (val1 >= fromDate && val1 <= toDate) {
                            
                                return true;
                            
                         }
                    }
                 });
             }
         }
    }
    
}