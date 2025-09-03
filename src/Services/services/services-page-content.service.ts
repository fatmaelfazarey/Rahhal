// import { ServiceContent } from './../../Models/models/service.model';
// import { Injectable } from '@angular/core';
// import { ServicesImage, ServicesVideo } from '../path/to/your/enums'; // Update path

// @Injectable({
//   providedIn: 'root'
// })
// export class ServicesPageContentService {
//   private servicePageContent: ServicePageContent = {
//     dismantle: {
//       name: "خدمة تفكيك الأساس",
//       marketingSentence: 'فك أثاثك بسهولة وسرعة مع الحفاظ على سلامته',
//       price: '350',
//       time: '45',
//       orders: "1200",
//       CustomerSatisfaction: '%96',
//       description: 'في رحّال نوفر خدمة فك الأساس بطريقة احترافية باستخدام أدوات حديثة وعلى يد فريق متخصص، لضمان عدم حدوث أي تلفيات للأثاث أو فقدان لقطع التركيب.',
//       serviceFeatures: [
//         'أدوات حديثة وآمنة.',
//         'أسعار تنافسية وباقات مرنة.',
//         'سرعة في التنفيذ مع الالتزام بالمواعيد.',
//         'فريق مدرَّب على جميع أنواع الأثاث.'
//       ],
//       images: [ServicesImage.Service_img_18, ServicesImage.Service_img_09, ServicesImage.Service_img_39, ServicesImage.Service_img_20, ServicesImage.Service_img_12, ServicesImage.Service_img_01],
//       videos: [ServicesVideo.Video_01, ServicesVideo.Video_02]

//     },

//     assemble: {
//       name: "خدمة تركيب الأساس",
//       marketingSentence: 'ركّب أثاثك بدقة وكفاءة مع خبراء رحّال',
//       price: '400',
//       time: '60',
//       orders: "980",
//       CustomerSatisfaction: '%94',
//       description: 'نوفّر لك خدمة تركيب الأساس بجودة عالية مع ضمان تثبيت جميع القطع بشكل متين وآمن، بما يضمن راحة وسلامة استخدام الأثاث بعد النقل.',
//       serviceFeatures: [
//         'تركيب احترافي لجميع أنواع الأثاث.',
//         'ضمان استقرار وجودة التركيب.',
//         'خدمة سريعة وموثوقة.',
//         'فريق مدرَّب بخبرة عملية طويلة.'
//       ],
//       images: [ServicesImage.Service_img_05, ServicesImage.Service_img_13, ServicesImage.Service_img_25, ServicesImage.Service_img_07, ServicesImage.Service_img_29],
//       videos: [ServicesVideo.Video_03, ServicesVideo.Video_04]
//     },

//     moving: {
//       name: "خدمة نقل الأساس",
//       marketingSentence: 'انقل أثاثك معنا بأمان وسهولة',
//       price: '600',
//       time: '90',
//       orders: "1500",
//       CustomerSatisfaction: '%97',
//       description: 'نوفر في رحّال شاحنات مجهزة وفريق عمل متخصص لنقل الأساس بأمان، مع ضمان الحماية من أي خدوش أو تلفيات خلال عملية النقل.',
//       serviceFeatures: [
//         'شاحنات مجهزة للنقل الآمن.',
//         'خدمة نقل سريعة داخل وخارج المدينة.',
//         'متابعة دقيقة لكل مرحلة من النقل.',
//         'التزام تام بمواعيد التسليم.'
//       ],
//       images: [ServicesImage.Service_img_02, ServicesImage.Service_img_16, ServicesImage.Service_img_31, ServicesImage.Service_img_19, ServicesImage.Service_img_08],
//       videos: [ServicesVideo.Video_06, ServicesVideo.Video_05]
//     },

//     packing: {
//       name: "خدمة التغليف",
//       marketingSentence: 'غلف أثاثك بمواد عالية الجودة لحمايته أثناء النقل',
//       price: '250',
//       time: '40',
//       orders: "1100",
//       CustomerSatisfaction: '%95',
//       description: 'خدمة التغليف باستخدام خامات عالية الجودة مثل الفقاعات البلاستيكية والكرتون المقوى لحماية الأثاث من الصدمات والخدوش أثناء النقل.',
//       serviceFeatures: [
//         'مواد تغليف عالية الجودة.',
//         'حماية ممتازة لجميع قطع الأثاث.',
//         'أسعار مناسبة للجميع.',
//         'فريق متخصص في التغليف الاحترافي.'
//       ],
//       images: [ServicesImage.Service_img_11, ServicesImage.Service_img_27, ServicesImage.Service_img_04, ServicesImage.Service_img_36, ServicesImage.Service_img_22],
//       videos: [ServicesVideo.Video_07, ServicesVideo.Video_08]
//     },

//     shipping: {
//       name: "خدمة الشحن",
//       marketingSentence: 'شحن سريع وآمن داخل وخارج حدود الوطن العربي',
//       price: '1500',
//       time: '120',
//       orders: "700",
//       CustomerSatisfaction: '%92',
//       description: 'خدمة شحن بري، بحري وجوي مع رحّال لتوصيل الأثاث أو الطرود بأمان إلى أي مكان تختاره داخل الوطن العربي، مع تتبع مباشر للشحنات.',
//       serviceFeatures: [
//         'خيارات شحن متعددة (بري، بحري، جوي).',
//         'تتبع الشحنات لحظة بلحظة.',
//         'ضمان وصول الطرود بأمان.',
//         'شركاء شحن معتمدين وموثوقين.'
//       ],
//       images: [ServicesImage.Service_img_03, ServicesImage.Service_img_15, ServicesImage.Service_img_26, ServicesImage.Service_img_34, ServicesImage.Service_img_21],
//       videos: [ServicesVideo.Video_09, ServicesVideo.Video_10]
//     },

//     cleaning: {
//       name: "خدمة التنظيف بعد النقل",
//       marketingSentence: 'نظافة تامة بعد عملية النقل لتستمتع بمكان مرتب',
//       price: '200',
//       time: '50',
//       orders: "850",
//       CustomerSatisfaction: '%93',
//       description: 'فريق رحّال يقدم خدمة تنظيف شاملة بعد النقل لإزالة الأتربة والمخلفات الناتجة عن عملية فك وتركيب ونقل الأثاث، لتستمتع بمكان نظيف ومهيأ للاستخدام.',
//       serviceFeatures: [
//         'تنظيف شامل وسريع.',
//         'مواد تنظيف آمنة وصديقة للبيئة.',
//         'أسعار اقتصادية للجميع.',
//         'فريق مدرَّب على أساليب التنظيف الحديثة.'
//       ],
//       images: [ServicesImage.Service_img_06, ServicesImage.Service_img_10, ServicesImage.Service_img_28, ServicesImage.Service_img_33, ServicesImage.Service_img_40],
//       videos: [ServicesVideo.Video_11, ServicesVideo.Video_12]
//     }
//   };

//   constructor() { }

//   // Get all services
//   getAllServices(): ServicePageContent {
//     return this.servicePageContent;
//   }

//   // Get specific service by key
//   getService(serviceKey: keyof ServicePageContent): ServiceContent {
//     return this.servicePageContent[serviceKey];
//   }

//   // Get service by name (alternative method)
//   getServiceByName(serviceName: string): ServiceContent | null {
//     const services = Object.values(this.servicePageContent);
//     return services.find(service => service.name === serviceName) || null;
//   }

//   // Get all service keys
//   getServiceKeys(): string[] {
//     return Object.keys(this.servicePageContent);
//   }
// }