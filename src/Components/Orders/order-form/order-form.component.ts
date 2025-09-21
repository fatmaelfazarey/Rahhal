import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  orderForm: FormGroup;
  calculatedPrice: number = 0;
  isOkey: boolean = false;

  // Package options
  packages = [
    { id: 'basic', name: 'الباقة الاقتصادية', price: 500 },
    { id: 'premium', name: 'الباقة الاقتصادية+', price: 900 },
    { id: 'gold', name: 'الباقة الأساسية', price: 1500 },
    { id: 'basic-1', name: 'الباقة المتكاملة', price: 500 },
    { id: 'premium-1', name: 'داخل نفس المدينة', price: 900 },
    { id: 'gold-1', name: ' عابر (النقل بين المدن)', price: 1500 },
    { id: 'gold-2', name: 'النقل الدولي (بين الدول)', price: 2500 }
  ];

  // Service options
  services = [
    { id: 'unpacking', name: 'فك الأثاث', price: 200 },
    { id: 'packing', name: 'التغليف', price: 300 },
    { id: 'installation', name: 'التركيب', price: 250 },
    { id: 'lifting', name: 'رفع الأثاث للأدوار العليا', price: 400 },
    { id: 'storage', name: 'التخزين', price: 350 },
    { id: 'cleaning', name: 'تنظيف بعد النقل', price: 200 }
  ];

  // Shipping options
  shippingOptions = [
    { id: 'land', name: 'بري' },
    { id: 'sea', name: 'بحري' },
    { id: 'air', name: 'جوي' }
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.orderForm = this.fb.group({
      fullName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      selectedPackages: this.fb.array([], Validators.required),
      selectedServices: this.fb.array([]),
      fromAddress: ['', Validators.required],
      toAddress: ['', Validators.required],
      rooms: [1, [Validators.required, Validators.min(1)]],
      itemsDescription: [''],
      itemImages: [''],
      shippingType: ['land']
    });
  }

  ngOnInit(): void {
    // Subscribe to form value changes to calculate price
    this.orderForm.valueChanges.subscribe(val => {
      this.calculatePrice();
    });
  }

  // Package selection handling
  onPackageChange(event: any) {
    const selectedPackages = this.orderForm.get('selectedPackages') as FormArray;
    if (event.target.checked) {
      selectedPackages.push(this.fb.control(event.target.value));
    } else {
      const index = selectedPackages.controls.findIndex(x => x.value === event.target.value);
      selectedPackages.removeAt(index);
    }
  }

  // Service selection handling
  onServiceChange(event: any) {
    const selectedServices = this.orderForm.get('selectedServices') as FormArray;
    if (event.target.checked) {
      selectedServices.push(this.fb.control(event.target.value));
    } else {
      const index = selectedServices.controls.findIndex(x => x.value === event.target.value);
      selectedServices.removeAt(index);
    }
  }

  // Calculate total price
  calculatePrice() {
    let total = 0;

    // Add package prices
    const selectedPackages = this.orderForm.get('selectedPackages')?.value;
    selectedPackages.forEach((pkgId: string) => {
      const pkg = this.packages.find(p => p.id === pkgId);
      if (pkg) total += pkg.price;
    });

    // Add service prices
    const selectedServices = this.orderForm.get('selectedServices')?.value;
    selectedServices.forEach((serviceId: string) => {
      const service = this.services.find(s => s.id === serviceId);
      if (service) total += service.price;
    });

    // Multiply by number of rooms
    const rooms = this.orderForm.get('rooms')?.value || 1;
    total *= rooms;

    this.calculatedPrice = total;
  }

  // Handle file selection
  onFileSelected(event: any) {
    const files = event.target.files;
    this.orderForm.patchValue({
      itemImages: files
    });
  }

  // Form submission
  onSubmit() {
    if (this.orderForm.valid) {
      this.isOkey = true;
      console.log('Form submitted:', this.orderForm.value);
      // alert('تم تأكيد طلبك بنجاح! سيتم التواصل معك قريباً.');
      // Here you would typically send the form data to your backend
    } else {
      alert('يرجى ملء جميع الحقول المطلوبة بشكل صحيح.');
    }
  }
  changeOkey() {

    this.isOkey = !this.isOkey;
    this.router.navigate(['/']);

  }
}