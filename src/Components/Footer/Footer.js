import React from "react";

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "green", textAlign: "left"}}>
        Matrix Shop
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="/impressum">Impressum</FooterLink>
            <FooterLink href="/contact">Help & Contact Us</FooterLink>
            <FooterLink href="/cookies">Cookies</FooterLink>
						<FooterLink href="/agb">AGB</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
						<span>Wir sind gerne für dich da.</span>
            <span>0800 0800 0800</span>
            <FooterLink href="mailto:services@matrixshop.de">services@matrixshop.de</FooterLink>
            <FooterLink href="/callback">Kostenloser Rückrufservice</FooterLink>
          </Column>
          <Column>
            <Heading>Richtlinie</Heading>
            <FooterLink href="#">Datenschutzbestimmungen</FooterLink>
            <FooterLink href="#">Gesetzliche Zusatzinformationen</FooterLink>
            <FooterLink href="#">Widerrufsrecht</FooterLink>
            <FooterLink href="#">Zahlungsarten</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">Facebook</FooterLink>
            <FooterLink href="#">Instagram</FooterLink>
            <FooterLink href="#">Twitter</FooterLink>
            <FooterLink href="#">Youtube</FooterLink>
          </Column>
        </Row>
				<span>Copyright © 2022 MatrixDCI, Inc.</span>
      </Container>
    </Box>
  );
};
export default Footer;
