import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppLifecycleComponent } from "./app-lifecycle/app-lifecycle.component";
import {StudentComponent} from "./student/student.component";
import {CarComponent} from "./car/car.component";
@Component({
  selector: 'app-root',
  imports: [StudentComponent,CarComponent,AppLifecycleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Welcome SHubham';
}
