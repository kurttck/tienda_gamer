//import ffx from '../img/ffx.png'

export interface Producto {
    key: number;
    id: number;
    title: string;
    price: number;
    console: string[];
    format: string[];
    img: string;
    unit: number;
  }

  export interface ProductCar{
    id:number;
    title:string;
    pricetotal:number;
    console:string;
    format: string;
    unit: number;
  }

  export interface CheckoutProps{
    product: Producto;
  }
  
  export const productos: Producto[] = [
    {
      key: 1,
      id: 1,
      title: "Super Mario World",
      price: 70,
      console:["SNES","Nintendo Switch", "GBA", "Wii", "Wii-U","3DS"],
      format:["Fisico","Digital"],
      img: "https://media.revistagq.com/photos/5ca5fe9e33e7511515153dbb/4:3/w_776,h_582,c_limit/super_mario_world_caja_super_nes_4310.jpg",
      unit: 0
    },
    {
      key: 2,
      id: 2,
      title: "Zelda: a link to the past",
      price: 150,
      console:["SNES","Nintendo Switch", "GBA", "Wii", "Wii-U","3DS"],
      format:["Fisico","Digital"],
      img: "https://uvejuegos.com/img/caratulas/829/The-Legend-of-Zelda-A-Link-to-the-Past-SNES-EU.jpg",
      unit: 0
    },
    {
      key: 3,
      id: 3,
      title: "Contra III: The Alien Wars",
      price: 58,
      console:["SNES", "GBA", "Wii", "Wii-U","3DS"],
      format:["Fisico"],
      img: "https://i.pinimg.com/736x/fa/45/e5/fa45e53efd3acc02f298c2e0775a13a1.jpg",
      unit: 0
    },
    {
      key: 4,
      id: 4,
      title: "Resident Evil 2",
      price: 148,
      console:["PS1","N64","GC","PC"],
      format:["Fisico"],
      img: "https://i.ibb.co/bdcTWM8/Screenshot-1.png",
      unit: 0
    },
    {
      key: 5,
      id: 5,
      title: "Final Fantasy X",
      price: 103,
      console:["PS2","PS-Vita"],
      format:["Fisico","Digital"],
      img: "/ffxs.png",
      /* img: ffx, */
      unit: 0
    },
    {
      key: 6,
      id: 6,
      title: "God of War 3",
      price: 79,
      console:["PS3","PS4"],
      format:["Fisico","Digital"],
      img: "https://image.api.playstation.com/vulcan/img/rnd/202010/2917/lVPrvW9AyMplvmdXsJmcHoLz.png",
      unit: 0
    },
    {
      key: 7,
      id: 7,
      title: "Elden Ring",
      price: 190,
      console:["PS4","PS5","Xbox X|S","PC"],
      format:["Digital"],
      img: "https://periodismo.ull.es/wp-content/uploads/2022/04/Se-rumorea-que-Elden-Ring-realizara-proximamente-una-nueva-prueba.jpg",
      unit: 0
    },
  ];
  