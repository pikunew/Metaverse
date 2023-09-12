"use client";

import { ContactWorld } from "../../sections";
import { Navbar,Footer, Contact} from "../../components";


const contact = () => {
  return (
    <div className=" h-100vh">
      <Navbar />
      <ContactWorld />;
      <div className=" z-40">
      <Contact/>;
      </div>
      <Footer />;
    </div>
  );
};

export default contact;
