export interface PresetImage {
  id: string;
  name: string;
  url: string;
  thumbnail: string;
  speed: number;
}

export const presetImages: PresetImage[] = [
  {
    id: '1',
    name: 'Horse Galoping',
    url: '/images/pimg1.png',
    thumbnail: '/images/pimg1.png',
    speed: 200
  },
  {
    id: '2',
    name: 'Dancing Figure',
    url: '/images/pimg2.jpg',
    thumbnail: '/images/pimg2.jpg',
    speed: 260
  },
  {
    id: '3',
    name: 'Dragon Ball',
    url: '/images/pimg3.jpg',
    thumbnail: '/images/pimg3.jpg',
    speed: 260
  },
  {
    id: '4',
    name: 'Man playing baseball',
    url: '/images/pimg4.jpg',
    thumbnail: '/images/pimg4.jpg',
    speed: 220
  },
];
