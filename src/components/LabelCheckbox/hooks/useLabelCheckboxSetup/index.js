import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { CustomText, LabelContainer } from '../../styled';

const useLabelCheckboxSetup = ({
  disabled,
  error,
  value,
  label,
  labelPosition,
  size,
}) => {
  const [state, setState] = useState();
  const [checked, setChecked] = useState(value);
  const [hover, setHover] = useState(false);

  const updateState = useCallback(() => {
    switch (disabled) {
      case true:
        setState('disabled');
        break;
      default:
        switch (error) {
          case true:
            setState('error');
            break;
          default:
            switch (hover) {
              case true:
                setState('hover');
                break;
              default:
                setState('default');
                break;
            }
        }
        break;
    }
  }, [disabled, error, hover]);

  const labelPart = useMemo(() => {
    const generatedPart = React.isValidElement(label) ? (
      label
    ) : (
      <CustomText size={size} state={state}>
        {label}
      </CustomText>
    );

    return (
      !!label && (
        <LabelContainer
          data-testid="labelContainer"
          labelPosition={labelPosition}
        >
          {generatedPart}
        </LabelContainer>
      )
    );
  }, [label, labelPosition, size, state]);

  const handleChange = useCallback((event) => {
    setChecked(event.target.checked);
  }, []);

  useEffect(() => updateState(), [updateState]);

  return {
    state,
    checked,
    labelPart,
    setHover,
    handleChange,
  };
};

export default useLabelCheckboxSetup;
