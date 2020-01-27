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
    transform(items: any[], fromDate: number, toDate: number,field:string):  any {
        if (items) {          
            if (fromDate != 0 && toDate != 0) {
                return items.filter(item => {
                    if (item["created_date"]) {
                        let val1 = item["created_date"];
                        let val2 = item["created_date"];
                        let date1 = 0;  
                        let date2 = 0;  
                        if (val1) {
                            let date1 = new Date(this.converDateToJson(val1));
                            
                           // date1= obj && obj.getFullYear() ? Number(obj.getFullYear()) : 0;
                        }
                        if (val2) {
                            let date2 = new Date(this.converDateToJson(val2));
                           // date2=  obj && obj.getFullYear() ? Number(obj.getFullYear()) : 0;
                        }
                        console.log("Date1"+date1);
                        console.log("Date2"+date2);
                        if (date1!= 0 && date2 != 0 && date1 >= fromDate && date2 <= toDate) {
                            
                                return true;
                            
                         }
                    }
                 });
             }
         }
    }
    
    converDateToJson(date){
        if(date){ 
            //console.log("converDateToJson:::"+date);
            let newDate="";
            let splitedDate=date.split("-");
            if(splitedDate && splitedDate.length > 0){
                for(let i=0;i< splitedDate.length; i++){
                        if((splitedDate[i]=='0000' || splitedDate[i].trim()=='0' || splitedDate[i].trim()=='00') ){
                            if(i==0){
                                let currentDate=new Date();
                                return (currentDate.getFullYear()+"-"+currentDate.getMonth()+"-"+currentDate.getDay());
                            }else{
                                splitedDate[i]=1;
                            }
                        }else{
                            splitedDate[i]=splitedDate[i].trim();
                        }
                }
                return splitedDate.join('-');
                
            }
            return null;
        }else{
            return null;
        }
    }
}