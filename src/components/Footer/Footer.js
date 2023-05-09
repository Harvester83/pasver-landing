import React from 'react';
import useWindowDimensions from '../../utils/WindowDimension';
import {
  FooterTitle,
  FooterText,
  Copyright,
  CopyrightText,
  CopyrightBox,
  SocialBlock,
  FooterHead,
  ContactField,
} from '../Footer/Footer.Styled';
import { SmallTitle, Link, Hidden, Visible } from '../../elements';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-awesome-styled-grid';

const Footer = () => {
  const { width } = useWindowDimensions();
  const { t } = useTranslation();

  // const renderItems = () => (
  //   <div style={width > 580 ? { display: 'flex' } : { display: 'flex', justifyContent: 'space-between' }}>
  //     <div style={{ marginRight: '9vw' }}>
  //       <FooterTitle>{t('mail')}</FooterTitle>
  //       <div style={{ display: 'flex' }}>
  //         <img src={require('../../assets/email.png')} alt="" style={{ width: 15, height: 13, marginRight: 12 }} />
  //         <a href="mailto:support@pasver.az">
  //           <FooterText>support@pasver.az</FooterText>
  //         </a>
  //       </div>
  //     </div>
  //     <div>
  //       <FooterTitle>{t('phone')}</FooterTitle>
  //       <div style={{ display: 'flex' }}>
  //         <img src={require('../../assets/phone.png')} alt="" style={{ width: 14.9, height: 15, marginRight: 12 }} />
  //         <FooterText>+994 51 987 65 43</FooterText>
  //       </div>
  //     </div>
  //   </div>
  // );

  const renderSocial = (props) => (
    <SocialBlock justifyContent={props.justifyContent}>
      <a href="https://www.facebook.com/">
        <img src={require('../../assets/fb.png')} alt="Facebook" style={{ width: 16, height: 16, marginRight: 19 }} />
      </a>

      <a href="https://www.instagram.com/pasver.az/">
        <img
          src={require('../../assets/inst.png')}
          alt="Instagram"
          style={{ width: 14, height: 14, marginRight: 19 }}
        />
      </a>

      <a href="https://www.instagram.com/">
        <img src={require('../../assets/yt.png')} alt="YouTube" style={{ width: 19.5, height: 13 }} />
      </a>
    </SocialBlock>
  );

  return (
    <>
      <Container className="container">
        <Row>
          <Col className="inner-col">
            <FooterHead className="inner-container">
              <Row>
                <Col xs={2}>
                  <ContactField>
                    <div>
                      <SmallTitle color={'#fff'}>{t('partnership')}</SmallTitle>

                      <a href="https://pasver.az/" style={{ display: 'flex' }}>
                        <FooterText>Partner</FooterText>
                      </a>
                    </div>

                    <Visible xs>
                      <div>
                        <SmallTitle color={'#fff'}>{t('sn')}</SmallTitle>
                        {renderSocial({justifyContent: 'flex-start'})}
                      </div>
                    </Visible>
                  </ContactField>
                </Col>

                <Col xs={2}>
                  <ContactField justifyContent="flex-end" alignItems="end">
                    <div>
                      <SmallTitle color={'#fff'}>{t('mail')}</SmallTitle>
                      <a href="mailto:support@pasver.az" style={{ display: 'flex' }}>
                        <img
                          src={require('../../assets/email.png')}
                          alt=""
                          style={{ width: 15, height: 13, marginRight: 12 }}
                        />

                        <FooterText>support@pasver.az</FooterText>
                      </a>
                    </div>

                    <div>
                      <SmallTitle color={'#fff'}>{t('phone')}</SmallTitle>
                      <a rel="noreferrer" target="_blank" href="https://wa.me/994519876543" style={{ display: 'flex' }}>
                        <img
                          src={require('../../assets/phone.png')}
                          alt=""
                          style={{ width: 14.9, height: 15, marginRight: 12 }}
                        />
                        <FooterText>+994 51 987 65 43</FooterText>
                      </a>
                    </div>
                  </ContactField>
                </Col>
              </Row>
            </FooterHead>
          </Col>
        </Row>
      </Container>

      <Copyright>
        <Container className="container">
          <Row className="footer-row" align={'center'}>
            <Col xs={4} sm={6} md={6} lg={8} xl={8} justify={'center'}>
              <CopyrightBox className="py-1">
                <CopyrightText className="mr-2">Copyright © 2023 Pasver, MMC.</CopyrightText>

                <div>
                  <Link className="mr-2" href="https://pasver.az/">
                    Terms
                  </Link>

                  <Link href="https://pasver.az/">Privacy</Link>
                </div>
              </CopyrightBox>
            </Col>

            <Hidden xs>
              <Col sm={2} md={2} lg={4} xl={4}>
                {renderSocial({justifyContent: 'end'})}
              </Col>
            </Hidden>
          </Row>
        </Container>
      </Copyright>
    </>
  );
};

export default Footer;
