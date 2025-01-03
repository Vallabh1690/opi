export interface Platform {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  image: string;
  category: 'streaming' | 'live' | 'cart';
}

export interface CartItem extends Platform {
  quantity: number;
}