import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function Subs() {
  const [state, handleSubmit] = useForm("mqkvnvew");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form className='flex flex-col md:mt-0 mt-12 justify-center' onSubmit={handleSubmit}>
      <label className='md:pt-0 pt-36' htmlFor="email">
        Subscribe
      </label>
      <input
      className="items-start font-thin md:w-full w-full py-3 lg:px-40 px-16 bg-[#FFCDB2] border-t-1 border-gray-800 rounded-xl placeholder:font-medium placeholder:text-gray-800"
        id="email"
        placeholder="Email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
      className="
      mt-4 items-start md:w-full w-full py-3 lg:px-40 px-16 bg-slate-100 border-t-1 border-gray-800 rounded-xl placeholder:font-medium placeholder:text-gray-800"
        id="message"
        name="message"
        placeholder="Message"
      />
      <ValidationError 
        prefix="Message" 
        
        field="message"
        errors={state.errors}
      />
      <button className=' bg-pink-700 text-white font-semibold w-48 h-10 mt-3 rounded-xl' type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
function App() {
  return (
    <Subs />
  );
}
export default App;
