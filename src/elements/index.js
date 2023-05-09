import styled from 'styled-components';
import useWindowDimensions from '../utils/WindowDimension';
import { MOB_RESOLUTION_POINT, TABLET_RESOLUTION_POINT } from '../constants';

export const Title = styled.h2`
  font-weight: 900;
  font-size: 3.45rem;
  line-height: 4.7rem;
  color: ${props => props.color};

  @media only screen and (min-width: 2560px) {
    font-size: 96px;
    line-height: 131px;
  }
`;

export const SmallTitle = styled.h3`
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.375rem;
  text-transform: capitalize;
  color: ${props => props.color};

  @media only screen and (min-width: 2560px) {
    font-size: 28px;
    line-height: 38px;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.56rem;
  color: ${props => props.color};
  margin: ${props => props.margin};
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Link = styled.a`
  color: #8a9095;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
`;

export const LinkButton = styled.button`
  //outline: 1px solid green;

  color: #fff;
  border: none;
  text-decoration: underline;
  background: none;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.375rem;
  text-transform: uppercase;
  cursor: pointer;
  margin-right: 3.125rem;

  @media only screen and (min-width: 2560px) {
    font-size: 1.75rem;
    line-height: 2.375rem;
  }

  @media only screen and (max-width: 724px) {
    font-size: 1.125rem;
    line-height: 1.5625rem;
  }
`;

export const Hidden = props => {
  const { width } = useWindowDimensions();

  if (props.xs) {
    return width < MOB_RESOLUTION_POINT ? null : props.children;
  }

  if (props.sm) {
    return width < TABLET_RESOLUTION_POINT ? null : props.children;
  }
};

export const Visible = props => {
  const { width } = useWindowDimensions();

  return props.xs && width < MOB_RESOLUTION_POINT ? props.children : null;
};

const StyledBox = styled.div`
  display: flex;
  border: ${props => props.border};
`;

export const Box = ({ border, children }) => {
  return <StyledBox border={border}>{children}</StyledBox>;
};

export const Form = styled.form`
  //outline: 1px solid #f00; // debug
  display: flex;
  flex-direction: column;
  align-items: center;
  & div > input {
    /* margin-bottom: 1.25rem; */
  }
  & > div {
    margin-bottom: 1.25rem;
    width: 100%;
  }
`;

export const InputField = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 0px 12px 22px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 12px;
  border: none;
  width: 100%;
  font-size: 20px;
  line-height: 27px;
  transition: 0.5s;
  outline: none;
  &::placeholder {
    color: #b4b4bc;
  }
  &:focus {
    outline: 2px solid #3ec779;
    border: none;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 3.75rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 1.6875rem;
  background: #707077;
  border: 1px solid #707077;
  border-radius: 0.75rem;
  color: #fff;
  font-style: normal;
  font-weight: 600;
  &.success {
    background-color: transparent;
    border: 1px solid #fff;
  }
`;

export const TextLabel = styled.p`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.color || '#4d4d4d'};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-family: 'Raleway', sans-serif;
  font-size: 0.8em;
  margin: 0.5em 0;
  position: relative;
`;
