export type MenuItem = {
  name: string;
  note?: string;
  price: string;
};

export type MenuSection = {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
};

export const menuSections: MenuSection[] = [
  {
    id: "pampagana",
    title: "Pampagana",
    subtitle: "Small bites to start",
    items: [
      { name: "Kiara Kilawin", note: "tuna, calamansi, sili", price: "280" },
      { name: "Crispy Pata Flakes", note: "vinegar, soy, labuyo", price: "260" },
      { name: "Ensaladang Talong", note: "salted egg, tomato", price: "220" },
      { name: "Lumpiang Ubod", note: "heart of palm, peanut sauce", price: "240" },
    ],
  },
  {
    id: "lolas-kitchen",
    title: "Lola's Kitchen",
    subtitle: "Slow-cooked, home-style",
    items: [
      { name: "Adobo sa Gata", note: "pork belly, coconut, bay", price: "420" },
      { name: "Kaldereta", note: "beef, liver pâté, olives", price: "480" },
      { name: "Lola's Kare-Kare", note: "oxtail, tripe, bagoong", price: "520" },
      { name: "Tinolang Manok", note: "papaya, ginger broth", price: "380" },
    ],
  },
  {
    id: "love-a-burger",
    title: "Love-a-Burger",
    subtitle: "On soft brioche, made to order",
    items: [
      { name: "House Smash", note: "double patty, aged cheddar", price: "320" },
      { name: "Longganisa Melt", note: "sweet pork, tomato jam", price: "340" },
      { name: "Kiara Classic", note: "egg, bacon, smoked gouda", price: "360" },
    ],
  },
  {
    id: "para-sa-barkada",
    title: "Para sa Barkada",
    subtitle: "Long nights, meant to be shared",
    items: [
      { name: "Crispy Pata", note: "for the whole table", price: "980" },
      { name: "Sizzling Sisig", note: "the usual way, with egg", price: "420" },
      { name: "Lechon Kawali", note: "with lola's liver sauce", price: "520" },
      { name: "Beer Bucket 5+1", note: "with peanuts", price: "688" },
    ],
  },
  {
    id: "kape",
    title: "Kape",
    subtitle: "From the corner cafe",
    items: [
      { name: "Araku Specialty", note: "single origin, hand-brewed", price: "160" },
      { name: "Americano", price: "150" },
      { name: "Long Black", price: "160" },
      { name: "Cappuccino", note: "with a thick foam", price: "150" },
      { name: "Cold Brew", note: "twelve hour steep", price: "160" },
    ],
  },
  {
    id: "panghimagas",
    title: "Panghimagas",
    subtitle: "Sweet endings, always shared",
    items: [
      { name: "Leche Flan", note: "the way nanay made it", price: "180" },
      { name: "Halo-Halo Kiara", note: "house ube, langka, pinipig", price: "260" },
      { name: "Bibingka", note: "salted egg, kesong puti", price: "220" },
      { name: "Turon sa Gata", note: "warm, with coconut cream", price: "180" },
    ],
  },
];
