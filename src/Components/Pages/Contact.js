import React from "react";
import ContactForm from "../Contact/Contact";
import Footer from "../Footer/Footer";
import "../../sass/Pages.scss"

export default function Contact() {
  return (
    <>
    <div className="contact">
      <h1>Contact</h1>
      <ContactForm />
    </div>
    <Footer />
    </>
  );
}