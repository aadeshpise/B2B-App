import { ProductItem, ServiceItem, StepItem } from "./types";

export const CONTACT_INFO = {
  email: "support@woavenir.com",
  phone: "+91 7972273828",
  address: "108, Lane 9, Rajas Society, Katraj - 411046, Pune",
};

export const PRODUCTS: ProductItem[] = [
  {
    id: "1",
    title: "Premium Heavyweight Hoodie",
    category: "Streetwear",
    imageUrl: "https://picsum.photos/id/447/600/800",
  },
  {
    id: "2",
    title: "Oversized French Terry T-Shirt",
    category: "Casual Luxury",
    imageUrl: "https://picsum.photos/id/823/600/800",
  },
  {
    id: "3",
    title: "Classic Premium Polo",
    category: "Smart Casual",
    imageUrl: "https://picsum.photos/id/1059/600/800",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "dtf",
    title: "DTF Printing",
    description: "High-definition Direct to Film transfers for vibrant, durable designs.",
    imageUrl: "https://picsum.photos/id/250/500/300",
  },
  {
    id: "embroidery",
    title: "Premium Embroidery",
    description: "Classic thread work for a sophisticated, textured finish.",
    imageUrl: "https://picsum.photos/id/338/500/300",
  },
  {
    id: "3d-dtf",
    title: "3D DTF & Puff Print",
    description: "Raised dimensional printing for tactile, streetwear aesthetics.",
    imageUrl: "https://picsum.photos/id/403/500/300",
  },
  {
    id: "screen",
    title: "Silk Screen Printing",
    description: "Traditional bulk printing ideal for large orders and bold colors.",
    imageUrl: "https://picsum.photos/id/449/500/300",
  },
];

export const PROCESS_STEPS: StepItem[] = [
  {
    number: "01",
    title: "Choose Product",
    description: "Select from our catalogue of premium fabrics and cuts.",
  },
  {
    number: "02",
    title: "Finalize Design",
    description: "Send us your artwork for digital proofs and approval.",
  },
  {
    number: "03",
    title: "Easy Payment",
    description: "Secure invoicing and flexible B2B payment terms.",
  },
  {
    number: "04",
    title: "Order Delivered",
    description: "Prompt Pan-India logistics straight to your warehouse.",
  },
];