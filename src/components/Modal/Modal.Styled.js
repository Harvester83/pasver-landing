import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;
  z-index: 99999;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2.5px);
  &.show {
    opacity: 1;
    pointer-events: visible;
  }

  > div {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), #04040d;
    border-radius: 1.875rem;
    padding: 2.625rem;
    max-width: 23.5rem;

    header {
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h2 {
          font-weight: 700;
          font-size: 1.875rem;
          line-height: 2.56rem;
          margin: 0;
          text-transform: capitalize;
        }
        .close {
          border: none;
          border-radius: 50%;
          width: 58px;
          height: 58px;
          color: #fff;
          background-color: rgba(255, 255, 255, 0.1);
        }
      }
    }

    section {
      width: 100%;
      position: relative;
      h3 {
        text-align: center;
        font-weight: 600;
        font-size: 1.5rem;
        line-height: 2.0625rem;
      }
    }
  }
`;

export const SuccessBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 41px;
  }

  p {
    font-size: 20px;  
    line-height: 27px;
  }
`;
