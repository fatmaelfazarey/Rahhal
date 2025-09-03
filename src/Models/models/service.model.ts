export interface ServiceFeature {
  feature: string;
}

export interface ServiceContent {
  name: string;
  marketingSentence: string;
  price: string;
  time: string;
  orders: string;
  CustomerSatisfaction: string;
  description: string;
  serviceFeatures: ServiceFeature[];
  images: string[];
  videos: string[];
}

export interface ServicePageContent {
  dismantle: ServiceContent;
  assemble: ServiceContent;
  moving: ServiceContent;
  packing: ServiceContent;
  shipping: ServiceContent;
  cleaning: ServiceContent;
}