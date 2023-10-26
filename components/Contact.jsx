import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      salutation: '',
      first_name: '',
      last_name: '',
      mobile: '',
      email: '',
      company: '',
      country_code: '',
      description: '',
      ngo_responses: '',
    },
    validationSchema: Yup.object().shape({
      salutation: Yup.string().required('Salutation is required'),
      first_name: Yup.string().required('First Name is required'),
      last_name: Yup.string().required('Last Name is required'),
      mobile: Yup.string().required('Mobile is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      company: Yup.string().required('Company is required'),
      country_code: Yup.string().required('Country is required'),
      description: Yup.string().required('Description is required'),
      ngo_responses: Yup.string().required('Please select an option'),
    }),
    onSubmit: (values) => {
      // Form submission logic
      const data = new FormData();
      data.append('salutation', values.salutation);
      data.append('first_name', values.first_name);
      data.append('last_name', values.last_name);
      data.append('mobile', values.mobile);
      data.append('email', values.email);
      data.append('company', values.company);
      data.append('country_code', values.country_code);
      data.append('description', values.description);
      data.append('00NDp000009ZMoo', values.ngo_responses);

      // Data submitting to Salesforce
      fetch('https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      })
        .then((response) => response.json())
        .then((result) => {
          // Forward to the thank_you page after successful form submission
          router.push('/thank_you');
          // Form reset after submitting
          formik.resetForm();
        })
        .catch((error) => console.log('Error', error));
    },
  });

  // ReCAPTCHA onChange handler
  const handleRecaptchaOnChange = (value) => {
    if (value) {
      formik.setFieldValue('captchaValid', true);
    }
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col items-start">
        {/* Salutation */}
        <label htmlFor="salutation">Salutation</label>
        <select
          id="salutation"
          name="salutation"
          onChange={formik.handleChange}
          value={formik.values.salutation}
        >
          <option value="">--None--</option>
          <option value="Mr.">Mr.</option>
          <option value="Ms.">Ms.</option>
          <option value="Mrs.">Mrs.</option>
          <option value="Dr.">Dr.</option>
          <option value="Prof.">Prof.</option>
        </select>
        {formik.touched.salutation && formik.errors.salutation && (
          <div className="error">{formik.errors.salutation}</div>
        )}

        {/* First Name */}
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          onChange={formik.handleChange}
          value={formik.values.first_name}
        />
        {formik.touched.first_name && formik.errors.first_name && (
          <div className="error">{formik.errors.first_name}</div>
        )}

        {/* Last Name */}
        <label htmlFor="last_name">Last Name</label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          onChange={formik.handleChange}
          value={formik.values.last_name}
        />
        {formik.touched.last_name && formik.errors.last_name && (
          <div className="error">{formik.errors.last_name}</div>
        )}

        {/* Mobile */}
        <label htmlFor="mobile">Mobile</label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          onChange={formik.handleChange}
          value={formik.values.mobile}
        />
        {formik.touched.mobile && formik.errors.mobile && (
          <div className="error">{formik.errors.mobile}</div>
        )}

        {/* Email */}
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="error">{formik.errors.email}</div>
        )}

        {/* Company */}
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          onChange={formik.handleChange}
          value={formik.values.company}
        />
        {formik.touched.company && formik.errors.company && (
          <div className="error">{formik.errors.company}</div>
        )}

        {/* Country Code */}
        <label htmlFor="country_code">Country</label>
        <select
          id="country_code"
          name="country_code"
          onChange={formik.handleChange}
          value={formik.values.country_code}
        >
          <option value="">--None--</option>
          <option value="IN">India</option>
          <option value="ID">Indonesia</option>
          <option value="IR">Iran, Islamic Republic of</option>
        </select>
        {formik.touched.country_code && formik.errors.country_code && (
          <div className="error">{formik.errors.country_code}</div>
        )}

        {/* Description */}
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          onChange={formik.handleChange}
          value={formik.values.description}
        ></textarea>
        {formik.touched.description && formik.errors.description && (
          <div className="error">{formik.errors.description}</div>
        )}

        {/* NGO Responses */}
        <label htmlFor="ngo_responses">NGO Responses:</label>
        <select
          id="ngo_responses"
          name="ngo_responses"
          onChange={formik.handleChange}
          value={formik.values.ngo_responses}
        >
          <option value="">--None--</option>
          <option value="I want to make a donation">I want to make a donation</option>
          <option value="I want assistance (or need assistance for someone)">I want assistance (or need assistance for someone)</option>
          <option value="Other queries">Other queries</option>
        </select>
        {formik.touched.ngo_responses && formik.errors.ngo_responses && (
          <div className="error">{formik.errors.ngo_responses}</div>
        )}

        {/* ReCAPTCHA */}
        <ReCAPTCHA
          sitekey="6LdlWwIoAAAAAObngf5n9QiA2wFeMip4sB1Nii7F"
          onChange={handleRecaptchaOnChange}
        />

        {/* Submit Button */}
        <button
          type="submit"
          name="submit"
          className={`md:w-72 w-56 h-[2.5rem] bg-pink-600 text-white ${
            !formik.values.captchaValid && 'opacity-50'
          }`}
          disabled={!formik.values.captchaValid || formik.isSubmitting}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

const Contact = () => {
  return (
    <div className="flex mt-[10rem] flex-col items-center justify-center mb-32 align-middle">
      <div className="flex flex-col align-middle justify-center items-center gap-3">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p>Please fill in the form below</p>
      </div>
      <div className="border-[1px] border-pink-700 w-20 mt-2"></div>
      <br />
      <div className="flex flex-col justify-center items-center border-2 w-[90%] py-16 pl-2 md:pl-30">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
