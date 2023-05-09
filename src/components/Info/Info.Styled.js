import styled from 'styled-components';

export const InfoContainer = styled.div`
  display: flex;
  position: relative;
  margin-top: -2px;
  justify-content: flex-end;
  align-items: center;
  height: 618px;
  margin-right: 120px;
  @media (max-width: 1246px) {
    margin-top: 0px;
  }
  @media (max-width: 1110px) {
    margin-right: 60px;
  }
  @media (max-width: 856px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-right: 0px;
    height: 590px;
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 856px) {
    width: 100%;
    flex-direction: row;
    margin-bottom: 40px;
    justify-content: center;
  }
  @media (max-width: 527px) {
    overflow-x: scroll;
    padding-left: 173px;
    // width: 70vw;
    padding-right: 10px;
  }
`;
export const InfoButton = styled.div`
  cursor: pointer;
  border: 2.5px solid #161727;
  border-radius: 22px;
  background: none;
  display: flex;
  padding: 24px 100px 24px 33px;
  margin: 9px 0px 9px 0px;
  width: 420px;
 
  @media (max-width: 1260px) {
    padding: 24px 42px 24px 33px;
  }

  @media (max-width: 856px) {
    border-radius: 15px;
    padding: 18.5px 24px 18.5px 18.5px;
    margin: 0px 7.5px 0px 7.5px;
  }
`;

export const InfoTitle = styled.p`
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  text-transform: uppercase;
  color: #ffffff;
  text-align: left;

  @media (max-width: 856px) {
    font-size: 20px;
    line-height: 27px;
  }
`;
