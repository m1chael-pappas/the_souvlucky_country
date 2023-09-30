import React from "react";

const Footer = () => {
  return (
    <footer className="inline-flex flex-col items-center py-[40px] px-6 gap-16 w-full bg-[#0D71C9]">
      <h1
        className="text-white text-4xl"
        style={{
          fontFamily: "Sedgwick Ave",
          fontSize: "42px",
          fontWeight: 400,
          fontStyle: "normal",
          lineHeight: "normal",
        }}
      >
        Locations & Hours
      </h1>

      <div className="flex flex-wrap justify-center gap-16">
        <div
          className="text-center text-white text-lg font-light leading-6 ml-96 mt-10"
          style={{ fontFamily: "Roboto", fontSize: "18px", lineHeight: "24px" }}
        >
          <p>The Souvlucky Country, </p>
          <p>316 Church st.</p>
          <p>Parramatta NSW 2150</p>
          <br />
          <br />
          <p>Monday - Friday 12:00PM - 10:00PM</p>
          <p>Saturday - Sunday 12:00PM - 11:00PM</p>
          <br />
          <br />
          <p>Tel: (02) 9891 4174</p>
          <p>Email: souvlucky62@gmail.com</p>
        </div>

        <iframe
          className="w-[600px] h-[327px] flex-shrink-0 ml-20 rounded-3xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.873200729198!2d151.20319911520996!3d-33.86881998065456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae24411a2fbf%3A0x686f1a8b4c8972a4!2s316%20Church%20St%2C%20Parramatta%20NSW%202150%2C%20Australia!5e0!3m2!1sen!2sus!4v1625656714753!5m2!1sen!2sus"
          allowFullScreen={false}
          loading="lazy"
        ></iframe>
      </div>

      <div
        className="text-center text-white text-base font-light leading-6"
        style={{ fontFamily: "Roboto", fontSize: "16px", lineHeight: "22px" }}
      >
        © {new Date().getFullYear()} by The Souvlucky Country
      </div>
    </footer>
  );
};

export default Footer;
