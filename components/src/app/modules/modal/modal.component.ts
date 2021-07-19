import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter();

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    document.body.appendChild(this.elRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.elRef.nativeElement.remove();
  }

  onModalClose() {
    this.close.emit();
  }
}
