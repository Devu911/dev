export enum ContentType {
  BLOG_POST = 'Blog Post',
  SOCIAL_MEDIA = 'Social Media Caption',
  EMAIL_COPY = 'Email Newsletter',
  PRODUCT_DESC = 'Product Description'
}

export enum ToneType {
  PROFESSIONAL = 'Professional',
  WITTY = 'Witty',
  PERSUASIVE = 'Persuasive',
  EMPATHETIC = 'Empathetic'
}

export interface GeneratedContent {
  title: string;
  body: string;
  metaDescription?: string;
  tags: string[];
}

export interface ServicePackage {
  id: string;
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
}
