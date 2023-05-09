import React from 'react';
//import { ReactComponent as Circle } from '../../assets/circle.svg';
import useWindowDimensions from '../../utils/WindowDimension';
import { BannerWrapper, BannerInfo, BannerDevizes, CircleFigure, BannerDevizesWords } from './Banner.Styled';
import { StoreImg } from '../Cover/Cover.Styled';
import { Title, Text, Image } from '../../elements';
import { useTranslation } from 'react-i18next';
import bannerBg from '../../assets/banner-bg.png';
import { Container, Row, Col } from 'react-awesome-styled-grid';

const Banner = () => {
  const { width } = useWindowDimensions();
  const { t } = useTranslation();
  return (
    <Container className="mb-3 container">
      <Row className="mb-3">
        <Col className="inner-col">
          <BannerWrapper img={bannerBg} className="inner-container">
            <Row align={'center'} justify={'center'}>
              <Col sm={4} md={4} lg={6} align={{ xs: 'center', sm: 'flex-start' }}>
                <BannerInfo>
                  <Title margin={'50px'} color={'#070819'}>
                    {t('bannerTitle')}
                  </Title>
                  <Text margin={'20px 0px 30px 0px'} color={'#070819'}>
                    {t('bannerText')}
                  </Text>

                  <div>
                    <a
                      rel="noreferrer"
                      href="https://play.google.com"
                      target="_blank"
                      style={width <= 705 ? { marginRight: 15, marginLeft: 3 } : { marginRight: 15 }}
                    >
                      <StoreImg
                        src={
                          width <= 705
                            ? require('../../assets/GooglePlayMob.png')
                            : require('../../assets/GooglePlayWhite.png')
                        }
                      />
                    </a>
                    <a rel="noreferrer" href="https://play.google.com" target="_blank">
                      <StoreImg
                        src={
                          width <= 705
                            ? require('../../assets/AppStoreMob.png')
                            : require('../../assets/AppStoreWhite.png')
                        }
                      />
                    </a>
                  </div>
                </BannerInfo>
              </Col>

              <Col sm={4} md={4} lg={6}>
                <Image src={require('../../assets/mobiles.png')} />
              </Col>
            </Row>
          </BannerWrapper>
        </Col>
      </Row>

      <Row align={{ xs: 'center', lg: 'center' }} justify={'center'}>
        <Col xs={4} sm={6} md={8} lg={10} xl={10}>
          <BannerDevizes>
            <CircleFigure img={require('../../assets/circle.svg')} />
            <BannerDevizesWords>
              <p>{t('bText')}</p>
              <img alt="icon" src={require('../../assets/1.png')} style={{ width: 32, height: 30 }} />
              <p>{t('bText1')}</p>
              <img alt="icon" src={require('../../assets/2.png')} style={{ width: 30, height: 30 }} />
              <p>{t('bText2')}</p>
              <img alt="icon" src={require('../../assets/3.png')} style={{ width: 24, height: 24 }} />
              <p>{t('bText3')}</p>
              <img alt="icon" src={require('../../assets/4.png')} style={{ width: 46, height: 30 }} />
              <p>{t('bText4')}</p>
              <img alt="icon" src={require('../../assets/5.png')} style={{ width: 72, height: 30 }} />
              <p>{t('bText5')}</p>
              <img alt="icon" src={require('../../assets/6.png')} style={{ width: 30, height: 30 }} />
              <p>{t('bText6')}</p>
            </BannerDevizesWords>
          </BannerDevizes>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
