import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  tasks = [];
  taskById = [];
  constructor(private _httpService: HttpService) {} 
  getTasksFromService(){
    let tempObservable = this._httpService.getTasks();
    tempObservable.subscribe((data:any)=>{
      console.log("Got our tasks", data);
      this.tasks = data;
    })
  }
  info(id:string){
    let tempObservable = this._httpService.getTaskById(id);
    tempObservable.subscribe((data:any)=>{
      console.log("Got our tasks", data);
      this.taskById = data;
    })
  }
}
