"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ShopContextType {
  wishlist: Set<string>;
  cart: Set<string>;
  toggleWishlist: (id: string) => void;
  addToCart: (id: string) => void;
  isItemInWishlist: (id: string) => boolean;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};

interface ShopProviderProps {
  children: ReactNode;
}

export const ShopProvider: React.FC<ShopProviderProps> = ({ children }) => {
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());
  const [cart, setCart] = useState<Set<string>>(new Set());

  const toggleWishlist = (id: string) => {
    setWishlist(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      console.log('Wishlist updated:', Array.from(newSet));
      return newSet;
    });
  };

  const addToCart = (id: string) => {
    setCart(prev => {
      const newSet = new Set(prev);
      newSet.add(id);
      alert(`Added to cart!`);
      return newSet;
    });
  };

  const isItemInWishlist = (id: string) => {
    return wishlist.has(id);
  };

  return (
    <ShopContext.Provider value={{ wishlist, cart, toggleWishlist, addToCart, isItemInWishlist }}>
      {children}
    </ShopContext.Provider>
  );
};
