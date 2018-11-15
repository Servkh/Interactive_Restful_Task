import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
    this.getTasks();
    this.getTaskById("5beb8b1d75a84d248ff831d0");
  }
  getTasks(){
    return this._http.get('/api/tasks');
    // tempObservable.subscribe((data) => 
    //   {console.log("Got our tasks!", data)
    // });
  }
    // let tempObservable = this._http.get('/api/tasks');
    // tempObservable.subscribe((data) => 
    //   {console.log("Got our tasks!", data)
    // });
  getTaskById(id){
      return this._http.get('/api/tasks/'+id);
      // tempObservable.subscribe((data)=>{
      //   console.log("Got our tasks!", data)
      // });
  }
}
  //   let tempObservable = this._http.get('/api/tasks/'+id);
  //   tempObservable.subscribe((data)=>{
  //     console.log("Got our tasks!", data)
  //   });


