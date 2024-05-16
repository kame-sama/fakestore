interface Item {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

interface BagItem extends Item {
  quantity: number;
}

interface BagItems {
  [key: number]: BagItem;
}

interface RootContext {
  categories: string[];
  bagItems: BagItems;
  setBagItems: React.Dispatch<React.SetStateAction<BagItems>>;
}
