import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i9nu975",
        "template_erpo8id",
        form.current,
        "RN4GOG004O9p8959f"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message");
          alert('Form submitted!');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div className="gradient__bg">
        <Navbar />
      </div>
      {/* contact start */}
      {/* <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form> */}
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
          />
        </div>
        <div className="mb-6">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
          />
        </div>
        <div className="mb-6">
          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            className="text-body-color border-[f0f0f0] focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 border-primary w-full rounded border p-3 text-white transition hover:bg-blue-700"
          >
            Send Message
          </button>
        </div>
      </form>
      {/* contact start end */}
      <div className="w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></div>
      {/* brands */}
      {/* <section className="bg-white py-20 lg:py-[120px] sm:h-20 ">
        <div className="container mx-auto sm:-mt-10">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="flex flex-wrap items-center justify-center">
                <a
                  href="javascript:void(0)"
                  className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <img
                    src="https://yatindustrial.com/wp-content/uploads/elementor/thumbs/clients_YAT_EthiopianAirlines-on2yg91t9x0ldyx12jtw225ex57rsyar4r3aru4v0g.png"
                    alt="image"
                    className="h-25 w-full"
                  />
                </a>
                <a
                  href="javascript:void(0)"
                  className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <img
                    src="https://yatindustrial.com/wp-content/uploads/elementor/thumbs/clients_YAT_ethiotelecom_transparent-on2ye15j4zz7z45313alo4b8fe5kmohkhrn0zbfbpc.png"
                    alt="image"
                    className="h-25 w-full"
                  />
                </a>
                <a
                  href="javascript:void(0)"
                  className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <img
                    src="https://yatindustrial.com/wp-content/uploads/elementor/thumbs/clients_YAT_Egled_Transparent-on2yg5agikvg3j2hoi7ds33kjlqay5vts8hcuqafpc.png"
                    alt="image"
                    className="h-25 w-full"
                  />
                </a>
                <a
                  href="javascript:void(0)"
                  className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <img
                    src="https://yatindustrial.com/wp-content/uploads/elementor/thumbs/clients_YAT_amimtde-on2ysvzp5qbdh8k7a0hbkvcifmxfaggu7aub1rebcw.png"
                    alt="image"
                    className="h-25 w-full"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* brands end  */}

      <div className="w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></div>
      {/* <div className="gradient__bg">
      <Footer />
      </div> */}
    </div>
  );
};

export default Contact;
