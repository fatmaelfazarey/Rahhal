// import { FAQData } from './../../../Store/Store';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-faq',
//   standalone: true,
//   imports: [],
//   templateUrl: './faq.component.html',
//   styleUrl: './faq.component.css'
// })
// export class FAQComponent {
//   FAQData = FAQData;
// }


import { FAQData } from './../../../Store/Store';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent {
  FAQData = FAQData;
  openedItemId: number | null = null;

  toggleItem(id: number): void {
    this.openedItemId = this.openedItemId === id ? null : id;

  }
}