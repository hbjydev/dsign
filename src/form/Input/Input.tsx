import styled from 'styled-components';

/**
- A styled input element.
- The same as a vanilla HTML input element.
 */
const Input = styled.input`
  padding: 0.75em;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 0.25em;
  font-size: 0.8125em;
  background: #fafafa;
  transition: border 0.3s ease;
  outline: none;

  &:focus {
    border: 2px solid #3a6ebd;
  }
`;

export default Input;
