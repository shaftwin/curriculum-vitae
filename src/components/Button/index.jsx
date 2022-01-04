import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, IconContainer } from './styled';

const Button = ({
  label,
  size,
  onClick,
  disabled,
  icon,
  iconPosition,
  className,
  templateColor,
  buttonType,
  ...props
}) => {
  return (
    <StyledButton
      className={className}
      disabled={disabled}
      size={size}
      onClick={onClick}
      icon={icon}
      iconPosition={iconPosition}
      templateColor={templateColor}
      buttonType={buttonType}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {!!icon && (
        <IconContainer data-testid="iconContainer">{icon}</IconContainer>
      )}
      {label}
    </StyledButton>
  );
};

Button.propTypes = {
  /**
   * Button label
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional button size
   */
  size: PropTypes.oneOf(['extraSmall', 'small', 'medium']),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Optional disabled
   */
  disabled: PropTypes.bool,
  /**
   * Optional icon
   */
  icon: PropTypes.element,
  /**
   * Optional iconPosition
   */
  iconPosition: PropTypes.oneOf(['left', 'right']),
  /**
   * Optional custom style
   */
  className: PropTypes.string,
  /**
   * Optional template color
   */
  templateColor: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'white']),
  /**
   * Optional buttonType
   */
  buttonType: PropTypes.oneOf(['fill', 'stroke', 'text']),
};

Button.defaultProps = {
  onClick: () => null,
  disabled: false,
  icon: null,
  iconPosition: 'left',
  size: 'medium',
  templateColor: 'primary',
  buttonType: 'fill',
};

export default Button;
