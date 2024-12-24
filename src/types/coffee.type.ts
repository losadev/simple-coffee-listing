import { ReactNode } from "react";

export interface CoffeeProps {
    id:        number;
    name:      string;
    image:     string;
    price:     string;
    rating:    number | null | string;
    votes:     number;
    popular:   boolean;
    available: boolean;
}
 export interface CardProps {
  name: string
  image:     string;
  price:     string;
  rating:    number | null | string;
  votes:     number;
  popular?:   ReactNode;
  available: boolean
}

export interface LinkProps {
  name: string
  handleClick: ()=> void
}
