import styled from 'styled-components';

export const FooterTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  margin-bottom: 19px;
`;

export const FooterItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 42px;
`;

export const FooterText = styled.p`
  font-weight: 600;
  color: #8a9095;
  font-size: 0.75rem;
  line-height: 1rem;
  @media only screen and (min-width: 2560px) {
    font-size: 20px;
    line-height: 27px;
  }
`;

export const Copyright = styled.div`
  background: #161727;
`;

export const CopyrightText = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 0.625rem;
  line-height: 0.875rem;
  text-align: center;
  color: #ffffff;
  @media only screen and (min-width: 2560px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const CopyrightBox = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 767px) {
    justify-content: space-between;
  }
`;

export const SocialBlock = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent ?? 'flex-start'};
`;

export const ContactField = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};;
  & div:not(:last-child) {
    margin-right: 7.5rem;

    @media only screen and (min-width: 2560px) {
      margin-right: 120px;
    }

    @media only screen and (max-width: 768px) {
      margin-right: 0;
      margin-bottom: 1.66rem;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterHead = styled.div`
  border-top: 2px solid #464757;
  max-width: 100%;
  padding: 3rem 0;

  @media only screen and (min-width: 2560px) {
    padding-bottom: 85px;
  }
`;

export const FooterWrapper = styled.div`
  /* outline: 1px solid white;
display: flex;
flex-direction: column;
width: 2140px;
margin: 0 auto; */
`;
