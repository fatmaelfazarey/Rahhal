// src/app/config/nav.config.ts
// export const NavBar = [
//     { text: "الرئيسية", navigateTo: "/" },
//     { text: "من نحن", navigateTo: "/about" },
//     { text: "الخدمات", navigateTo: "/services" },
//     { text: "اتصل بنا", navigateTo: "/contact" }
// ];

export const FAQData = [
    {

        question: "كيف يمكنني حجز خدمة النقل؟",
        answer: "يمكنك حجز الخدمة بسهولة من خلال الموقع عبر اختيار الباقة المناسبة، ثم إدخال بياناتك والتأكيد على موعد النقل."
    },
    {
        question: "هل توفرون خدمة تغليف الأثاث؟",
        answer: "نعم، نوفر خدمة تغليف وحماية الأثاث باستخدام مواد آمنة لضمان وصوله دون أي تلف."
    },
    {
        question: "هل يمكنني متابعة الشحنة أثناء النقل؟",
        answer: "بالتأكيد، نوفر لك إمكانية تتبع الشحنة خطوة بخطوة حتى تصل إلى وجهتها."
    },
    {
        question: "ما هي طرق الدفع المتاحة؟",
        answer: "نوفر عدة طرق للدفع مثل الدفع الإلكتروني، بطاقات الائتمان، أو الدفع نقدًا عند الاستلام."
    },
    {
        question: "هل تغطون جميع المدن؟",
        answer: "نعم، نقدم خدمات النقل داخل نفس المدينة، بين المدن المختلفة، بالإضافة إلى الشحن الدولي البري والبحري والجوي."
    },
    {
        question: "ماذا أفعل إذا أردت تغيير موعد الحجز؟",
        answer: "يمكنك تعديل أو إلغاء الحجز بسهولة من خلال صفحة الحساب الشخصي أو عبر التواصل مع خدمة العملاء."
    },
    {
        question: "هل توجد تأمينات على الأثاث المنقول؟",
        answer: "نعم، نقدم خيار التأمين على الأثاث لضمان حماية ممتلكاتك ضد أي مخاطر محتملة أثناء النقل."
    }
];

export const Services = [
    { name: "خدمة تفكيك الأساس", navigateTo: '/dismantle' },
    { name: "خدمة تركيب الأساس", navigateTo: '/assemble' },
    { name: "خدمة نقل الأساس", navigateTo: '/moving' },
    { name: "خدمة التغليف", navigateTo: '/packing' },
    { name: "خدمة الشحن", navigateTo: '/shipping' },
    { name: "خدمة التنظيف بعد النقل", navigateTo: '/cleaning' }
]
export const NavBar = [
    { text: "الرئيسية", navigateTo: "/", fragment: undefined },
    { text: "من نحن", navigateTo: "/", fragment: "about" },
    { text: "الخدمات", navigateTo: "/", fragment: 'services' },
    { text: "اتصل بنا", navigateTo: "/", fragment: 'contact' }
];