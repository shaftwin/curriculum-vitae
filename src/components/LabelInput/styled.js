import styled from '@emotion/styled';
import { InputStyle } from '../../../utils/sharedStyle/InputStyle';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.global.fontSize[13]};
  width: ${({ theme, size }) => theme.labelInput.width[size]};
`;

export const InputWrapper = styled(InputStyle)`
  display: flex;
  align-items: ${({ textArea }) => (textArea ? 'baseline' : 'center')};
  padding: ${({ textArea }) => (textArea ? '0.5rem 0.75rem' : '0rem 0.75rem')};
`;

export const CustomInput = styled.input`
  outline: none;
  border: 0;
  background-color: inherit;
  color: inherit;
  width: 100%;
  font-size: ${({ theme }) => theme.global.fontSize[13]};
  min-height: 2rem;
  cursor: inherit;
`;

export const CustomTextArea = styled.textarea`
  outline: none;
  border: 0;
  background-color: inherit;
  color: inherit;
  font-size: ${({ theme }) => theme.global.fontSize[13]};
  cursor: inherit;
  min-height: 4.5rem;
  flex: 1;
`;

export const CustomText = styled.label`
  margin-bottom: 0.25rem;
  font-weight: ${({ theme }) => theme.global.fontWeight.semiBold};
  color: ${({ theme, state }) =>
    state === 'error'
      ? theme.global.colors.status.error
      : theme.global.colors.darkBlue};
`;

export const ErrorMessage = styled(CustomText)`
  margin: 0.25rem 0rem 0rem 0rem;
  font-size: ${({ theme }) => theme.global.fontSize[10]};
`;

export const IconContainer = styled.div`
  position: ${({ textArea }) => (textArea ? 'absolute' : 'relative')};
  left: ${({ theme, size, textArea }) =>
    textArea ? theme.labelInput.iconLeft[size] : 'unset'};
`;
