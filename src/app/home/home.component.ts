import { Component } from '@angular/core';
import { FeatureFlagService } from '../services/feature-flag.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FeatureFlagService]
})
export class HomeComponent {

}
