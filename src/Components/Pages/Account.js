import React from "react";
import Footer from "../Footer/Footer";
import MyAccount from "../Users/Account";

export default function Account() {
  return (
    <>
    <div className="account">
      <h1>Deins</h1>
      <MyAccount />
    </div>
    <Footer />
    </>
  );
}