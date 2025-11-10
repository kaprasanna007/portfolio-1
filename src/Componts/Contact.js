import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "../Style/Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  const form = useRef();
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("⏳ Sending message...");

    emailjs
      .sendForm(
        "service_82kbdzk",
        "template_e5m0k8s",
        form.current,
        "6En5WNgNJqZQ8Nk8X"
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
          setIsLoading(false);

          // Clear status after 5 seconds
          setTimeout(() => {
            setStatus("");
          }, 5000);
        },
        (error) => {
          setStatus("❌ Failed to send message. Please try again!");
          console.error("EmailJS Error:", error.text);
          setIsLoading(false);

          // Clear status after 5 seconds
          setTimeout(() => {
            setStatus("");
          }, 5000);
        }
      );
  };

  return (
    <div data-aos="fade-up" data-aos-duration="1200">
      <section id="contact" className="contact-section">
        <h2 data-aos="zoom-in" data-aos-delay="200">
          Contact Me 📬
        </h2>
        <p className="contact-subtitle" data-aos="zoom-in" data-aos-delay="300">
          Get in touch and let's discuss how we can work together!
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="form-group">
            <label htmlFor="user_name">Name</label>
            <input
              id="user_name"
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="user_email">Email</label>
            <input
              id="user_email"
              type="email"
              name="user_email"
              placeholder="your@email.com"
              required
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Type your message here..."
              required
              disabled={isLoading}
            ></textarea>
          </div>

          <button type="submit" className="send-button" disabled={isLoading}>
            {isLoading ? (
              <>
                <i className="bx bx-loader bx-spin"></i> Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>

          {status && (
            <div
              className={`status-message ${
                status.includes("✅") ? "success" : "error"
              }`}
            >
              {status}
            </div>
          )}
        </form>

        {/* Additional Contact Info */}
        <div className="contact-info" data-aos="fade-up" data-aos-delay="600">
          <div className="contact-item">
            <i className="bx bx-envelope"></i>
            <span>ka.prasanna2005@gmail.com</span>
          </div>
          <div className="contact-item">
            <i className="bx bxl-linkedin"></i>
            <a
              href="https://www.linkedin.com/in/prasanna-ka-203a02395"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
