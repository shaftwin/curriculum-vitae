import styled from '@emotion/styled';

// Generate a styled component with all the color rules for the fields
export const InputStyle = styled.div`
  border-radius: 0.25rem;
  border: ${({ theme, state }) =>
    `0.063rem solid ${theme.labelInput.border[state]}`};
  background-color: ${({ theme, state }) => theme.labelInput.background[state]};
  color: ${({ theme, state }) => theme.labelInput.color[state]};

  cursor: ${({ theme, state }) =>
    state === 'disabled' ? theme.global.cursor.disabled : 'inherit'};

  &:hover:not([disabled]) {
    border: ${({ theme }) => theme.labelInput.border.hover};
    box-shadow: ${({ theme }) =>
      `0rem 0rem 0.313rem ${theme.global.colors.shadow.grey}`};
    color: ${({ theme }) => theme.labelInput.color.hover};
  }

  &:focus-within {
    border: ${({ theme }) =>
      `0.063rem solid ${theme.labelInput.border.focused}`};
    box-shadow: ${({ theme }) =>
      `0rem 0rem 0.875rem ${theme.global.colors.shadow.grey}`};
    color: ${({ theme }) => theme.labelInput.color.focused};
  }
`;
