export interface SanityProducts {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  productcare: Array<string>;
  slug: {
    current: string;
  };
  image: Array<Image>;
  subcat: string;
}
