import React from 'react';
import { MenuItem } from '../types';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  return (
    <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-4 transition-all duration-300 hover:bg-black/40 hover:border-yellow-400/50 shadow-lg animate-fade-in-up">
      <div className="flex justify-between items-start gap-2">
          <h4 className="text-lg font-bold text-white">{item.name}</h4>
          {item.price && <p className="font-bold text-lg text-yellow-400 flex-shrink-0">{item.price}</p>}
      </div>
      {item.description && (
          <p className="text-sm text-gray-300 mt-1 pr-4">{item.description}</p>
      )}
    </div>
  );
};

export default MenuItemCard;