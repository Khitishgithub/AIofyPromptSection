"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "", // renamed from textarea for clarity
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Clear success message after 5 seconds
  useEffect(() => {
    if (submitStatus.type === "success") {
      const timer = setTimeout(() => {
        setSubmitStatus({ type: null, message: "" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "name":
        return value.trim() === "" ? "Name is required" : "";
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value.trim() === "") return "Email is required";
        if (!emailRegex.test(value))
          return "Please provide a valid email address";
        return "";
      case "message":
        return value.trim() === "" ? "Message is required" : "";
      default:
        return "";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Live validation
    setFieldErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFieldErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset status
    setSubmitStatus({ type: null, message: "" });

    // Validate all fields
    const errors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    };

    setFieldErrors(errors);

    // Check if there are any errors
    if (Object.values(errors).some((error) => error !== "")) {
      setSubmitStatus({
        type: "error",
        message: "Please fix the errors in the form",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          textarea: formData.message, 
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      // Success
      setSubmitStatus({
        type: "success",
        message: "Your message has been sent successfully!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error ? error.message : "Something went wrong",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="bg-gradient-to-b from-[#FFBF23] to-[#FFD056]"
      id="contact"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <h2 className="font-heading mb-4 font-bold tracking-tight text-blue-900 text-3xl sm:text-6xl">
              Get in Touch
            </h2>
            <p className="text-black md:text-lg">
              We'd love to hear from you! Send us a message and we'll respond as
              soon as possible.
            </p>
          </div>
        </motion.div>

        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-full pr-0 md:pr-6 flex flex-col justify-center"
            >
              <h3 className="text-2xl font-bold mb-6 text-blue-900">
                Contact Information
              </h3>
              <ul className="space-y-6 md:mb-0">
                <li className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900 text-gray-50 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">
                      Our Address
                    </h3>
                    <p className="text-black">D10 Shivani, Near IIMA</p>
                    <p className="text-black">Ambavadi, Ahmedabad -15</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900 text-gray-50 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-black">
                      Contact
                    </h3>
                    <p className="text-black">
                      Mobile:{" "}
                      <a
                        href="https://wa.me/919662512899"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:underline"
                      >
                        +91 966-251-2899
                      </a>
                    </p>

                    <p className="text-black">
                      Mail:{" "}
                      <a
                        href="mailto:real.human@aiofy.co"
                        className="text-blue-700 hover:underline"
                      >
                        real.human@aiofy.co
                      </a>
                    </p>
                  </div>
                </li>
                {/* <li className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900 text-gray-50 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">
                      Business Hours
                    </h3>
                    <p className="text-gray-700">Monday - Friday: 9AM - 6PM</p>
                    <p className="text-gray-700">Weekend: 10AM - 4PM</p>
                  </div>
                </li> */}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white shadow-xl rounded-xl p-6 md:p-8"
            >
              <h2 className="mb-6 text-2xl font-bold text-blue-900">
                Send Us a Message
              </h2>
              <form
                id="contactForm"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      autoComplete="given-name"
                      placeholder="Enter your name"
                      className={`w-full rounded-lg border py-3 px-4 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${
                        fieldErrors.name ? "border-red-500" : "border-gray-300"
                      }`}
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {fieldErrors.name && (
                      <p className="mt-1 text-sm text-red-600">
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      autoComplete="email"
                      placeholder="Enter your email address"
                      className={`w-full rounded-lg border py-3 px-4 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${
                        fieldErrors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {fieldErrors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Write your message here..."
                      className={`w-full rounded-lg border py-3 px-4 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${
                        fieldErrors.message
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></textarea>
                    {fieldErrors.message && (
                      <p className="mt-1 text-sm text-red-600">
                        {fieldErrors.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Status message */}
                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg ${
                      submitStatus.type === "success"
                        ? "bg-green-100 text-green-800 border border-green-200"
                        : "bg-red-100 text-red-800 border border-red-200"
                    }`}
                  >
                    <div className="flex items-center">
                      {submitStatus.type === "success" ? (
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      ) : (
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      )}
                      {submitStatus.message}
                    </div>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 bg-blue-900 text-white font-bold rounded-lg shadow-lg hover:bg-blue-800 transition-all duration-300 focus:ring-4 focus:ring-blue-300 focus:outline-none ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Send Message
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
