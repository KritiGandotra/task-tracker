import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask: boolean = false;
  private subject = new Subject<any>();


  constructor() { }

  //func to toggle the value
  //this will be called when 'Add' is clicked

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask)
  }

  //this will do the stuff when add is called
  
  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }
}
