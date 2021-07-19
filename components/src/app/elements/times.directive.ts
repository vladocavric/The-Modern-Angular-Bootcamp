import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {
  }

  @Input('appTimes') set lines(lines: number) {
    this.vcRef.clear();
    for (let i = 0; i < lines; i++) {
      this.vcRef.createEmbeddedView(this.templateRef, {});
    }
  }
}
