import React, { useState } from 'react';
import useWindowDimensions from '../../utils/WindowDimension';
import { InfoContainer, ButtonsContainer, InfoButton, InfoTitle } from './Info.Styled';
import { useTranslation } from 'react-i18next';
import { Text } from '../../elements';
import { ReactComponent as AxtarIcon } from '../../assets/axtar-icon.svg';
import { ReactComponent as TapIcon } from '../../assets/tap-icon.svg';
import { ReactComponent as OynaIcon } from '../../assets/oyna-icon.svg';

const Info = () => {
  const [selectedSection, setSelectedSection] = useState(0);
  const { width } = useWindowDimensions();
  const { t } = useTranslation();

  const handleClick = index => {
    setSelectedSection(index);
  };

  const infoItems = [
    {
      id: 0,
      image: <AxtarIcon />,
      title: 'infoBtn',
      text: 'infoTitle',
    },
    {
      id: 0,
      image: <TapIcon />,
      title: 'infoBtn1',
      text: 'infoTitle1',
    },
    {
      id: 0,
      image: <OynaIcon />,
      title: 'infoBtn2',
      text: 'infoTitle2',
    },
  ];

  if (width > 856) {
    return (
      <InfoContainer className="mb-2">
        <div className="info-image">
          {selectedSection === 0 && <img alt={'icon'} src={require('../../assets/axtar.png')} />}
          {selectedSection === 1 && <img alt={'icon'} src={require('../../assets/tap.png')} />}
          {selectedSection === 2 && <img alt={'icon'} src={require('../../assets/oyna.png')} />}
        </div>

        <ButtonsContainer>
          {infoItems.map((item, index) => {
            return (
              <InfoButton
                onMouseEnter={() => handleClick(index)}
                onMouseLeave={() => handleClick(selectedSection)}
                onClick={() => handleClick(index)}
                style={index === selectedSection ? { background: '#161727' } : {}}
                key={index}
              >
                <div className="button-img">{item.image}</div>
                <div>
                  <InfoTitle>{t(item.title)}</InfoTitle>
                  <Text color={'#fff'}>{t(item.text)}</Text>
                </div>
              </InfoButton>
            );
          })}
        </ButtonsContainer>
      </InfoContainer>
    );
  } else
    return (
      <InfoContainer className="mb-2">
        <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
          <ButtonsContainer id="info-buttons">
            {infoItems.map((item, index) => {
              return (
                <InfoButton
                  key={index}
                  onClick={() => handleClick(index)}
                  style={index === selectedSection ? { background: '#161727' } : {}}
                >
                  <div className="button-img">{item.image}</div>
                  <InfoTitle>{t(item.title)}</InfoTitle>
                </InfoButton>
              );
            })}
          </ButtonsContainer>
        </div>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
          <Text style={{textAlign: 'center'}}>
            {selectedSection === 0 && t(infoItems[0].text)}
            {selectedSection === 1 && t(infoItems[1].text)}
            {selectedSection === 2 && t(infoItems[2].text)}
          </Text>
        </div>
        <div className="info-image">
          {selectedSection === 0 && <img alt={'icon'} src={require('../../assets/axtar-mob.png')} />}
          {selectedSection === 1 && <img alt={'icon'} src={require('../../assets/tap-mob.png')} />}
          {selectedSection === 2 && <img alt={'icon'} src={require('../../assets/oyna-mob.png')} />}
        </div>
      </InfoContainer>
    );
};

export default Info;
