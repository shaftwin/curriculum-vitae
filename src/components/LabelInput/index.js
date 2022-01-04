import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Error from '../../../assets/svg/error';
import {
  Container,
  CustomText,
  InputWrapper,
  CustomInput,
  CustomTextArea,
  ErrorMessage,
  IconContainer,
} from './styled';

// Built-in props are only spread inside the input
const LabelInput = ({
  label,
  inputValue,
  errorMessage,
  inputState,
  type,
  size,
  textArea,
  register,
  className,
  ...props
}) => {
  const [value, setValue] = useState(inputValue);
  const [state, setState] = useState(inputState);
  const handleChange = useCallback((event) => setValue(event.target.value), []);
  const InputComponent = textArea ? CustomTextArea : CustomInput;

  const updateState = useCallback(() => {
    switch (state) {
      case 'default':
        if (value) {
          setState('filled');
        }
        break;
      case 'filled':
        if (!value) {
          setState('default');
        }
        break;
      default:
        break;
    }
  }, [state, value]);

  useEffect(() => {
    updateState();
  }, [updateState]);

  return (
    <Container data-testid="LabelInput" size={size} className={className}>
      {!!label && (
        <CustomText data-testid="label" state={state}>
          {label}
        </CustomText>
      )}
      <InputWrapper
        data-testid="inputWrapper"
        textArea={textArea}
        disabled={state === 'disabled'}
        size={size}
        state={state}
      >
        <InputComponent
          data-testid="input"
          value={value}
          onChange={handleChange}
          type={type}
          ref={register}
          disabled={state === 'disabled'}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
        />

        {state === 'error' && (
          <IconContainer
            data-testid="errorIcon"
            size={size}
            textArea={textArea}
          >
            <Error />
          </IconContainer>
        )}
      </InputWrapper>
      {state === 'error' && !!errorMessage && (
        <ErrorMessage data-testid="errorMessage" state={state}>
          {errorMessage}
        </ErrorMessage>
      )}
    </Container>
  );
};

LabelInput.propTypes = {
  /**
   * Optional label
   */
  label: PropTypes.string,
  /**
   * Optional inputValue
   */
  inputValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Optional errorMessage
   */
  errorMessage: PropTypes.string,
  /**
   * Optional state
   * hover and focused will be managed directly in the style file
   */
  inputState: PropTypes.oneOf(['default', 'disabled', 'error']),
  /**
   * Optional type
   */
  type: PropTypes.oneOf(['text', 'number']),
  /**
   * Optional size
   */
  size: PropTypes.oneOf(['medium', 'large']),
  /**
   * Optional textArea
   */
  textArea: PropTypes.bool,
  /**
   * Optional register in order to use react hook form
   */
  register: PropTypes.shape({}),
  /**
   * Optional custom style
   */
  className: PropTypes.string,
};

LabelInput.defaultProps = {
  label: null,
  inputValue: '',
  errorMessage: null,
  inputState: 'default',
  type: 'text',
  size: 'medium',
  textArea: false,
};

export default LabelInput;
