import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  alertMessage: string = '';
  alertType: 'success' | 'error' | '' = '';
  showAlert: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^(\+?\d{1,3}[- ]?)?\d{10}$/)]],
      address: [''],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // You can add any initialization logic here
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Data: ', this.contactForm.value);
      
      // Simulate form submission
      this.simulateSubmit()
        .then(() => {
          this.showAlertMessage('تم إرسال رسالتك بنجاح، سنتواصل معك قريباً.', 'success');
          this.contactForm.reset();
        })
        .catch(() => {
          this.showAlertMessage('حدث خطأ أثناء إرسال الرسالة، يرجى المحاولة مرة أخرى.', 'error');
        });
    } else {
      // Mark all fields as touched to show validation messages
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
      
      this.showAlertMessage('يرجى ملء جميع الحقول المطلوبة بشكل صحيح.', 'error');
    }
  }

  // Show alert message
  showAlertMessage(message: string, type: 'success' | 'error'): void {
    this.alertMessage = message;
    this.alertType = type;
    this.showAlert = true;
    
    // Auto hide after 5 seconds
    setTimeout(() => {
      this.hideAlert();
    }, 5000);
  }
  
  // Hide alert manually
  hideAlert(): void {
    this.showAlert = false;
    this.alertType = '';
    this.alertMessage = '';
  }

  // Simulate an API call
  private simulateSubmit(): Promise<void> {
    return new Promise((resolve, reject) => {
      // Simulate network request with 80% success rate
      setTimeout(() => {
        if (Math.random() > 0.2) {
          resolve();
        } else {
          reject();
        }
      }, 1000);
    });
  }
}