import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecondChanceModule } from './second-chance/second-chance.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SecondChanceModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'MeDesculpa';
}
