import styled, {css} from "styled-components";

import { BsCalendar, BsFillTelephoneFill } from "react-icons/bs";
import { HiLocationMarker, HiMail } from "react-icons/hi";
import { FaInstagram, FaFacebookSquare, FaSpotify } from "react-icons/fa";
import { TfiMenu, TfiClose } from 'react-icons/tfi';

const iconsCSS = css`
  width: 2rem;
  height: 2rem;
  fill: var(--primary);
  flex-shrink: 0;
`;

export const CalendarIcon = styled(BsCalendar)`
  ${iconsCSS}
`;
export const LocationIcon = styled(HiLocationMarker)`
  ${iconsCSS}
`;

export const ContactIcon = styled(HiMail)`
  ${iconsCSS}
`;

export const PhoneIcon = styled(BsFillTelephoneFill)`
  ${iconsCSS}
`;

const socialIcons = css`
  font-size: 2.4rem; 
  transition: all .20s ease;
  &:hover{
    color: var(--primary);
  }
`;

export const InstagramIcon = styled(FaInstagram)`
 ${socialIcons} 
`;

export const FacebookIcon = styled(FaFacebookSquare)`
 ${socialIcons} 
`;

export const SpotifyIcon = styled(FaSpotify)`
 ${socialIcons}
`;

const MobileIcons = css`
  font-size: 4rem;
  color: var(--white);
`;

export const MobileMenu = styled(TfiMenu)`
  ${MobileIcons}
`;
export const CloseMobileMenu = styled(TfiClose)`
  ${MobileIcons}
`;

export function Icons() {
  return;
}
