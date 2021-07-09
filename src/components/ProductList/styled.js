import styled, { css } from 'styled-components';

const color = 'palevioletred';

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${color};
  color: ${color};
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;

  &:hover {
    border: 2px solid teal;
  }

  ${(props) =>
    css`
      letter-spacing: ${props.letterSpacing};
    `}

  ${(props) =>
    props.primary &&
    css`
      background: ${color};
      color: white;
    `}
`;
