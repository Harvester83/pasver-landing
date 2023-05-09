import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { LinkButton } from '../elements';
import { langs } from '../data';
import { ReactComponent as PhoneIcon } from '../assets/phone-icon.svg';
import { ReactComponent as EmailIcon } from '../assets/email-icon.svg';
import { ReactComponent as YouTubeIcon } from '../assets/youtube-icon.svg';
import { ReactComponent as InstagramIcon } from '../assets/instagram-icon.svg';
import { ReactComponent as FacebookIcon } from '../assets/facebook-icon.svg';
import { changeLanguage } from 'i18next';

const StyledMenu = styled.nav`
  /* border: 10px solid #f00; */
  background: #2f313f;
  position: absolute;
  top: 0;
  left: -1px;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 200;
  width: 100%;
  height: 100vh;
`;

const StyledMenuContainer = styled.div`
  /* border: 2px solid green; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;

  height: 100vh;
`;

const StyledMenuBox = styled.div`
  display: flex;
  padding: 2.33rem 0;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  margin-top: 11rem;
  margin-bottom: 2.5rem;
  overflow-x: auto;

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid #fff;
    width: 3.33rem;
    height: 3.33rem;
    flex-basis: 3.3rem;
    background-color: #2f313f;
    color: #ffffff;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 300ms ease;
    flex-shrink: 0;

    &:hover {
      background-color: #ffffff;
      color: #2f313f;
    }
    :not(:last-child) {
      margin-right: 10px;
    }
  }
`;

const LinkBox = styled.div`
  & svg {
    width: 20px;
    height: 20px;
  }
  & a:not(:last-child) {
    margin-bottom: ${props => props.mbLink}px;
  }

  & a {
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 18px;
    line-height: 25px;
    & svg {
      margin-right: 15px;
    }
    & span {
      font-size: 16px;
      line-height: 22px;
    }
  }
`;

const SosialLinkBox = styled.div`
  display: flex;
  & a {
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 18px;
    line-height: 25px;
    &:not(:last-child) {
      margin-right: 15px;
    }
  }
`;

const Menu = ({ open, setShow }) => {
  const { t } = useTranslation();

  return (
    <StyledMenu open={open}>
      <StyledMenuContainer className="styled-menu-container">
        <div>
          <StyledMenuBox>
            {langs.map((item, index) => (
              <div key={index} onClick={() => changeLanguage(item)}>
                {item}
              </div>
            ))}
          </StyledMenuBox>

          <LinkButton onClick={() => setShow(true)} className="mb-2">
            {t('partnership')}
          </LinkButton>

          <LinkBox mbLink={25}>
            <a rel="noreferrer" target="_blank" href="https://wa.me/994519876543">
              <PhoneIcon />
              <span>+994 51 987 65 43</span>
            </a>

            <a rel="noreferrer" target="_blank" href="mailto:support@pasver.az">
              <EmailIcon />
              <span>support@pasver.az</span>
            </a>
          </LinkBox>
        </div>

        <div className="mb-2">
          <LinkBox className="mb-2" mbLink={12}>
            <a href="https://pasver.az/">Terms of use</a>
            <a href="https://pasver.az/">Privacy and policy</a>
          </LinkBox>

          <SosialLinkBox>
            <a href="https://www.facebook.com/">
              <FacebookIcon />
            </a>

            <a href="https://www.instagram.com/pasver.az/">
              <InstagramIcon />
            </a>

            <a href="https://www.youtube.com/">
              <YouTubeIcon />
            </a>
          </SosialLinkBox>
        </div>
      </StyledMenuContainer>
    </StyledMenu>
  );
};

export default Menu;
