import { Injectable } from '@angular/core';
import flagsmith from 'flagsmith';

flagsmith.init({
  environmentID: "7H8LQSD8MZkUL27uGyQYKe",
  cacheFlags: true,
  enableAnalytics: false
});

@Injectable({
  providedIn: 'root'
})
export class FeatureFlagService {

  isFeatureOn(featureName: string) {
    return flagsmith.hasFeature(featureName);
  }

  constructor() { }
}
