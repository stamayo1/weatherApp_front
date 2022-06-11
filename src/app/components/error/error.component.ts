import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {

  @Input() message: string | null = null; 
  @Output() retry = new EventEmitter();

  constructor() { }

  onRetry(){
    // Event Biding
    this.retry.emit(); 
  }
}
