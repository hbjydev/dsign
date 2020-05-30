import styled from 'styled-components';

/**
 * A styled Dsign-themed button.
 */
const Button = styled.button<{ primary?: boolean }>`
  min-width: 150px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${p => (p.primary ? '#3a6ebd' : '#fff')};
  color: ${p => (p.primary ? '#fff' : 'rgba(0, 0, 0, 0.8)')};
  font-weight: ${p => (p.primary ? 'bold' : '400')};
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  outline: none;
`;

export default Button;
