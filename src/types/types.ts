export type CardProps = {
  id: number;
  bg: string;
  title: string;
  paragraph: string;
  onClick?: () => void;
  innerBg: string;
  innerText: string;
  subtitle: string;
  description: string;
  menu?: MenuItem[];
  syrups?: MenuItem[];
  img: { id: number; src: string; alt: string }[];
};

export type InnerCardProps = {
  openId: number | null;
  setOpenId: (id: number | null) => void;
  cards: CardProps[];
};

export type MenuItem = {
  id: number;
  title: string;
  price: string;
};
