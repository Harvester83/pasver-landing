import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { useDraggable } from 'react-use-draggable-scroll';
import useWindowDimensions from '../../utils/WindowDimension';
import 'react-awesome-slider/dist/styles.css';
import { Dropdown } from './Dropdown';
import { Title, Hidden, Visible, LinkButton } from '../../elements';
import {
  Logo,
  ButtonsContainer,
  StoreImg,
  CardsContainer,
  CoverWrapper,
  CoverBackground,
  MenuBar,
  LogoLink,
  CarouselWrapper,
  CarouselContainer,
} from './Cover.Styled';
import Burger from '../../elements/Burger';
import Menu from '../../elements/Menu';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import { langs } from '../../data';
import img from '../../assets/bg-desktop.png';
import imgTablet from '../../assets/bg-tablet.png';

const Cover = ({ setShow }) => {
  const [open, setOpen] = React.useState(false);
  const { width } = useWindowDimensions();
  const { t } = useTranslation();
  const node = useRef();

  // We will use React useRef hook to reference the wrapping div:
  const ref = React.useRef();
  const { events } = useDraggable(ref, {
    applyRubberBandEffect: true,
    isMounted: false,
  });

  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const cards = [
    {
      id: 0,
      image: require('../../assets/blue.png'),
      title: t('cardTitle'),
      text: t('cardText'),
    },
    {
      id: 0,
      image: require('../../assets/red.png'),
      title: t('cardTitle1'),
      text: t('cardText1'),
    },
    {
      id: 0,
      image: require('../../assets/green.png'),
      title: t('cardTitle2'),
      text: t('cardText2'),
    },
    {
      id: 0,
      image: require('../../assets/yellow.png'),
      title: t('cardText3'),
      text: t('cardText3'),
    },
  ];

  return (
    <CoverWrapper img={width > 768 ? img : imgTablet} className="mb-2 mb-2_m">
      <CoverBackground>
        <Container className="container">
          <Row>
            <Col>
              <Hidden xs>
                <LogoLink href="https://pasver.az/">
                  <Logo src={require('../../assets/logo-new.png')} />
                </LogoLink>
              </Hidden>

              <Visible xs>
                <div>
                  <LogoLink position="absolute" href="https://pasver.az/">
                    <Logo src={require('../../assets/logo-new-min.png')} />
                  </LogoLink>

                  <div ref={node}>
                    <Burger open={open} setOpen={setOpen} />
                    <Menu open={open} setOpen={setOpen} setShow={setShow} />
                  </div>
                </div>
                <Menu />
              </Visible>
            </Col>

            <Hidden xs>
              <Col align={'end'} justify={'center'}>
                 <MenuBar>
                  <LinkButton onClick={() => setShow(true)}>{t('partnership')}</LinkButton>
                  <Dropdown menu={langs} />
                </MenuBar>
              </Col>
            </Hidden>
          </Row>
        </Container>

        <CarouselWrapper>
          <Container className="container">
            <Row>
              <Col className="col-custom-min" align={{ xs: 'center', sm: 'flex-start' }}>
                <Title className="text-align-center-sm" margin={'50px'} color={'#fff'}>
                  {t('coverTitle')}
                </Title>

                <ButtonsContainer>
                  <a href="https://play.google.com" target="_blank" rel="noreferrer" style={{ marginRight: 15 }}>
                    <StoreImg
                      src={
                        width <= 705
                          ? require('../../assets/GooglePlayMob1.png')
                          : require('../../assets/GooglePlay.png')
                      }
                    />
                  </a>
                  <a href="https://play.google.com" target="_blank" rel="noreferrer">
                    <StoreImg
                      src={
                        width <= 705 ? require('../../assets/AppStoreMob1.png') : require('../../assets/AppStore.png')
                      }
                    />
                  </a>
                </ButtonsContainer>
              </Col>

              <Hidden xs>
                <CarouselContainer>
                  <CardsContainer id="slider" {...events} ref={ref}>
                    {cards.map((item, index) => {
                      return (
                        <div className="card-container" key={index} style={index === 0 ? {} : { marginLeft: 30 }}>
                          <img src={item.image} className="card-image" alt="" />
                          <div className="card-info-container">
                            <p className="card-title">{t(item.title)}</p>
                            <p className="card-text">{t(item.text)}</p>
                          </div>
                        </div>
                      );
                    })}
                  </CardsContainer>
                </CarouselContainer>
              </Hidden>

              <Visible xs>
                <AutoplaySlider
                  animation="cubeAnimation"
                  play={true}
                  interval={2000}
                  transitionDelay={50}
                  organicArrows={width >= 600}
                  className="slider-container"
                >
                  {cards.map((item, index) => {
                    return (
                      <div className="card-slider-container fade" key={index}>
                        <img src={item.image} className="card-slider-image" alt="" />
                        <div className="card-info-slider-container">
                          <p className="card-slider-title">{item.title}</p>
                          <p className="card-slider-text">{item.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </AutoplaySlider>
              </Visible>
            </Row>
          </Container>
        </CarouselWrapper>
      </CoverBackground>
    </CoverWrapper>
  );
};

export default Cover;
