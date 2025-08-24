export type CardProps = {
  bg: string;
  title: string;
  paragraph: string;
  onClick: () => void;
  innerBg: string;
  innerText: string;
  subtitle: string;
  description: string;
  menu?: MenuItem[];
  syrups?: MenuItem[];
};

export type MenuItem = {
  id: number;
  title: string;
  price: string;
};
