import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import contact1 from "../assets/img/contact1.svg";
import contact3 from "../assets/img/contact3.svg";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react"; // Import useState
import { toast } from 'react-toastify';

const PremiumTelegram = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track if the form is submitting
  const [cooldown, setCooldown] = useState(0); // State to track the cooldown time

  // Email validation function
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Phone number validation function
  const validatePhoneNumber = (phone) => {
    const regex = /^\d{10}$/; // Assumes a 10-digit phone number
    return regex.test(phone);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // If the button is in cooldown, show a toast message
    if (cooldown > 0) {
      toast.error(`Please wait ${cooldown} seconds before submitting again.`);
      return;
    }

    const formData = new FormData(form.current);
    const userEmail = formData.get('user_email');
    const userPhone = formData.get('user_phone');

    // Validate email
    if (!validateEmail(userEmail)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Validate phone number
    if (!validatePhoneNumber(userPhone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }

    // Disable the button and start the cooldown
    setIsSubmitting(true);
    setCooldown(30); // Set cooldown to 30 seconds

    // Start the cooldown timer
    const interval = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(interval); // Stop the interval when cooldown reaches 0
          setIsSubmitting(false); // Re-enable the button
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // If validations pass, send the email
    emailjs
      .sendForm('service_7fraq77', 'template_ts8z40u', form.current, {
        publicKey: 'j-Vun50f8_ygT9sCG',
      })
      .then(
        () => {
          toast.success("Our Team will contact you shortly.");
        },
        () => {
          toast.error("Failed to send the message. Please try again.");
        },
      );
  };

  return (
    <div>
      <NavBar LinkColor={"text-black"} />

      <div className="myContainer !pt-20 md:!pt-40 flex item-center flex-col">
        <motion.p
          className="text-5xl text-[var(--text_normal)] font-semibold text-center"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          Buy Your Premium Telegram Subscription
        </motion.p>

        <div className="myContainer !pt-10 md:!pt-20">
          <motion.div
            className="bg-[#FFDDDA] !p-6 w-full rounded-md flex flex-col md:flex-row gap-10"
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form className="md:w-[50%]" onSubmit={sendEmail} ref={form}>
              <p className="text-3xl text-[var(--text_normal)]">Premium Subscription</p>
              <p className="text-[var(--text_normal)]">Fill all the detail below to buy Telegram premium subscription.</p>
              <input required type="text" className="bg-white !p-2 rouded-md !mt-6 w-full rounded-sm" placeholder="Full Name" name="user_name" />
              <input required type="tel" className="bg-white !p-2 rouded-md !mt-6 w-full rounded-sm" placeholder="Enter your 10-digit contact number" name="user_phone" />
              <input required type="email" className="bg-white !p-2 rouded-md !mt-4 w-full rounded-sm" placeholder="Your Email address for follow-up" name="user_email" />
              <select name="user_subject" id="" required placeholder="subject" className="bg-white !p-2 rouded-md !mt-4 w-full rounded-sm">
                <option>Telegram Premium Subscription.</option>
              </select>
              <motion.button
                type="submit"
                className="bg-[var(--accent)] cursor-pointer !px-6 !py-2 rounded-sm text-white w-full !mt-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
                disabled={isSubmitting} // Disable the button during cooldown
              >
                {isSubmitting ? `Please wait ${cooldown} seconds...` : "Submit Your Details"}
              </motion.button>
            </form>

            <div className="md:w-[40%]">
                <div className="flex items-center gap-3 text-[var(--text_normal)] !mt-0 md:!mt-32">
                  <img src={contact1} alt="" />
                  <div>
                    <p>+91 9355166193</p>
                    <p className="text-sm text-zinc-500 font-light">Call or WhatsApp us for instant support.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-[var(--text_normal)] !mt-4">
                  <img src={contact3} alt="" />
                  <div>
                    <p>support@tradewithtechack.com</p>
                    <p className="text-sm text-zinc-500 font-light">Reach out via email for detailed inquiries</p>
                  </div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer marginTop={"!mt-40"} />
    </div>
  );
};

export default PremiumTelegram;