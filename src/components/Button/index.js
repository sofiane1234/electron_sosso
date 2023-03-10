import { Nav } from "../container";

export const Button = ({ title, onClick }) => {
  return <Nav onClick={onClick}>{title}</Nav>;
};
