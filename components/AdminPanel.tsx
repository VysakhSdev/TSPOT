import React, { useState, useContext, FormEvent, useEffect } from 'react';
import { MenuContext } from '../context/MenuContext';
import { TrashIcon } from './icons/TrashIcon';
import QRCodeGenerator from './QRCodeGenerator';

const AdminPanel: React.FC = () => {
  const context = useContext(MenuContext);
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  if (!context) {
    return <div>Loading context...</div>;
  }

  const { menuData, addItem, deleteItem } = context;

  useEffect(() => {
    const categoryExists = menuData.some(cat => cat.id === selectedCategory);
    if (!categoryExists && menuData.length > 0) {
      setSelectedCategory(menuData[0].id);
    }
  }, [menuData, selectedCategory]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (itemName && selectedCategory) {
      addItem(selectedCategory, itemName, itemDescription, itemPrice);
      setItemName('');
      setItemDescription('');
      setItemPrice('');
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-8 text-gray-200">
      <h1 className="text-4xl font-bold mb-8 text-gray-100 font-anton text-center">Admin Panel</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-white/10">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Add New Menu Item</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="itemName" className="block text-sm font-medium text-gray-400 mb-1">
                  Item Name
                </label>
                <input
                  id="itemName"
                  type="text"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 text-gray-200 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="e.g., Spicy Chicken Wings"
                  aria-label="New item name"
                  required
                />
              </div>
               <div>
                <label htmlFor="itemDescription" className="block text-sm font-medium text-gray-400 mb-1">
                  Description (Optional)
                </label>
                <textarea
                  id="itemDescription"
                  value={itemDescription}
                  onChange={(e) => setItemDescription(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 text-gray-200 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="e.g., A creamy, coconut-based chicken curry"
                  aria-label="New item description"
                  rows={2}
                />
              </div>
              <div>
                <label htmlFor="itemPrice" className="block text-sm font-medium text-gray-400 mb-1">
                  Price (Optional)
                </label>
                <input
                  id="itemPrice"
                  type="text"
                  value={itemPrice}
                  onChange={(e) => setItemPrice(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 text-gray-200 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="e.g., $9.99 or ₹150"
                  aria-label="New item price"
                />
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-400 mb-1">
                  Category
                </label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 text-gray-200 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  aria-label="Item category"
                >
                  {menuData.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.title}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-400 text-black font-bold py-2 px-4 rounded-md hover:bg-yellow-500 transition-colors duration-200"
              >
                Add Item
              </button>
            </form>
          </div>
          <QRCodeGenerator />
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-white/10">
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">Manage Menu</h2>
          <div className="space-y-6 max-h-[720px] overflow-y-auto pr-2">
            {menuData.map(category => (
              <div key={category.id}>
                <h3 className="text-xl font-semibold text-yellow-400 mb-3 border-b-2 border-gray-700 pb-2">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map(item => (
                    <li key={item.id} className="flex justify-between items-start bg-gray-700/50 p-3 rounded-md">
                      <div className="flex-grow">
                        <span className="font-semibold text-gray-100">{item.name}</span>
                        {item.price && <span className="text-yellow-400 font-medium ml-2">{item.price}</span>}
                        {item.description && <p className="text-sm text-gray-400 mt-1">{item.description}</p>}
                      </div>
                      <button
                        onClick={() => deleteItem(category.id, item.id)}
                        className="text-red-500 hover:text-red-400 p-1 rounded-full hover:bg-gray-600 ml-2 flex-shrink-0"
                        aria-label={`Delete ${item.name}`}
                      >
                        <TrashIcon />
                      </button>
                    </li>
                  ))}
                  {category.items.length === 0 && <li className="text-gray-500 italic">No items in this category.</li>}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;