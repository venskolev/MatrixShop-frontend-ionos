import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div>
    <Container sx={{maxWidth: '50rem'}} >
    <Box sx={{ bgcolor: '#ffdea7', height: '250px', width: '550px', padding: '3rem', margin: '3rem auto 3rem auto'}}>
    <form onSubmit={handleSubmit}>
      
      <div>
        <TextField sx={{width: '200px'}} label="Deine Namen" type="text" id="name" required color="secondary" focused/>
      </div>
      <div>
        <TextField label="Dein E-Mail" type="email" id="email" required />
      </div>
      <div>
        <TextField label="Message" id="message" required />
      </div>
      <Button type="submit">{status}</Button>
    </form>
    </Box>
    </Container>
    </div>
    
  );
};

export default ContactForm;