import styled from "styled-components";

export const DropdownWrapper = styled.div`
  position: relative;
  border: 1px solid #fff;
  border-radius: ${(props) => props.visible ? "1.875rem 1.875rem 0 0" : "1.875rem"};
  min-width: 6.875rem;
  background-color: ${(props) => props.visible ? "#fff" : "none"};
`;

export const DropdownInner = styled.div`
  //outline: 1px solid blue;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 1.375rem;
  color: ${(props) =>  props.visible ? "#070819" : "#fff"};
  text-transform: uppercase;
  cursor: pointer;
`;

export const DropdownList = styled.ul`
  border: 1px solid #fff;
  border-radius: 0 0 1.875rem 1.875rem;

  position: absolute;
  z-index: 1000;
  left: -1px;
  top: 3.375rem;
  padding: 0.3125rem 0 0 0;
  margin: 0;
  background-color: #fff;
  color: #000;
  width: 100%;
  transform: translateY(-1em);
  transition: transform ease 0.2s;
  visibility: ${(props) => props.visible ? "visible" : "hidden"};
  height: ${(props) =>  props.visible ? "12rem" : 0};
  overflow-y: auto;
`;

export const DropdownListItem = styled.li`
  margin-bottom: 0.3125rem;
  padding-left: 1.25rem;
  text-transform: uppercase;
  list-style: none;
  cursor: pointer;

  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 1.375rem;
  line-height: 1.875rem;
  color: #9e9ea9;
`;

export const Span = styled.span`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 1.375rem;
  line-height: 1.875rem;
`;

export const ArrowSVG = styled.svg`
    width: 1.875rem;
    height: 1.875rem;
    fill: ${(props) => props.visible ? "#070819" : "#fff"}; 
    transform: ${(props) => props.visible ? "rotate(0deg)" : "rotate(180deg)"};
`;

