import styled from '@emotion/styled';

export const StyledButton = styled.button`
  display: flex;
  flex-direction: ${({ iconPosition }) =>
    iconPosition === 'left' ? 'row' : 'row-reverse'};
  align-items: center;
  justify-content: space-around;
  min-width: ${({ icon }) => (icon ? '7.5rem' : '5.75rem')};
  height: 2rem;
  border-radius: 0.438rem;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.global.fontWeight.bold};
  font-size: ${({ theme, size }) => theme.button.fontSize[size]};
  background-color: ${({ theme, templateColor, buttonType }) =>
    theme.button.background[templateColor].default[buttonType]};
  border: ${({ theme, templateColor, buttonType }) =>
    buttonType === 'stroke'
      ? `solid 2px ${theme.button.borderColor[templateColor].default}`
      : 0};
  color: ${({ theme, templateColor }) =>
    theme.button.textColor[templateColor].default};

  &:hover {
    background-color: ${({ theme, templateColor, buttonType }) =>
      theme.button.background[templateColor].hover[buttonType]};
    border: ${({ theme, templateColor, buttonType }) =>
      buttonType === 'stroke'
        ? `solid 2px ${theme.button.borderColor[templateColor].hover}`
        : 0};
    color: ${({ theme, templateColor }) =>
      theme.button.textColor[templateColor].hover};
  }

  &:disabled {
    cursor: default;
    background-color: ${({ theme, templateColor, buttonType }) =>
      theme.button.background[templateColor].disabled[buttonType]};
    border: ${({ theme, templateColor, buttonType }) =>
      buttonType === 'stroke'
        ? `solid 2px ${theme.button.borderColor[templateColor].disabled}`
        : 0};
    color: ${({ theme, templateColor }) =>
      theme.button.textColor[templateColor].disabled};
  }
`;

export const IconContainer = styled.div`
  margin-top: 4px;
`;
