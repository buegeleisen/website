import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { FeatureFlagService } from '../services/feature-flag.service';

@Directive({
  selector: '[removeIfFeatureOff]'
})
export class RemoveIfFeatureOffDirective implements OnInit{
  @Input('removeIfFeatureOff') featureName: string;

  constructor(private el: ElementRef, private featureFlagService: FeatureFlagService) {
    this.featureName = '';
  }

  ngOnInit(): void {
    if (!this.featureFlagService.isFeatureOn(this.featureName)) {
      this.el.nativeElement.parentNode.removeChild(this.el.nativeElement);
    }
  }

}
