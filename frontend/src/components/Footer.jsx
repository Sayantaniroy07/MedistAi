import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const socialIconStyle = `
    p-3
    rounded-full
    bg-white
    dark:bg-[#111]
    text-gray-700
    dark:text-white
    shadow-md
    hover:scale-110
    hover:text-[#5044E5]
    transition-all
    duration-300
  `;

  return (
    <footer
      id="footer"
      className="
        mt-20
        bg-gradient-to-b
        from-[#F8FAFF]
        via-[#F4F8FF]
        to-[#EEF4FF]
        dark:from-black
        dark:via-black
        dark:to-black
        border-t
        border-gray-200
        dark:border-gray-800
      "
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold dark:text-white">
              Medist
              <span className="text-[#5044E5]">AI</span>
            </h2>

            <p className="mt-4 text-gray-600 dark:text-gray-400 leading-7">
              AI-Powered Healthcare Platform.
<br/>
Analyze prescriptions, discover specialists, locate nearby  specialists, and book appointments through one intelligent system.
            </p>

            <div className="flex gap-4 mt-6">
              <a href="#" className={socialIconStyle}>
                <FaTwitter size={18} />
              </a>

              <a href="#" className={socialIconStyle}>
                <FaGithub size={18} />
              </a>

              <a href="#" className={socialIconStyle}>
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-5 dark:text-white">
              Company
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#5044E5] transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#5044E5] transition"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#5044E5] transition"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="https://iapp.org/news/a/llms-with-retrieval-augmented-generation-good-or-bad-for-privacy-compliance-"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#5044E5] transition"
                >
                 Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-5 dark:text-white">
              Features
            </h3>

            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li>AI Healthcare Chatbot</li>
              <li>Prescription Analysis</li>
              <li>Medical Knowledge Retrieval</li>
              <li>Doctor Recommendation</li>
              <li>Appointment Booking</li>
              <li>Disease & Symptom Analysis</li>

            </ul>
          </div>

          {/* Resources */}
          <div>
  <h3 className="text-lg font-semibold mb-5 dark:text-white">
    Resources
  </h3>

  <ul className="space-y-3">
    <li>
      <a
        href="https://python.langchain.com/docs/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-400 hover:text-[#5044E5] transition"
      >
        LangChain Docs
      </a>
    </li>

    <li>
      <a
        href="https://docs.pinecone.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-400 hover:text-[#5044E5] transition"
      >
        Vector Database
      </a>
    </li>

    <li>
      <a
        href="https://huggingface.co/blog"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-400 hover:text-[#5044E5] transition"
      >
        AI Blog
      </a>
    </li>

    <li>
      <a
        href="https://www.promptingguide.ai/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-400 hover:text-[#5044E5] transition"
      >
        Prompt Engineering
      </a>
    </li>
     <li>
      <a
        href="https://dwarakaprao.medium.com/retrieval-augmented-generation-rag-faq-generator-on-your-docs-22b7f56f785f"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-400 hover:text-[#5044E5] transition"
      >
         FAQ
      </a>
    </li>
  </ul>
</div>

        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-300 dark:border-gray-800" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <div className="flex flex-wrap gap-5 text-sm">
            <a
              href="#"
              className="text-gray-500 dark:text-gray-400 hover:text-[#5044E5] transition"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-gray-500 dark:text-gray-400 hover:text-[#5044E5] transition"
            >
              Terms & Conditions
            </a>

            <a
              href="#"
              className="text-gray-500 dark:text-gray-400 hover:text-[#5044E5] transition"
            >
              Cookie Policy
            </a>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2026-Copyright.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;