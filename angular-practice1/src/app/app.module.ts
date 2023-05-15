import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//AppComponent is the root component
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import { AddTaskComponent } from './components/add-task/add-task.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  //components are put under declarations
  //cli does it automatically
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent
  ],
  //imports when we use a module
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  //any global services used
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
