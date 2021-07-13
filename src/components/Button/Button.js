import { StyledButton } from './styled';

export const Button = ({ children, action }) => {
  return (
    <StyledButton onClick={action}>
      <span>{children}</span>
    </StyledButton>
  );
};
