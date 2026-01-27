import { SectionTitle } from "../components/SectionTitle";
import { ContactCard } from "../components/ContactCard";
import {
    FaGithub,
    FaLinkedinIn,
    FaXTwitter,
    FaInstagram,
} from "react-icons/fa6";

export function ContactSection() {
    return (
        <section
            id="contact"
            className="
        py-12 sm:py-16 lg:py-20
        px-4 sm:px-6 lg:px-8
        scroll-mt-10
      "
        >
            <div className="max-w-6xl mx-auto">

                {/* Section heading */}
                <SectionTitle
                    title="Let’s Connect"
                    subtitle="I'm just one message away"
                />

                {/* Top cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">

                    {/* Reach Out */}
                    <ContactCard title="Reach Out">
                        <p className="text-sm sm:text-base text-gray-600">
                            Email:
                            <a
                                href="mailto:sjaiharinataraj@gmail.com"
                                className="ml-1 text-black font-medium hover:underline"
                            >
                                sjaiharinataraj@gmail.com
                            </a>
                        </p>
                    </ContactCard>

                    {/* Social */}
                    <ContactCard title="Social">
  {/* Top-right overlay button */}
  <a
  href="https://twitter.com/messages/compose?recipient_id=2008022900415352832"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Message on X"
  className="
    absolute top-4 right-4
    flex items-center gap-2
    px-3 py-1.5
    rounded-xl
    border border-gray-300 bg-gray-100 text-gray-800 
    text-sm font-semibold
    hover:border-gray-800 
    transition-all duration-300
  "
>
  Message on <FaXTwitter size={14} />
</a>



  {/* Social icons */}
  <div className="flex items-center gap-5 text-gray-600 text-2xl">
    <a
      href="https://github.com/ijaihari"
      target="_blank"
      className="hover:text-black transition"
      aria-label="GitHub"
    >
      <FaGithub />
    </a>
    <a
      href="https://www.linkedin.com/in/ijaihari/"
      target="_blank"
      className="hover:text-black transition"
      aria-label="LinkedIn"
    >
      <FaLinkedinIn />
    </a>
    <a
      href="https://x.com/ijaihari"
      target="_blank"
      className="hover:text-black transition"
      aria-label="X"
    >
      <FaXTwitter />
    </a>
    <a
      href="https://instagram.com/ijaihari"
      target="_blank"
      className="hover:text-black transition"
      aria-label="Instagram"
    >
      <FaInstagram />
    </a>
  </div>
</ContactCard>


                </div>

                {/* Message form */}
                <ContactCard title="Message">
                    <form
                        action="https://api.web3forms.com/submit"
                        method="POST"
                        className="flex flex-col gap-4"
                    >
                        {/* 🔑 Web3Forms Access Key */}
                        <input
                            type="hidden"
                            name="access_key"
                            value="43f8ee79-e6d0-43b2-a0d9-245a0546b9e1"
                        />

                        {/* Optional: redirect after submit */}
                        {/* <input
                            type="hidden"
                            name="redirect"
                            value="https://jaihari.dev/thank-you"
                        /> */}
                        <input type="hidden" name="subject" value="New message from DS Portfolio" />
                        {/* Name + Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text" id="name"
                                name="from_name"
                                placeholder="Name"
                                required
                                className="w-full rounded-xl border border-gray-300
                   px-4 py-3 text-sm sm:text-base
                   focus:outline-none focus:border-gray-500"
                            />

                            <input
                                type="email" id="email"
                                name="email"
                                placeholder="Email"
                                required
                                className="w-full rounded-xl border border-gray-300
                   px-4 py-3 text-sm sm:text-base
                   focus:outline-none focus:border-gray-500"
                            />
                        </div>

                        {/* Message */}
                        <textarea
                            name="message" id="message"
                            rows="9"
                            placeholder="Write your message"
                            required
                            className="w-full rounded-xl border border-gray-300
                 px-4 py-3 text-sm sm:text-base resize-y
                 focus:outline-none focus:border-gray-500"
                        />

                        {/* Optional: spam protection */}
                        <input type="checkbox" name="botcheck" className="hidden" />

                        {/* Send button */}
                        <button
                            type="submit"
                            className="w-fit mt-2
                 rounded-2xl
                 bg-black text-white border border-black
                 px-8 py-2.5
                 text-sm cursor-pointer
                 font-semibold shadow-sm backdrop-blur-md
                 hover:bg-white hover:text-black transition-all duration-300"
                        >
                            Send
                        </button>
                    </form>
                </ContactCard>


            </div>
        </section>
    );
}
