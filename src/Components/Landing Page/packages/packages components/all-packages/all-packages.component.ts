import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-packages',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './all-packages.component.html',
  styleUrl: './all-packages.component.css'
})
export class AllPackagesComponent implements OnChanges {
  @Input() category: string = 'all';

  filteredPackages: any[] = [];

  allPackages = [
    {
      "id": "same-building-1",
      "name": "الباقة الاقتصادية",
      "category": "same-building",
      "price": 500,
      "features": {
        "السريعنا من": true,
        "فك و تركيب": true,
        "تحميل و تنزيل": true,
        "تغليف الأثاث": false,
        "كرتون لا محدودة": false,
        "تعبئة الأغراض الشخصية": false,
        "تنظيف ما قبل التعبئة": false,
        "ترتيب المحتويات في المنزل الجديد": false
      }
    },
    {
      "id": "same-building-2",
      "name": "الباقة الاقتصادية+",
      "category": "same-building",
      "price": 550,
      "features": {
        "السريعنا من": true,
        "فك و تركيب": true,
        "تحميل و تنزيل": true,
        "تغليف الأثاث": true,
        "كرتون لا محدودة": false,
        "تعبئة الأغراض الشخصية": false,
        "تنظيف ما قبل التعبئة": false,
        "ترتيب المحتويات في المنزل الجديد": false
      }
    },
    {
      "id": "same-building-3",
      "name": "الباقة الأساسية",
      "category": "same-building",
      "price": 630,
      "features": {
        "السريعنا من": true,
        "فك و تركيب": true,
        "تحميل و تنزيل": true,
        "تغليف الأثاث": true,
        "كرتون لا محدودة": true,
        "تعبئة الأغراض الشخصية": false,
        "تنظيف ما قبل التعبئة": false,
        "ترتيب المحتويات في المنزل الجديد": false
      }
    },
    {
      "id": "same-building-4",
      "name": "الباقة المتكاملة",
      "category": "same-building",
      "price": 690,
      "features": {
        "السريعنا من": true,
        "فك و تركيب": true,
        "تحميل و تنزيل": true,
        "تغليف الأثاث": true,
        "كرتون لا محدودة": true,
        "تعبئة الأغراض الشخصية": true,
        "تنظيف ما قبل التعبئة": true,
        "ترتيب المحتويات في المنزل الجديد": false
      }
    },
    {
      "id": "same-city-1",
      "name": "داخل نفس المدينة",
      "category": "same-city",
      "price": 1450,
      "features": {
        "السريعنا من": true,
        "فك و تركيب": true,
        "تحميل و تنزيل": true,
        "تغليف الأثاث": true,
        "كرتون لا محدودة": true,
        "تعبئة الأغراض الشخصية": true,
        "تنظيف ما قبل التعبئة": true,
        "ترتيب المحتويات في المنزل الجديد": true
      }
    },
    {
      "id": "city-to-city-1",
      "name": "عابر (النقل بين المدن)",
      "category": "city-to-city",
      "price": "بناءً على المسافة",
      "features": {
        "السريعنا من": true,
        "فك و تركيب": true,
        "تحميل و تنزيل": true,
        "تغليف الأثاث": true,
        "كرتون لا محدودة": true,
        "تعبئة الأغراض الشخصية": true,
        "تنظيف ما قبل التعبئة": true,
        "ترتيب المحتويات في المنزل الجديد": true
      }
    },
    {
      "id": "country-to-country-1",
      "name": "النقل الدولي (بين الدول)",
      "category": "country-to-country",
      "price": "حسب الوجهة",
      "features": {
        "السريعنا من": true,
        "فك و تركيب": true,
        "تحميل و تنزيل": true,
        "تغليف الأثاث": true,
        "كرتون لا محدودة": true,
        "تعبئة الأغراض الشخصية": true,
        "تنظيف ما قبل التعبئة": true,
        "ترتيب المحتويات في المنزل الجديد": true
      }
    }
  ];

  ngOnChanges(): void {
    this.filterPackages();
  }

  filterPackages(): void {
    if (this.category === 'all') {
      this.filteredPackages = this.allPackages;
    } else {
      this.filteredPackages = this.allPackages.filter(pkg => pkg.category === this.category);
    }
  }

  getCategoryName(categoryId: string): string {
    const categories: any = {
      'same-building': 'داخل نفس المبنى',
      'same-city': 'داخل نفس المدينة',
      'city-to-city': 'مدينة إلى مدينة',
      'country-to-country': 'دولة إلى دولة'
    };
    return categories[categoryId] || '';
  }

  isNumber(value: any): boolean {
    return typeof value === 'number';
  }

  // دالة جديدة للحصول على جميع الميزات الفريدة
  getAllFeatures(): string[] {
    if (this.filteredPackages.length === 0) return [];

    // جمع جميع الميزات الفريدة من جميع الباقات
    const allFeatures = new Set<string>();
    this.filteredPackages.forEach(pkg => {
      Object.keys(pkg.features).forEach(feature => {
        allFeatures.add(feature);
      });
    });

    return Array.from(allFeatures);
  }
}