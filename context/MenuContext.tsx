
import React, { createContext, useState, ReactNode, useCallback } from 'react';
import { MenuCategory, MenuItem } from '../types';
import { INITIAL_MENU_DATA } from '../constants';

interface MenuContextType {
  menuData: MenuCategory[];
  addItem: (categoryId: string, itemName: string, description?: string, price?: string) => void;
  deleteItem: (categoryId: string, itemId: number) => void;
}

export const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [menuData, setMenuData] = useState<MenuCategory[]>(INITIAL_MENU_DATA);

  const addItem = useCallback((categoryId: string, itemName: string, description?: string, price?: string) => {
    if (!itemName.trim()) return;

    const newItem: MenuItem = {
      id: Date.now(),
      name: itemName,
      description: description,
      price: price,
    };

    setMenuData(prevData =>
      prevData.map(category => {
        if (category.id === categoryId) {
          return {
            ...category,
            items: [...category.items, newItem],
          };
        }
        return category;
      })
    );
  }, []);

  const deleteItem = useCallback((categoryId: string, itemId: number) => {
    setMenuData(prevData =>
      prevData.map(category => {
        if (category.id === categoryId) {
          return {
            ...category,
            items: category.items.filter(item => item.id !== itemId),
          };
        }
        return category;
      })
    );
  }, []);

  return (
    <MenuContext.Provider value={{ menuData, addItem, deleteItem }}>
      {children}
    </MenuContext.Provider>
  );
};