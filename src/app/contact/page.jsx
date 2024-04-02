import React from "react";

function page() {
  return (
    <div className="mt-10 flex  flex-col md:items-center p-5" id="contact">
      <div className="md:w-[80%]  ">
        <h1 className="text-4xl font-light mb-10 ">Contact Me</h1>
        <span className="tracking-[5px] text-gray-400">
          Please complete the form below
        </span>
        <div className="flex flex-col ">
          <form action="" className="mt-20  flex flex-col gap-2 ">
            <div className="flex w-full justify-between gap-2">
              <div className="w-full">
                <label htmlFor="firstname">First Name</label>
                <input type="text" name="firstname" />
              </div>
              <div className="w-full">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" name="lastname" />
              </div>
            </div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" />
            <label htmlFor="message">Message</label>
            <textarea type="text" name="message" />
            <button
              className="mt-5 bg-black text-white p-5 w-fit"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;
