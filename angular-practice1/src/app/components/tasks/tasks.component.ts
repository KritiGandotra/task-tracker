import { Component, OnInit } from '@angular/core';
//bringing in service to use the method declared there to eventually show tasks
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';
//import {TASKS} from '../../mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  //property of component
  tasks: Task[] = [];
  //to use a service we have to declare it as a provider in contructor
  constructor(private taskService: TaskService) {}

  //we use observables cause when we fetch data from backend we are dealing with asynchronous data
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task): void {
    this.taskService
      .deleteTasks(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  ToggleTask(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.UpdateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }
}
