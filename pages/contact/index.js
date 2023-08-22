"use client";

import { ContactWorld } from "../../sections";
import { Navbar,Footer,Form } from "../../components";


const contact = () => {
  return (
    <div>
      <Navbar />
      <ContactWorld />;
      <Form/>
      <Footer />
    </div>
  );
};

export default contact;
