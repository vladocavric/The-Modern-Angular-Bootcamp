import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) { }

  @Input('appTimes') set renter(times: number){
    this.vcRef.clear()
    for (let i = 0; i < times; i++) {
      this.vcRef.createEmbeddedView(this.templateRef, { index: i});
    }
  }

}
