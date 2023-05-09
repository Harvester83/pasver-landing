import React, { useState, useEffect, useRef } from 'react';
import { SelectContainer, SelectInput, SelectLabelButton, DropdownStyle, DropdownItem } from './Select.Styled';

const Select = ({ label, values, onChange }) => {
  const [currentValue, setCurrentValue] = useState('');
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleValueChange = value => {
    setCurrentValue(value);
  };
  const handleChange = value => {
    handleValueChange(value);
    // call method, if it exists
    if (onChange) onChange(value);
    // close, after all tasks are finished
    handleClose();
  };

  return (
    <SelectContainer>
      {/* <SelectLabelButton onClick={handleOpen}>{currentValue !== '' ? currentValue : label}</SelectLabelButton> */}
      <SelectInput
        onChange={() => handleChange}
        value={currentValue !== '' ? currentValue : label}
        placeholder={'Search'}
        onClick={handleOpen}
      />
       
      <DropdownStyle isVisible={open}>
        {values.map((value, index) => (
          <DropdownItem onClick={() => handleChange(value)} active={value === currentValue} key={index}>
            {value}
          </DropdownItem>
        ))}
      </DropdownStyle>
    </SelectContainer>
  );
};

export default Select;
