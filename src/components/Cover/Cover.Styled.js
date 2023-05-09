import styled, { css } from 'styled-components';

export const CoverWrapper = styled.div`
  position: relative;
  width: 100%;
  background-image: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #070819;
`;

export const CoverBackground = styled.div`
  width: 100%;
  background: rgb(7, 8, 25);
  background: linear-gradient(166deg, rgba(7, 8, 25, 0.6615896358543417) 0%, rgba(7, 8, 25, 1) 56%);
`;

export const LogoLink = styled.a`
  ${props => {
    switch (props.position) {
      case 'absolute':
        return css`
          position: absolute;
          z-index: 1000;
          top: 1%;
          left: 2rem;
        `;
      default:
        return css`
          position: relative;
        `;
    }
  }}
`;

export const Logo = styled.img`
  width: 4.875rem;
  height: 4.875rem;

  @media (max-width: 360px) {
    width: 3.33rem;
    height: 3.33rem;
  }

  @media (min-width: 2560px) {
    width: 140px;
    height: 140px;
  }
`;

export const CoverTextContainer = styled.div`
  margin-left: 120px;
  @media (max-width: 1110px) {
    margin-left: 60px;
  }
  @media (max-width: 856px) {
    margin-left: 0px;
  }
`;

export const CoverContent = styled.div`
  display: flex;
  width: calc(100vw);
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;
  @media (max-width: 856px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const StoreImg = styled.img`
  width: 120px;
  height: 54px;
  @media (max-width: 705px) {
    width: 134px;
    height: 60px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;

export const MenuBar = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CarouselWrapper = styled.div`
  position: relative;
  padding: 5rem 0 5rem 0;
  @media (max-width: 767px) {
    padding: 5rem 0 0 0;
  }
`;

export const CarouselContainer = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 53%;
  &::before {
    content: '';
    width: 3.4375rem;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    margin-left: -1px;
    background: linear-gradient(90deg, #0e0f1f 0%, rgba(7, 8, 25, 0) 50%);
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  border-top-left-radius: 1.875rem;
  border-bottom-left-radius: 1.875rem;
  width: 100%;
  position: relative;
`;
