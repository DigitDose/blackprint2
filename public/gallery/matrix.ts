import { StaticImageData } from 'next/image';
import photo1 from "../images/1.jpg";
import photo2 from "../images/2.jpg";
import photo3 from "../images/3.jpg";
import photo4 from "../images/4.jpg";
import photo5 from "../images/5.jpg";
import photo6 from "../images/6.jpg";
import photo7 from "../images/7.jpg";
import photo8 from "../images/8.jpg";
import photo9 from "../images/9.jpg";
import photo10 from "../images/10.jpg";
import photo11 from "../images/11.jpg";
import photo12 from "../images/12.jpg";
import photo13 from "../images/13.jpg";
import photo14 from "../images/14.jpg";
import photo15 from "../images/15.jpg";
import photo16 from "../images/16.jpg";
import photo17 from "../images/17.jpg";
import photo18 from "../images/18.jpg";
import photo19 from "../images/detale.jpg";
import photo20 from "../images/detale2.jpg";
import photo21 from "../images/junior.jpg";
import photo22 from "../images/pink.jpeg";
import photo23 from "../images/mapa.jpg";
import photo24 from "../images/pracownia.jpg";
import photo25 from "../images/purpleuv.jpg";
import photo26 from "../images/spacebdsm.png";
import photo27 from "../images/red.jpg";
import photo28 from "../images/blackprint2_1.png";
import photo29 from "../images/blue.jpeg";
import photo30 from "../images/green.jpeg";

type TShirtProduct = {
  id: number;
  name: string;
  image: StaticImageData;
};

const tshirtProducts: TShirtProduct[] = [
  { id: 1, name: "T-Shirt 1", image: photo1 },
  { id: 2, name: "T-Shirt 2", image: photo2 },
  { id: 3, name: "T-Shirt 3", image: photo3 },
  { id: 4, name: "T-Shirt 4", image: photo4 },
  { id: 5, name: "T-Shirt 5", image: photo5 },
  { id: 6, name: "T-Shirt 6", image: photo6 },
  { id: 7, name: "T-Shirt 7", image: photo7 },
  { id: 8, name: "T-Shirt 8", image: photo8 },
  { id: 9, name: "T-Shirt 9", image: photo9 },
  { id: 10, name: "T-Shirt 10", image: photo10 },
  { id: 11, name: "T-Shirt 11", image: photo11 },
  { id: 12, name: "T-Shirt 12", image: photo12 },
  { id: 13, name: "T-Shirt 13", image: photo13 },
  { id: 14, name: "T-Shirt 14", image: photo14 },
  { id: 15, name: "T-Shirt 15", image: photo15 },
  { id: 16, name: "T-Shirt 16", image: photo16 },
  { id: 17, name: "T-Shirt 17", image: photo17 },
  { id: 18, name: "T-Shirt 18", image: photo18 },
  { id: 19, name: "T-Shirt Detail", image: photo19 },
  { id: 20, name: "T-Shirt Detail 2", image: photo20 },
  { id: 21, name: "Junior T-Shirt", image: photo21 },
  { id: 22, name: "Pink T-Shirt", image: photo22 },
  { id: 23, name: "Map T-Shirt", image: photo23 },
  { id: 24, name: "Workshop T-Shirt", image: photo24 },
  { id: 25, name: "Purple UV T-Shirt", image: photo25 },
  { id: 26, name: "Space BDSM T-Shirt", image: photo26 },
  { id: 27, name: "Red T-Shirt", image: photo27 },
  { id: 28, name: "Black Print T-Shirt", image: photo28 },
  { id: 29, name: "Blue T-Shirt", image: photo29 },
  { id: 30, name: "Green T-Shirt", image: photo30 },
];

export default tshirtProducts;
