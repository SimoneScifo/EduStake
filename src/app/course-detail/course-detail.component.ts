import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Course } from '../models/course.model';
import { SafeUrlPipeModule } from '../safe-url.pipe.module';
import { CourseService } from '../course.service';
import { PaymentModalComponent } from '../payment-modal/payment-modal.component';
import { StakeProposalModalComponent } from '../stake-proposal-modal/stake-proposal-modal.component';


@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, SafeUrlPipeModule, PaymentModalComponent, StakeProposalModalComponent],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss'
})
export class CourseDetailComponent {
  @Input() course: Course | null = null;
  paymentConfirmed: boolean = false;
  paymentError: boolean = false;
  showPaymentModal: boolean = false;
  showStakeProposalModal: boolean = false;

  constructor(private courseService: CourseService) {}

  processPayment() {
    if (this.course) {
      this.courseService.processPayment(this.course.id).then((success) => {
        if (success) {
          this.paymentConfirmed = true;
          this.paymentError = false;
          this.showPaymentModal = true;
        } else {
          this.paymentConfirmed = false;
          this.paymentError = true;
          this.showPaymentModal = false;
        }
      });
    }
  }

  handlePaymentConfirmation(success: boolean) {
    this.showPaymentModal = false;
    if (success) {
      this.showStakeProposalModal = true;
      this.paymentConfirmed = true;
    } else {
      this.paymentError = true;
    }
  }

  handleStakeConfirmation(amount: number) {
    this.showStakeProposalModal = false;
    if (amount > 0) {
      alert(`Staked ${amount} tokens on Solana blockchain!`);
    }
  }
}