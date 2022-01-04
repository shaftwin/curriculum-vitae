/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import useLabelCheckboxSetup from './hooks/useLabelCheckboxSetup';
import {
  Container,
  CheckboxContainer,
  StyledCheckbox,
  HiddenCheckbox,
  CustomCheckboxIcon,
  ErrorMessage,
} from './styled';

const LabelCheckbox = ({
  label,
  labelPosition,
  value,
  error,
  size,
  disabled,
  className,
  errorMessage,
  ...props
}) => {
  const { state, checked, labelPart, setHover, handleChange } =
    useLabelCheckboxSetup({
      disabled,
      error,
      value,
      label,
      labelPosition,
      size,
    });

  return (
    <Container
      state={state}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      data-testid="LabelCheckboxContainer"
      className={className}
    >
      <CheckboxContainer
        data-testid="checkboxContainer"
        size={size}
        labelPosition={labelPosition}
      >
        {labelPart}
        <HiddenCheckbox
          data-testid="hiddenCheckbox"
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          {...props}
        />
        <StyledCheckbox
          data-testid="styledCheckbox"
          state={state}
          checked={checked}
        >
          {checked && <CustomCheckboxIcon state={state} />}
        </StyledCheckbox>
      </CheckboxContainer>
      {state === 'error' && !!errorMessage && (
        <ErrorMessage data-testid="errorMessage">{errorMessage}</ErrorMessage>
      )}
    </Container>
  );
};

LabelCheckbox.propTypes = {
  /**
   * Optional label
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * Optional labelPosition
   */
  labelPosition: PropTypes.oneOf(['left', 'right']),
  /**
   * Optional value
   */
  value: PropTypes.bool,
  /**
   * Optional errorMessage
   */
  error: PropTypes.bool,
  /**
   * Optional error
   */
  errorMessage: PropTypes.string,
  /**
   * Optional disabled
   */
  disabled: PropTypes.bool,
  /**
   * Optional size
   */
  size: PropTypes.oneOf(['small', 'normal']),
  /**
   * Optional custom style
   */
  className: PropTypes.string,
};

LabelCheckbox.defaultProps = {
  label: null,
  labelPosition: 'left',
  value: false,
  error: false,
  errorMessage: null,
  disabled: false,
  size: 'normal',
};

export default LabelCheckbox;
