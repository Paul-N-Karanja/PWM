import logo from "./pwm-systems-logo.png";
import notification from "./notification-icon.png";
import search from "./search-icon.png";
import bids from "./bid-icon.png";

import vintageCabinet from "./vintage-cabinet.png";
import woodTable from "./wood-table.png";
import gasCooker from "./gas-cooker.png";
import diamondRing from "./diamond-ring.png";
import laptop from "./laptop.png";
import outdoorFurniture from "./outdoor-furniture.png";
import couch from "./couch.png";
import bed from "./bed-frame.png";
import shelf from "./shelf.png";
import capsuleCoffeeMaker from "./capsule-coffee-maker.png";
import mochaPot from "./mocha-pot.png";
import plateSet from "./plate-set.png";
import tileSet from "./tile-set.png";
import samsungS25Ultra from "./s25-ultra.png";
import lenovoP520Workstation from "./lenovo-thinkstation-p520.png";
import paystackLogo from "./paystack-icon.png";
import mpesaLogo from "./mpesa-logo.png";

export const assets = {
  logo,
  notification,
  search,
  bids,
  vintageCabinet,
  woodTable,
  gasCooker,
  diamondRing,
  laptop,
  outdoorFurniture,
  couch,
  bed,
  shelf,
  capsuleCoffeeMaker,
  mochaPot,
  plateSet,
  tileSet,
  samsungS25Ultra,
  lenovoP520Workstation,
  paystackLogo,
  mpesaLogo,
};

const dayToday = new Date();
let dayTodayDay = dayToday.getDate();
let dayTodayMonth = dayToday.getMonth() + 1;
let dayTodayYear = dayToday.getFullYear();
const dateValue = `${dayTodayDay}/${dayTodayMonth}/${dayTodayYear}`;

export const stocks = [
  {
    id: "01",
    name: "Wood Table",
    openingBid: "15,700",
    currentBid: "20,000",
    image: [woodTable],
    category: "Home, Kitchen and garden",
    subCategory: "Furniture",
    details: "This is an item to be auctioned",
    datePosted: dateValue,
    highestBid: true,
  },

  {
    id: "02",
    name: "Gas Cooker",
    openingBid: "80,000",
      currentBid: "95,500",
    image: [gasCooker],
    category: "Home, Kitchen and garden",
    subCategory: "Appliances",
    details: "This is an item to be auctioned",
    datePosted: dateValue,
    highestBid: true,
  },

  {
    id: "03",
    name: "Diamond Ring",
    openingBid: "130,000",
    currentBid: "132,000",
    image: [diamondRing],
    category: "Jewelry & Watches",
    subCategory: "Rings",
    details: "This is an item to be auctioned",
    datePosted: dateValue,
    highestBid: true,
  },

  {
    id: "04",
    name: "Macbook",
    openingBid: "200,000",
    currentBid: "210,000",
    image: [laptop],
    category: "Electronics",
    subCategory: "Laptops and Desktops",
    details: "This is an item to be auctioned",
    datePosted: dateValue,
    highestBid: true,
  },

  {
    id: "05",
    name: "Outdoor Table and Chairs Set",
    openingBid: "120,000",
    currentBid: "120,000",
    image: [outdoorFurniture],
    category: "Home, Kitchen and garden",
    subCategory: "Furniture set",
    details: "This is an item to be auctioned",
    datePosted: dateValue,
    highestBid: true,
  },

  {
    id: "06",
    name: "Long 2 Seater Couch",
    openingBid: "25,000",
    currentBid: "25,500",
    image: [couch],
    category: "Home, Kitchen and garden",
    subCategory: "Furniture",
    details: "This is an item to be auctioned",
    datePosted: dateValue,
    highestBid: true,
  },

  {
    id: "07",
    name: "Bed",
    openingBid: "54,000",
    currentBid: "54,000",
    image: [bed],
    category: "Home, Kitchen and garden",
    subCategory: "Furniture",
    details: "This is an item to be auctioned",
    datePosted: dateValue,
    highestBid: true,
  },

  {
    id: "08",
    name: "Shelf",
    openingBid: "22,000",
    currentBid: "32,000",
    image: [shelf],
    category: "Home, Kitchen and garden",
    subCategory: "Furniture",
    details: "This is an item to be auctioned",
    datePosted: dateValue,
    highestBid: true,
  },

  {
    id: "09",
    name: "Capsule Coffee Maker",
    openingBid: "5,900",
    currentBid: "6,100",
    image: [capsuleCoffeeMaker],
    category: "Home, Kitchen and garden",
    subCategory: "Appliances",
    details: "This is an item to be auctioned",
    datePosted: dateValue,
    highestBid: true,
  },

  {
    id: "010",
    name: "Mocha Pot 600ML",
    openingBid: "2,800",
    currentBid: "3,050",
    image: [mochaPot],
    category: "Home, Kitchen and garden",
    subCategory: "Appliances",
    details: "This is an item to be auctioned",
    datePosted: dateValue,
    highestBid: true,
  },

  {
    id: "011",
    name: "Grey Plate Set",
    openingBid: "6,500",
    currentBid: "7,000",
    image: [plateSet],
    category: "Home, Kitchen and garden",
    subCategory: "Cutlery",
    details: "This is an item to be auctioned",
    datePosted: dateValue,
    highestBid: true,
  },

  {
    id: "012",
    name: "Tile Set",
    openingBid: "15,000",
    currentBid: "15,000",
    image: [tileSet],
    category: "Home, Kitchen and garden",
    subCategory: "Appliances",
    details: "This is an item to be auctioned",
    datePosted: dateValue,
    highestBid: true,
  },

  {
    id: "013",
    name: "Samsung S25 Ultra",
    openingBid: "135,000",
    currentBid: "137,150",
    image: [samsungS25Ultra],
    category: "Electronics",
    subCategory: "Appliances",
    details: "This is an item to be auctioned",
    datePosted: dateValue,
    highestBid: true,
  },

  {
    id: "014",
    name: "Lenovo P520 Workstation",
    openingBid: "58,000",
    currentBid: "60,000",
    image: [lenovoP520Workstation],
    category: "Electronics",
    subCategory: "Laptops and Desktops",
    details: "This is an item to be auctioned",
    datePosted: dateValue,
    highestBid: true,
  },
];
