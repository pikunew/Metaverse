import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/router"; 
import { staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";
import styles from "../styles";
import { TitleText, TypingText } from "../components";
import { useForm, ValidationError } from "@formspree/react";

function SurveyForm() {
  const [state, handleSubmit] = useForm("myyqobgn");
  const router = useRouter(); 
    
  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

     // Submit the form
    const result = await handleSubmit(e);

    if (result.data) {
      // Check if the submission was successful
      if (result.data.ok) {
        // If the submission is successful, navigate to the "thank_you" page
        router.push("/thank_you");
      }
    }
  };
  if (state.succeeded) {
    return (
      <p className='font-medium text-lg text-white'>
        Thank you for writing to us. We have received your message, and one of our representatives will get back to you shortly.
      </p>
    );
  }

  

  // ReCAPTCHA onChange handler
  const handleRecaptchaOnChange = (value) => {
    if (value) {
      formik.setFieldValue("captchaValid", true);
    }
  };
  return (
    <div className="w-full h-[140vh] mt-48 mb-40">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className=" mt-8">
          <TypingText title="| Be in touch " textStyles="text-center" />
        </div>
        <TitleText
          className="mb-8"
          title={<>Contact Us</>}
          textStyles="text-center"
        />
      </motion.div>

      <form className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md " onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="full-name"
            className="block text-gray-700 font-bold mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="full-name"
            placeholder="First and Last"
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#c93179]"
          />
        </div>

    
        {/* email */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#c93179]"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>


        {/* Phone */}
        <div className="mb-6">
          <label htmlFor="telephone" className="block text-gray-700 font-bold mb-2">
            Phone Number
          </label>
          <input
            type="telephone"
            name="telephone"
            id="telephone"
            placeholder="(+91) 99999-99999"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#c93179]"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

       


        {/* ngo response */}
        <fieldset id="fs-frm-selects">
          <div className="mb-6">
            <label
              htmlFor="timely"
              className="block text-gray-700 font-bold mb-2"
            >
              NGO Response
            </label>
            <select
              name="ngo-response"
              id="timely"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#c93179]"
            >
              <option value="" disabled>
                Choose
              </option>
              <option value="donation">I want to make a donation</option>
              <option value="assistance">
                I want assistance (or need assistance for someone)
              </option>
              <option value="Other queries">Other queries</option>
            </select>
          </div>
        </fieldset>


        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 font-bold mb-2"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Type your message here..."
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#c93179] h-32"
          ></textarea>
           <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        </div>

        <div className="mb-6">
          <div className="w-full" id="recaptcha">
            <ReCAPTCHA
              sitekey="6LdlWwIoAAAAAObngf5n9QiA2wFeMip4sB1Nii7F"
              onChange={handleRecaptchaOnChange}
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-[#c93179] text-white font-bold py-2 px-4 rounded-lg focus:outline-none hover:bg-[#a71a5d]"
            type="submit"
            disabled={state.submitting}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
function App() {
  return <SurveyForm />;
}
export default App;