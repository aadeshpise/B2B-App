export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface ProductItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  units: string;
  details: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}