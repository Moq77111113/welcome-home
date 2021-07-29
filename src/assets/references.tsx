import { Reference } from "../types/types";
import { fixedLinks } from "../private/fixed.links";

const laSpiaggia: Reference = {
  kind: "pub",
  title: "La spiaggia",
  content: "La spiaggia est un restaurant de pates",
  subtitle: "Blablabla",
  image: {
    src: fixedLinks.pub,
    name: "spiaggia-img",
  },
  info: {
    address: "Corniche du Cros Six-Fours-les-Plages",
    socials: [{ kind: "facebook", link: "https://facebook.com" }],
  },
};

const leBlues: Reference = {
  kind: "restaurant",
  title: "La Blues Beach",
  content: "La Blues est un restaurant de viande",
  subtitle: "Blablabla",
  image: {
    src: fixedLinks.meatRestaurant,
    name: "blues-img",
  },
  info: {
    address: "330 Prom. Général Charles de Gaulle, 83140 Six-Fours-les-Plages",
    phone: "00 00 00 00 00",
    socials: [{ kind: "instagram", link: "https://instagram.com" }],
  },
};

const lesSablettes: Reference = {
  
    kind: "beach",
    title: "Beach",
    content: "Beach",
    subtitle: "Blablabla",
    image: {
      src: fixedLinks.beach,
      name: "beach-img",
    },
    info: {
      address: "Plage des Sablettes 83500 La Seyne-Sur-Mer",
    },
  };
export const mockReferences: Reference[] = [laSpiaggia, leBlues, lesSablettes];
