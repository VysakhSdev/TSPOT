export interface MenuItem {
  id: number;
  name: string;
  description?: string;
  price?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
  columns?: 1 | 2;
  imageUrl?: string;
}