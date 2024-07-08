import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private popupVisible = new BehaviorSubject<boolean>(false); // Imposta la visibilità iniziale su false
  popupVisible$ = this.popupVisible.asObservable();

  showPopup() {
    this.popupVisible.next(true);
  }

  hidePopup() {
    this.popupVisible.next(false);
  }

  togglePopup() {
    this.popupVisible.next(!this.popupVisible.value);
  }
}
