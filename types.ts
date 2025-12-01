import type { ReactNode } from 'react';

export interface Destination {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  avatar: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
}