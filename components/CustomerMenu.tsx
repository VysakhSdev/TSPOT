import React, { useContext, useState, useMemo, useEffect } from 'react';
import { MenuContext } from '../context/MenuContext';
import { MenuCategory } from '../types';
import MenuItemCard from './MenuItemCard';

const Logo = () => (
    <div className="relative h-24 w-24 bg-yellow-400 flex items-center justify-center mx-auto">
        <div className="absolute -bottom-4 w-0 h-0 border-l-[48px] border-l-transparent border-r-[48px] border-r-transparent border-t-[18px] border-t-yellow-400"></div>
        <div className="text-center">
            <span className="text-black font-bold text-3xl font-anton tracking-wider">TSpot</span>
        </div>
    </div>
);

const CustomerMenu: React.FC = () => {
    const context = useContext(MenuContext);
    const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);

    if (!context) {
        return <div className="text-center text-white">Loading...</div>;
    }

    const { menuData } = context;

    const visibleCategories = useMemo(() => menuData.filter(cat => cat.items.length > 0), [menuData]);

    useEffect(() => {
        const categoryExists = visibleCategories.some(cat => cat.id === activeCategoryId);
        if (!categoryExists && visibleCategories.length > 0) {
            setActiveCategoryId(visibleCategories[0].id);
        }
    }, [visibleCategories, activeCategoryId]);
    
    const activeCategory = useMemo(
        () => visibleCategories.find(cat => cat.id === activeCategoryId),
        [activeCategoryId, visibleCategories]
    );

    return (
        <div className="w-full min-h-screen flex flex-col items-center p-2 sm:p-4">
            <header className="text-center my-6 sm:my-8 z-10">
                <Logo />
                <h1 className="text-5xl sm:text-6xl font-anton text-gray-100 tracking-wider mt-4">- FOOD -</h1>
                <h2 className="text-6xl sm:text-7xl font-anton text-yellow-400 tracking-wider">MENU</h2>
            </header>
            
            <main className="w-full max-w-6xl flex-grow bg-black/30 backdrop-blur-sm rounded-2xl shadow-2xl shadow-yellow-400/10 border border-white/10 overflow-hidden">
                <div className="p-4 border-b border-white/10">
                    <nav className="flex flex-wrap justify-center gap-2 sm:gap-3">
                        {visibleCategories.map(category => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategoryId(category.id)}
                                className={`px-3 py-2 text-sm sm:px-4 sm:py-2 sm:text-base font-bold rounded-full transition-all duration-300 ${
                                    activeCategoryId === category.id
                                        ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/30'
                                        : 'bg-gray-700/50 text-white hover:bg-gray-600/70'
                                }`}
                            >
                                {category.title}
                            </button>
                        ))}
                    </nav>
                </div>

                <div className="relative">
                    <div
                        key={activeCategory?.id}
                        className="w-full h-[600px] bg-cover bg-center transition-opacity duration-500 ease-in-out animate-fade-in"
                        style={{ backgroundImage: `url(${activeCategory?.imageUrl})`}}
                    >
                         <div className="absolute inset-0 bg-black/60"></div>
                    </div>
                    
                    <div className="absolute inset-0 p-4 sm:p-6 md:p-8 overflow-y-auto">
                        {activeCategory && (
                             <div className={`grid grid-cols-1 ${activeCategory.columns === 2 ? 'lg:grid-cols-2' : 'md:grid-cols-2'} gap-4 sm:gap-6`}>
                                {activeCategory.items.map(item => (
                                    <MenuItemCard key={item.id} item={item} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CustomerMenu;