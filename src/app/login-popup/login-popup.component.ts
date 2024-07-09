import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PopupService } from '../popup.service';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class LoginPopupComponent {
  isLoginVisible = true;
  isRegisterVisible = false;

  constructor(private router: Router, public popupService: PopupService) {}

  showLogin() {
    this.isLoginVisible = true;
    this.isRegisterVisible = false;
  }

  showRegister() {
    this.isLoginVisible = false;
    this.isRegisterVisible = true;
  }

  async connectWalletLogin() {
    if ((window as any).solana && (window as any).solana.isPhantom) {
      try {
        const response = await (window as any).solana.connect();
        const walletPublicKey = response.publicKey.toString();
        (document.getElementById('login-wallet') as HTMLInputElement).value = walletPublicKey;
        alert(`Wallet collegato: ${walletPublicKey}`);
        this.submitWalletLogin(walletPublicKey);
      } catch (err) {
        console.error('Failed to connect to wallet:', err);
      }
    } else {
      alert('Phantom Wallet non trovato. Assicurati di averlo installato.');
    }
  }

  async submitWalletLogin(walletPublicKey: string) {
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ walletPublicKey })
      });

      const data = await response.json();
      if (data.success) {
        alert(data.message);
        this.popupService.hidePopup();
        this.router.navigate(['/homepage']);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async submitRegister() {
    const username = 'ciao';
    const email = 'ciao';
    const password = 'ciao';
  
    const bodyText = `username=${username}&email=${email}&password=${password}`;
  
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: bodyText
    };
  
    try {
      console.log('Invio della richiesta a http://127.0.0.1:4200/register');
      //const response = await fetch('http://127.0.0.1:4200/register', options);
  
      //if (!response.ok) {
      //  throw new Error(`HTTP error! status: ${response.status}`);
      //}
  
      //const contentType = response.headers.get('content-type');
      // console.log('Content-Type:', contentType);
  
      // if (!contentType || !contentType.includes('text/plain')) {
      //   const textResponse = await response.text();
      //   console.error('La risposta non è in formato text/plain:', textResponse);
      //   throw new TypeError("La risposta non è in formato text/plain");
      // }
  
      //const data = await response.text();
      console.log('Passo a HomePage');
      this.popupService.hidePopup();
      this.router.navigate(['/homepage']);
      
    //   if (data.includes('success')) { // Supponendo che il server risponda con 'success' in caso di successo
    //     alert('Registrazione completata con successo');
    //     this.popupService.hidePopup();
    //     this.router.navigate(['/homepage']);
    //   } else {
    //     alert('Errore durante la registrazione');
    //   }
     } catch (error) {
       console.error('Errore durante la registrazione:', error);
       alert(`Errore durante la registrazione:`);
     }
  }
  
  async connectWallet() {
    if ((window as any).solana && (window as any).solana.isPhantom) {
      try {
        const response = await (window as any).solana.connect();
        const walletPublicKey = response.publicKey.toString();
        (document.getElementById('register-wallet') as HTMLInputElement).value = walletPublicKey;
        alert(`Wallet collegato: ${walletPublicKey}`);
      } catch (err) {
        console.error('Failed to connect to wallet:', err);
      }
    } else {
      alert('Phantom Wallet non trovato. Assicurati di averlo installato.');
    }
  }

  async submitLogin() {
    const username = (document.getElementById('login-username') as HTMLInputElement).value;
    const password = (document.getElementById('login-password') as HTMLInputElement).value;
    if (this.validateLogin(username, password)) {
      try {
        const response = await fetch('/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        if (data.success) {
          alert(data.message);
          this.popupService.hidePopup();
          this.router.navigate(['/homepage']);
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }

  validateLogin(username: string, password: string): boolean {
    if (username === '' || password === '') {
      alert('Per favore, compila tutti i campi.');
      return false;
    }
    return true;
  }
}
