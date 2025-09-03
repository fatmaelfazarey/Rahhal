export interface Iservics {
    name: string;
    marketingSentence: string;
    price: number;
    time: string;
    orders: number;
    CustomerSatisfaction: string;
    description: string;
    serviceFeatures: string[];
    images: string[];
    videos: string[];
}

// export interface IserviceFeature {
//     feature: string;
// }

export interface IservicePageContent {
    dismantle: Iservics;
    assemble: Iservics;
    moving: Iservics;
    packing: Iservics;
    shipping: Iservics;
    cleaning: Iservics;
}