import styled from 'styled-components';

const StyledButton = styled.button`
  background: pink;
`;

export const Button = ({ like, action }) => {
  return (
    <StyledButton onClick={action}>
      <span>{like}</span>
    </StyledButton>
  );
};
