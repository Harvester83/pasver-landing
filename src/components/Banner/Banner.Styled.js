import styled from 'styled-components';

export const BannerWrapper = styled.div`
  background-image: url(${props => props.img});
  background-repeat: repeat;
  background-color: #e5e6eb;
  border-radius: 3.75rem;
`;

export const BannerInfo = styled.div`
  margin-left: 6.25rem;
  max-width: 75%;

  @media only screen and (max-width: 767px) {
    max-width: 100%;
    margin-left: 0;
    text-align: center;
  }
`;

export const BannerDevizes = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const BannerDevizesWords = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  & > p {
    font-size: 1.375rem;
    line-height: 3rem;
    text-transform: uppercase;
    color: white;
  }

  & > img {
    margin: 0 0.6rem;
  }
`;

export const BannerCircleImg = styled.img`
  outline: 1px solid #fff;
  position: absolute;
  top: 0;
  right: 0;
`;

export const CircleFigure = styled.div`
  position: absolute;
  top: -6.25rem;
  right: 0;
  border: 20px solid #161727;
  opacity: 0.5;
  border-radius: 100%;
  width: 11.6875rem;
  height: 11.6875rem;
`;
