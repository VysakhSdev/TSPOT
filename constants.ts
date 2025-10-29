import { MenuCategory } from './types';

let itemId = 0;

export const INITIAL_MENU_DATA: MenuCategory[] = [
  {
    id: 'hot',
    title: 'Hot',
    imageUrl: 'https://images.unsplash.com/photo-1512568400610-62da2848a094?q=80&w=3000&auto=format&fit=crop',
    items: [
      { id: ++itemId, name: 'Tea', description: 'Classic spiced tea', price: '₹20' },
      { id: ++itemId, name: 'Coffee', description: 'Freshly brewed coffee', price: '₹30' },
      { id: ++itemId, name: 'Boost', price: '₹40' },
      { id: ++itemId, name: 'Horlicks', price: '₹40' },
      { id: ++itemId, name: 'Badam Tea', price: '₹40' },
    ],
  },
  {
    id: 'drinks',
    title: 'Drinks',
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2500&auto=format&fit=crop',
    items: [
      { id: ++itemId, name: 'Lime', price: '₹30' },
      { id: ++itemId, name: 'Cold Coffee', price: '₹80' },
      { id: ++itemId, name: 'Boost Milk', price: '₹60' },
      { id: ++itemId, name: 'Horlicks Milk', price: '₹60' },
      { id: ++itemId, name: 'Badam Milk', price: '₹70' },
      { id: ++itemId, name: 'Pista Milk', price: '₹70' },
    ],
  },
  {
    id: 'specials',
    title: 'Specials',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2800&auto=format&fit=crop',
    columns: 2,
    items: [
      { id: ++itemId, name: 'Coconut Chicken', description: 'A creamy, coconut-based chicken curry', price: '₹180' },
      { id: ++itemId, name: 'Chicken Wings', price: '₹150' },
      { id: ++itemId, name: 'Bread Coin', price: '₹120' },
      { id: ++itemId, name: 'Spring Roll', price: '₹90' },
      { id: ++itemId, name: 'Bun Shawarma', price: '₹130' },
      { id: ++itemId, name: 'Chicken Pottitheri', price: '₹190' },
      { id: ++itemId, name: 'Cheese Roll', price: '₹100' },
      { id: ++itemId, name: 'Hassan Mathar', price: '₹160' },
      { id: ++itemId, name: 'Zinger Mathar', price: '₹170' },
      { id: ++itemId, name: 'Dynamic Chicken', price: '₹200' },
    ],
  },
   {
    id: 'live',
    title: 'Live',
    imageUrl: 'https://images.unsplash.com/photo-1563379926898-059611b05de8?q=80&w=2900&auto=format&fit=crop',
    items: [
      { id: ++itemId, name: 'Noodles', price: '₹120' },
      { id: ++itemId, name: 'Macroni', price: '₹130' },
      { id: ++itemId, name: 'Fried Rice', price: '₹140' },
      { id: ++itemId, name: 'Chicken Kebab', price: '₹180' },
    ],
  },
  {
    id: 'snacks',
    title: 'Snacks',
    imageUrl: 'https://images.unsplash.com/photo-1552526881-72728af02132?q=80&w=2900&auto=format&fit=crop',
    columns: 2,
    items: [
      { id: ++itemId, name: 'Samosa', price: '₹15' },
      { id: ++itemId, name: 'Cutlet', price: '₹20' },
      { id: ++itemId, name: 'Unnakai', price: '₹25' },
      { id: ++itemId, name: 'Chicken Roll', price: '₹40' },
      { id: ++itemId, name: 'Irachi Pathiri', price: '₹30' },
      { id: ++itemId, name: 'Chattipathiri', price: '₹35' },
      { id: ++itemId, name: 'Ada', price: '₹20' },
      { id: ++itemId, name: 'Puffs', price: '₹20' },
      { id: ++itemId, name: 'Kaimas', price: '₹25' },
      { id: ++itemId, name: 'Kalumakaya', price: '₹30' },
      { id: ++itemId, name: 'Chemmeen Pathiri', price: '₹40' },
      { id: ++itemId, name: 'Chicken Chattipathiri', price: '₹45' },
      { id: ++itemId, name: 'Bread Pocket', price: '₹50' },
      { id: ++itemId, name: 'Koonthal Nirachath', price: '₹60' },
    ],
  },
  {
    id: 'fries',
    title: 'Fries',
    imageUrl: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=2500&auto=format&fit=crop',
    items: [
      { id: ++itemId, name: 'Normal French', price: '₹80' },
      { id: ++itemId, name: 'Loaded Fries', price: '₹120' },
      { id: ++itemId, name: 'Cheese Loaded', price: '₹140' },
    ],
  },
  {
    id: 'momos',
    title: 'Momos',
    imageUrl: 'https://images.unsplash.com/photo-1625220194771-7ebdea0d3db3?q=80&w=2800&auto=format&fit=crop',
    items: [
      { id: ++itemId, name: 'Steamed Momos', price: '₹100' },
      { id: ++itemId, name: 'Fried Momos', price: '₹110' },
      { id: ++itemId, name: 'Kurkure Momos', price: '₹130' },
      { id: ++itemId, name: 'Pantry Momos', price: '₹140' },
    ],
  },
  {
    id: 'burgers_wrap',
    title: 'Burgers & Wrap',
    imageUrl: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2900&auto=format&fit=crop',
    columns: 2,
    items: [
      { id: ++itemId, name: 'Burger', price: '₹120' },
      { id: ++itemId, name: 'Sandwich', price: '₹100' },
      { id: ++itemId, name: 'Club Sandwich', price: '₹150' },
      { id: ++itemId, name: 'Chicken Wrap', price: '₹140' },
      { id: ++itemId, name: 'Zinger Wrap', price: '₹160' },
    ],
  },
  {
    id: 'beverages',
    title: 'Beverages',
    imageUrl: 'https://images.unsplash.com/photo-1600095991392-0b43d5516930?q=80&w=2800&auto=format&fit=crop',
    items: [
      { id: ++itemId, name: 'Fresh Juice', price: '₹90' },
      { id: ++itemId, name: 'Shakes', price: '₹120' },
      { id: ++itemId, name: 'Falooda', price: '₹150' },
      { id: ++itemId, name: 'Mojitho', price: '₹110' },
    ]
  }
];