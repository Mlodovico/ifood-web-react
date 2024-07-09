export interface foodInterface {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  options: [id: number, title: string, price: number];
}
