import { AddButton } from './AddButton/AddButton';
import ArrowButton from './ArrowButton/ArrowButton';
import { PlainButton } from './PlainButton/PlainButton';

const Button = Object.assign(PlainButton, {
  Plain: PlainButton,
  Add: AddButton,
  Arrow: ArrowButton,
});

export default Button;
