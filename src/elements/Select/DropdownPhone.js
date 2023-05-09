import React, { useEffect, useRef, useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Input from 'react-phone-number-input/input';
import { getCountries, getCountryCallingCode } from 'react-phone-number-input/input';
import en from 'react-phone-number-input/locale/en';
import countryNames from 'react-phone-number-input/locale/en';
import 'react-phone-number-input/style.css';
import './Dropdown.css';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import { ReactComponent as ArrowsIcon } from '../../assets/arrows-icon.svg';
import useOnClickOutside from '../../utils/useOnClickOutside';
import styled from 'styled-components';

const StyledDropdownPhone = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const DropdownPhoneCode = styled.div`
  margin-right: 0.9375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 3.125rem;
  span {
    font-style: normal;
    font-weight: 600;
    font-size: 0.9375rem;
    line-height: 1.25rem;
    color: #a0a1ab;
  }
`;

const DropdownPhoneInputWrapper = styled.div`
    width: 80%;
  > input {
    padding: 0.625rem;
    box-sizing: border-box;
    width: 100%;
    font-style: normal;
    font-size: 1.25rem;
    line-height: 1.6875rem;
    color: #04040d;
    border-radius: 0.75rem;
    outline: none;
    border: 0.1875rem solid #fff;
    &::placeholder {
      color: #b4b4bc;
    }
    &:focus {
      border: 0.1875rem solid #3ec779;
      outline: none;
    }
  }
`;

const DropdownPhoneList = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: absolute;
  top: 4.0625rem;
  left: 0;
  width: 100%;
  padding: 0.625rem 0;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 0.75rem;
  section {
    overflow-y: auto;
    max-height: 14.125rem;
    & > div {
      display: flex;
      justify-content: start;
      align-items: center;
      padding: 0.3125rem 0.125rem 0.3125rem 1.5625rem;
      &:hover {
        background-color: #f3f3f3;
      }
      span.code {
        font-style: normal;
        font-weight: 600;
        font-size: 0.875rem;
        margin-right: 1.875rem;
        color: #8d8d98;
        min-width: 1.875rem;
      }
      span.country {
        font-style: normal;
        font-weight: 600;
        font-size: 1.25rem;
        color: #04040d;
      }
    }
  }
`;

const InputSearchBlock = styled.div`
  position: relative;
  border-radius: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  padding: 0 0.9375rem;

  input {
    font-size: 1rem;
    color: #000;
    border: none;
    width: 100%;
    padding-left: 2.1875rem;
    box-sizing: border-box;
    border: 0.1875rem solid #000;
    border-radius: 2rem;
    height: 2rem;
    &:focus {
      border: 0.1875rem solid #3ec779;
      outline: none;
    }
  }

  svg {
    position: absolute;
    top: 50%;
    left: 1.875rem;
    transform: translateY(-50%);
  }
`;

const DropdownPhone = ({ placeHolder, values, setValues }) => {
  const [code, setCode] = useState('AZ');
  const [filter, setFilter] = useState('');
  const [show, setShow] = useState(false);
  const [countries, setCountries] = useState();
  const ref = useRef();

  useEffect(() => {
    const countries = getCountries().map(item => ({ code: item, country: countryNames[item] }));
    setCountries(countries);
  }, []);

  useOnClickOutside(ref, () => setShow(false));

  return (
    <StyledDropdownPhone>
      <DropdownPhoneCode onClick={() => setShow(!show)}>
        <span>+{getCountryCallingCode(code)}</span>
        <ArrowsIcon />
      </DropdownPhoneCode>

      <DropdownPhoneInputWrapper>
        <Input
          country={code}
          placeholder={placeHolder}
          onFocus={() => setShow(false)}
          onChange={value => setValues({ ...values, phone: value })}
        />
        <DropdownPhoneList show={show} ref={ref}>
          <InputSearchBlock>
            <SearchIcon />
            <input onChange={event => setFilter(event.target.value)} />
          </InputSearchBlock>

          <section>
            {countries &&
              countries
                .filter(item => item.country.toUpperCase().includes(filter.toUpperCase()))
                .map((item, index) => (
                  <div key={index} onClick={() => setCode(item.code)}>
                    <span className="code">+{getCountryCallingCode(item.code)}</span>
                    <span className="country">{item.country}</span>
                  </div>
                ))}
          </section>
        </DropdownPhoneList>
      </DropdownPhoneInputWrapper>
    </StyledDropdownPhone>
  );
};

export default DropdownPhone;
