import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stake-proposal-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './stake-proposal-modal.component.html',
  styleUrls: ['./stake-proposal-modal.component.scss']
})
export class StakeProposalModalComponent {
  @Output() stakeConfirmed = new EventEmitter<number>();
  stakeAmount: number = 50; // Default stake amount

  confirmStake() {
    this.stakeConfirmed.emit(this.stakeAmount);
  }
}
