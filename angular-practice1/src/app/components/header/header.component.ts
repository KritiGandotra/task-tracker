import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //we will catch our constructor in the body
  constructor(private uiService: UiService) {
    //we call subscrib with observables
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
  }
  // 1) lifecycle method
  // 2) code that you want to run when you load the component should be put here
  // 3) for eg if you want to make any http request
  ngOnInit(): void {
  }
  //to use a service we have to add it to our constructor
  title: string = 'Angular Practice 1'
  showAddTask!: boolean;
  subscription!: Subscription;
  toggleAddTask(){
    this.uiService.toggleAddTask();
  }
}
