import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.scss']
})
export class PaymentModalComponent {
  @Output() paymentConfirmed = new EventEmitter<boolean>();

  confirmPayment() {
    // Simulate a successful payment
    setTimeout(() => {
      this.paymentConfirmed.emit(true);
    }, 2000); // Simulate a 2-second delay for payment processing
  }
}
