"use client";

import React from 'react';

import {
  UtensilsCrossed,
  Wine,
} from 'lucide-react';

import {
  Container,
  Tabs,
} from '@mantine/core';

interface MenuItemProps {
  name: string;
  price: string;
  description: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, price, description }) => {
  return (
    <div className="flex justify-between items-center py-3 border-b border-blue-100">
      <div className="flex gap-4">
        <div>
          <h3 className="text-lg font-medium text-gray-800">{name}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
      <span className="text-lg font-medium text-blue-600">${price}</span>
    </div>
  );
};

interface MenuSectionProps {
  title: string;
  items: MenuItemProps[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, items }) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl text-center font-sedgwick text-[#0D71C9] mb-8">
        {title}
      </h2>
      <div className="bg-white rounded-lg shadow-sm p-6">
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default function MenuPage() {
  // Food items
  const starters: MenuItemProps[] = [
    {
      name: "Spanakopita",
      price: "13.00",
      description: "Homemade pie with spinach and feta",
    },
    {
      name: "Tiropita",
      price: "13.00",
      description: "Homemade cheese pie",
    },
    {
      name: "Haloumi plate",
      price: "13.00",
      description: "4 pcs of grilled halloumi cheese",
    },
    {
      name: "Dolmades",
      price: "13.00",
      description: "6 pcs of vine leaves stuffed with rice & herbs",
    },
  ];

  const pitas: MenuItemProps[] = [
    {
      name: "Gyros Pita",
      price: "14.50",
      description:
        "Pita bread filled with marinated lamb, pork or chicken skewers, chips, tomato, red onion",
    },
    {
      name: "Souvlaki Pita",
      price: "14.50",
      description:
        "Pita bread filled with marinated lamb, pork or chicken skewers, chips, tomato, red onion",
    },
  ];

  const plates: MenuItemProps[] = [
    {
      name: "Gyros plate",
      price: "14.50",
      description:
        "Choose between: Tzatziki, Spicy Cheese, Taramosalata, Eggplant or Skordalia",
    },
    {
      name: "Souvlaki plate",
      price: "14.50",
      description:
        "Choose between: Tzatziki, Spicy Cheese, Taramosalata, Eggplant or Skordalia",
    },
  ];

  // Drink items
  const drinks: MenuItemProps[] = [
    {
      name: "Coca-Cola",
      price: "3.00",
      description: "Classic soda beverage",
    },
    {
      name: "Sprite",
      price: "3.00",
      description: "Lemon-lime soda",
    },
    {
      name: "Greek Beer",
      price: "7.00",
      description: "Mythos or Fix Hellas (imported)",
    },
    {
      name: "House Wine",
      price: "8.00",
      description: "Choice of red or white glass",
    },
  ];

  return (
    <div className="min-h-screen bg-blue-50 pt-32 pb-16">
      <Container size="lg">
        <h1 className="text-5xl text-center font-sedgwick text-[#0D71C9] mb-16">
          Menu
        </h1>

        <Tabs defaultValue="food">
          <Tabs.List grow className="mb-8 flex justify-center">
            {/* Food Menu Tab with icon */}
            <Tabs.Tab
              value="food"
              leftSection={<UtensilsCrossed className="mr-2 w-5 h-5" />}
            >
              Food Menu
            </Tabs.Tab>

            {/* Drink Menu Tab with icon */}
            <Tabs.Tab
              value="drinks"
              leftSection={<Wine className="mr-2 w-5 h-5" />}
            >
              Drink Menu
            </Tabs.Tab>
          </Tabs.List>

          {/* Food Menu Tab Panel */}
          <Tabs.Panel value="food">
            <MenuSection title="Starters" items={starters} />
            <MenuSection title="Pitas" items={pitas} />
            <MenuSection title="Plates" items={plates} />
          </Tabs.Panel>

          {/* Drink Menu Tab Panel */}
          <Tabs.Panel value="drinks">
            <MenuSection title="Drinks" items={drinks} />
          </Tabs.Panel>
        </Tabs>
      </Container>
    </div>
  );
}
