"use client";

import { useShop } from '../context/ShopContext';
import CarouselCard from '../components/CarouselCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { wellnessPractices } from '../content/wellness';
import { experiences } from '../content/experiences';
import { expressionPillars } from '../content/expression';
import { solitudePractices } from '../content/solitude';
import { residencies } from '../content/residency';

const allItems = [
  ...wellnessPractices.map((item, index) => ({ ...item, id: `wellness-${index}`})),
  ...experiences.map((item, index) => ({ ...item, id: `experience-${index}`})),
  ...expressionPillars.map((item, index) => ({ ...item, id: `expression-${index}`})),
  ...solitudePractices.map((item, index) => ({ ...item, id: `solitude-${index}`})),
  ...residencies.map((item, index) => ({ ...item, id: `residency-${index}`})),
];

export default function WishlistPage() {
  const { wishlist, toggleWishlist, addToCart, isItemInWishlist } = useShop();

  const wishlistedItems = allItems.filter(item => wishlist.has(item.id));

  return (
    <main className="min-h-screen bg-earth-900 text-earth-100">
      <Header />
      <div className="px-16 py-24">
        <h1 className="text-4xl font-bold text-gold-500 mb-8" style={{ fontFamily: 'Outfit, sans-serif' }}>Your Wishlist</h1>
        {wishlistedItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlistedItems.map((item) => (
              <CarouselCard
                key={item.id}
                title={item.title}
                description={item.description}
                images={item.images}
                icon={item.icon}
                category={(item as any).category}
                price={(item as any).price}
                userCount={(item as any).userCount}
                showActions={true}
                onAddToCart={() => addToCart(item.id)}
                onToggleWishlist={() => toggleWishlist(item.id)}
                isInWishlist={isItemInWishlist(item.id)}
              />
            ))}
          </div>
        ) : (
          <p className="text-earth-300 text-lg">Your wishlist is empty.</p>
        )}
      </div>
      <Footer />
    </main>
  );
}