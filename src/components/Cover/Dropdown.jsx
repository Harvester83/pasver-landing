import React, { useState, useRef } from 'react';
import { DropdownWrapper, DropdownInner, Span, DropdownList, DropdownListItem, ArrowSVG } from './Dropdown.Styled';
import { changeLanguage } from 'i18next';
import useOnClickOutside from '../../utils/useOnClickOutside';

export const Dropdown = props => {
  const { menu } = props;
  const [value, setValue] = useState('az');
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, () => setVisible(false));

  return (
    <DropdownWrapper ref={ref} visible={visible} onClick={() => setVisible(!visible)}>
      <DropdownInner visible={visible}>
        <Span>{value}</Span>

        <ArrowSVG visible={visible} focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
        </ArrowSVG>
      </DropdownInner>

      <DropdownList visible={visible}>
        {menu
          .filter(item => item !== value)
          .map((item, index) => (
            <DropdownListItem
              key={index}
              onClick={() => {
                setValue(item);
                changeLanguage(item);
              }}
            >
              {item}
            </DropdownListItem>
          ))}
      </DropdownList>
    </DropdownWrapper>
  );
};
