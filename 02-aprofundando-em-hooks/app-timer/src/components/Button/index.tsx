import { ButtonContainer, ButtonVariant } from './button.styled';

interface ButtonProps {
  variant?: ButtonVariant;
}

export function Button({variant = 'primary'}: ButtonProps) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>;
}
