import { StyledButton } from './styled';

export const Button = ({ like, action }) => {
  return (
    <StyledButton onClick={action}>
      <span>{like}</span>
    </StyledButton>
  );
};
