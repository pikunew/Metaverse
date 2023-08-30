"use client";

import { ContactWorld } from "../../sections";
import { Navbar,Footer, Contactform} from "../../components";


const contact = () => {
  return (
    <div>
      <Navbar />
      <ContactWorld />;
      <Contactform/>;
      <Footer />
    </div>
  );
};

export default contact;
