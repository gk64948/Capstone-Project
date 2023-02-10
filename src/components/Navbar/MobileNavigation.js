import React from "react";
import { StyledButton } from "../styles/Button.styled";
import {
  CloseMenu,
  MobileBottomText,
  MobileHeader,
  MobileImg,
  MobileLink,
  MobileList,
  MobileLogo,
  MobileMenuImage,
  MobileNavList,
  MobileStyledNav,
} from "../styles/MobileNav.styled";
import Image from "../../assets/program1-img.png";

const MobileNav = ({ isOpen, toggleHandler }) => {
  return (
    <MobileStyledNav isOpen={isOpen}>
      <MobileHeader>
        <MobileLogo>Fearless</MobileLogo>
        <CloseMenu onClick={toggleHandler} />
      </MobileHeader>
      <MobileNavList>
        <MobileList>
          <MobileLink
            to="/"
            smooth={true}
            duration={650}
            delay={0}
            spyThrottle={0}
            onClick={toggleHandler}
          >
            Home
          </MobileLink>
        </MobileList>
        <MobileList>
          <MobileLink
            to="programs"
            smooth={true}
            duration={650}
            delay={0}
            spyThrottle={0}
            onClick={toggleHandler}
          >
            Programs
          </MobileLink>
        </MobileList>
        <MobileList>
          <MobileLink
            to="about"
            smooth={true}
            duration={650}
            delay={0}
            spyThrottle={0}
            onClick={toggleHandler}
          >
            About Us
          </MobileLink>
        </MobileList>
        <MobileList>
          <MobileLink
            to="memberships"
            smooth={true}
            duration={650}
            delay={0}
            spyThrottle={0}
            onClick={toggleHandler}
          >
            Memberships
          </MobileLink>
        </MobileList>
      </MobileNavList>
      <StyledButton
        onClick={toggleHandler}
        style={{ width: "100%", marginTop: "1rem" }}
        primary={true}
      >
        Become a member
      </StyledButton>
      <MobileMenuImage>
        <MobileImg src={Image} />
      </MobileMenuImage>
      <MobileBottomText>Make it or break it!</MobileBottomText>
    </MobileStyledNav>
  );
};

export default MobileNav;
