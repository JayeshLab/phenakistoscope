export interface PresetImage {
  id: string;
  name: string;
  url: string;
  thumbnail: string;
}

export const presetImages: PresetImage[] = [
  {
    id: '1',
    name: 'Dancing Figures',
    url: 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumbnail: 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: '2',
    name: 'Geometric Spiral',
    url: 'https://images.pexels.com/photos/1619654/pexels-photo-1619654.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumbnail: 'https://images.pexels.com/photos/1619654/pexels-photo-1619654.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: '3',
    name: 'Radial Pattern',
    url: 'https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumbnail: 'https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: '4',
    name: 'Abstract Circles',
    url: 'https://images.pexels.com/photos/1103969/pexels-photo-1103969.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumbnail: 'https://images.pexels.com/photos/1103969/pexels-photo-1103969.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];
