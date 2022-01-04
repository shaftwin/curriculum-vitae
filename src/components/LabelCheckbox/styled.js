import styled from '@emotion/styled';
import CheckboxIcon from '../../../assets/svg/checkboxIcon';

/*
 In this file, the hover properties of the components are all based on the hover
event of the main Container
*/

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${({ theme, state }) => theme.labelCheckbox.textColor[state]};
`;

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ labelPosition }) =>
    labelPosition === 'left' ? 'row' : 'row-reverse'};
  margin-bottom: 0.375rem;
`;

export const CustomCheckboxIcon = styled(CheckboxIcon)`
  fill: ${({ theme, state }) => theme.labelCheckbox.iconColor[state]};
`;

export const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
`;

export const StyledCheckbox = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme, state, checked }) =>
    checked
      ? theme.labelCheckbox.background.selected[state]
      : theme.labelCheckbox.background.unselected[state]};
  border-radius: 0.25rem;
  border: ${({ theme, state, checked }) =>
    checked ? '0' : theme.labelCheckbox.border.unselected[state]};
  cursor: ${({ theme, state }) => theme.global.cursor[state]};
`;

export const LabelContainer = styled.div`
  margin: ${({ theme, labelPosition }) =>
    theme.labelCheckbox.labelMargin[labelPosition]};
`;

export const CustomText = styled.label`
  color: ${({ theme, state }) => theme.labelCheckbox.textColor[state]};
  font-size: ${({ theme, size }) => theme.labelCheckbox.fontSize[size]};
`;

export const ErrorMessage = styled.label`
  color: ${({ theme }) => theme.labelCheckbox.errorMessage.color};
  font-size: ${({ theme }) => theme.labelCheckbox.errorMessage.fontSize};
  font-weight: ${({ theme }) => theme.labelCheckbox.errorMessage.fontWeight};
`;
