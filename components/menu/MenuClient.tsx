"use client";

import React from 'react';
import {
  UtensilsCrossed,
  Wine,
  Cake,
} from 'lucide-react';
import {
  Container,
  Tabs,
} from '@mantine/core';

interface Variation {
  name: string;
  price: string;
}

interface MenuItemData {
  name: string;
  description: string;
  price?: string;
  variations?: Variation[];
  vegetarian?: boolean;
}

interface MenuItemProps {
  item: MenuItemData;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <div className="py-4 border-b border-blue-100 last:border-b-0" role="article" aria-labelledby={`item-${item.name.replace(/\s+/g, '-').toLowerCase()}`}>
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 id={`item-${item.name.replace(/\s+/g, '-').toLowerCase()}`} className="text-lg font-medium text-gray-800">{item.name}</h3>
            {item.vegetarian && (
              <span className="text-green-600 text-sm font-medium bg-green-50 px-2 py-1 rounded-full border border-green-200" aria-label="Vegetarian option">
                🌱 V
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600 mb-2" aria-describedby={`item-${item.name.replace(/\s+/g, '-').toLowerCase()}`}>{item.description}</p>
          
          {/* Show variations if they exist */}
          {item.variations && (
            <div className="space-y-1" role="list" aria-label={`${item.name} variations`}>
              {item.variations.map((variation, index) => (
                <div key={index} className="flex justify-between items-center text-sm" role="listitem">
                  <span className="text-gray-700 ml-4">• {variation.name}</span>
                  <span className="text-lg font-medium text-[#0D71C9]" aria-label={`Price: ${variation.price} Australian dollars`}>${variation.price}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Show single price if no variations */}
        {item.price && !item.variations && (
          <span className="text-lg font-medium text-[#0D71C9] ml-4" aria-label={`Price: ${item.price} Australian dollars`}>${item.price}</span>
        )}
      </div>
    </div>
  );
};

interface MenuSectionProps {
  title: string;
  items: MenuItemData[];
  subtitle?: string;
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, items, subtitle }) => {
  // Split items into two columns
  const midPoint = Math.ceil(items.length / 2);
  const leftColumn = items.slice(0, midPoint);
  const rightColumn = items.slice(midPoint);
  const sectionId = `section-${title.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className="mb-12" role="region" aria-labelledby={sectionId}>
      <h2 id={sectionId} className="text-3xl font-bold text-[#0D71C9] mb-4 text-center">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 text-center mb-8 italic" aria-describedby={sectionId}>{subtitle}</p>
      )}
      <div className="bg-white rounded-lg shadow-sm p-6" role="region" aria-labelledby={sectionId}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            {leftColumn.map((item, index) => (
              <MenuItem key={index} item={item} />
            ))}
          </div>
          
          {/* Right Column */}
          <div>
            {rightColumn.map((item, index) => (
              <MenuItem key={index + midPoint} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface MenuClientProps {
  menuData: {
    food: {
      dips: MenuItemData[];
      starters: MenuItemData[];
      chips: MenuItemData[];
      salads: MenuItemData[];
      pitas: MenuItemData[];
      mains: MenuItemData[];
      kids: MenuItemData[];
      extras: MenuItemData[];
    };
    drinks: {
      spirits: MenuItemData[];
      wine: MenuItemData[];
      beverages: MenuItemData[];
    };
    desserts: MenuItemData[];
  };
}

export default function MenuClient({ menuData }: MenuClientProps) {
  // Transform JSON data into sections
  const foodSections = [
    { title: 'Dips', items: menuData.food.dips, subtitle: 'All served with pita' },
    { title: 'Starters', items: menuData.food.starters, subtitle: 'Perfect beginnings to your Greek journey' },
    { title: 'Chips', items: menuData.food.chips, subtitle: 'Fresh-cut handmade, not frozen' },
    { title: 'Salads', items: menuData.food.salads, subtitle: 'Crisp, fresh and Mediterranean-inspired' },
    { title: 'Pitas', items: menuData.food.pitas, subtitle: 'Authentic Greek street food wrapped to perfection' },
    { title: 'Mains', items: menuData.food.mains, subtitle: 'Hearty plates that bring Greece to your table' },
    { title: "Kid's Menu", items: menuData.food.kids, subtitle: 'Little portions, big flavours' },
    { title: 'Extras', items: menuData.food.extras, subtitle: 'Add-ons to existing plates - make it your own' },
  ];

  const drinkSections = [
    { title: 'Spirits', items: menuData.drinks.spirits, subtitle: 'Greek classics and premium selections' },
    { title: 'Wine - OINOE', items: menuData.drinks.wine, subtitle: 'Carefully curated Mediterranean wines' },
    { title: 'Beverages', items: menuData.drinks.beverages, subtitle: 'Hot, cold and refreshing drinks' },
  ];

  const dessertSections = [
    { title: 'Desserts', items: menuData.desserts, subtitle: 'Traditional Greek treats to end your meal perfectly' },
  ];

  return (
    <div className="min-h-screen bg-blue-50 pt-32 pb-16">
      <Container size="xl">
        <div className="text-center mb-16" role="banner">
          <h1 className="text-5xl font-bold text-[#0D71C9] mb-4">
            Menu
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our menu is packed with authentic souvlaki, fresh salads, hearty plates, and homemade favourites—each dish crafted with love, tradition, and the freshest ingredients.
          </p>
        </div>

        <Tabs defaultValue="food" role="tablist" aria-label="Restaurant menu categories">
          <Tabs.List grow className="mb-8 flex justify-center" role="tablist">
            <Tabs.Tab
              value="food"
              leftSection={<UtensilsCrossed className="mr-2 w-5 h-5" aria-hidden="true" />}
              role="tab"
              aria-controls="food-panel"
              aria-selected="true"
            >
              Food Menu
            </Tabs.Tab>
            <Tabs.Tab
              value="drinks"
              leftSection={<Wine className="mr-2 w-5 h-5" aria-hidden="true" />}
              role="tab"
              aria-controls="drinks-panel"
              aria-selected="false"
            >
              Drink Menu
            </Tabs.Tab>
            <Tabs.Tab
              value="desserts"
              leftSection={<Cake className="mr-2 w-5 h-5" aria-hidden="true" />}
              role="tab"
              aria-controls="desserts-panel"
              aria-selected="false"
            >
              Desserts
            </Tabs.Tab>
          </Tabs.List>

          {/* Food Menu Tab Panel */}
          <Tabs.Panel value="food" id="food-panel" role="tabpanel" aria-labelledby="food-tab">
            <div>
              {foodSections.map((section, index) => (
                <MenuSection 
                  key={index} 
                  title={section.title} 
                  items={section.items}
                  subtitle={section.subtitle}
                />
              ))}
            </div>
          </Tabs.Panel>

          {/* Drink Menu Tab Panel */}
          <Tabs.Panel value="drinks" id="drinks-panel" role="tabpanel" aria-labelledby="drinks-tab">
            <div>
              {drinkSections.map((section, index) => (
                <MenuSection 
                  key={index} 
                  title={section.title} 
                  items={section.items}
                  subtitle={section.subtitle}
                />
              ))}
            </div>
          </Tabs.Panel>

          {/* Desserts Tab Panel */}
          <Tabs.Panel value="desserts" id="desserts-panel" role="tabpanel" aria-labelledby="desserts-tab">
            <div>
              {dessertSections.map((section, index) => (
                <MenuSection 
                  key={index} 
                  title={section.title} 
                  items={section.items}
                  subtitle={section.subtitle}
                />
              ))}
            </div>
          </Tabs.Panel>
        </Tabs>
      </Container>
    </div>
  );
}