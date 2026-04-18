export type PriceTier = { label: string; amount: string };

export type MenuItem = {
  name: string;
  note?: string;
  price: string | PriceTier[];
};

export type MenuSection = {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
};

// A preview. The full menu lives at /menu.html for the QR code.
export const menuSections: MenuSection[] = [
  {
    id: "lolas-kitchen",
    title: "Lola's Kitchen",
    subtitle: "The heart of the house",
    items: [
      {
        name: "Crispy Pata",
        price: [
          { label: "Solo", amount: "398" },
          { label: "Sharing", amount: "628" },
          { label: "Family", amount: "1228" },
        ],
      },
      {
        name: "Sinigang na Baboy sa Palayok",
        price: [
          { label: "Solo", amount: "298" },
          { label: "Sharing", amount: "538" },
          { label: "Family", amount: "928" },
        ],
      },
      {
        name: "Bulalo",
        price: [
          { label: "Solo", amount: "308" },
          { label: "Sharing", amount: "608" },
          { label: "Family", amount: "1228" },
        ],
      },
      {
        name: "Sisig",
        price: [
          { label: "Solo", amount: "250" },
          { label: "Sharing", amount: "375" },
          { label: "Family", amount: "598" },
        ],
      },
    ],
  },
  {
    id: "love-a-burger",
    title: "Love-a-Burger",
    subtitle: "Flame-kissed, made with love",
    items: [
      { name: "Regular Burger", price: "185" },
      { name: "Special Burger", price: "285" },
      {
        name: "Burger ni Lolo",
        note: "Classic cheeseburger, done right",
        price: "220",
      },
      {
        name: "Burger ni Kuya",
        note: "Double patty, cheese, with sapin-sapin on the side",
        price: "285",
      },
    ],
  },
  {
    id: "para-sa-barkada",
    title: "Para sa Barkada",
    subtitle: "Long nights, slow pours, loud laughter",
    items: [
      {
        name: "Beer Bucket 5+1",
        note: "Mix and match, served with peanuts",
        price: "688",
      },
      {
        name: "Signature Tower Drink",
        note: "Galaxy Tower or Red Punch",
        price: "788",
      },
      {
        name: "Tower Drink Unlimited",
        note: "Unlimited refills, with pulutan",
        price: "1288",
      },
    ],
  },
];
