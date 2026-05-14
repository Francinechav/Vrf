"use client";

import { useState } from "react";

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

export default function ContactPage() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    setLoading(true);

    try {

      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      if (response.ok) {

        alert("Message sent successfully!");

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });

      } else {

        alert("Something went wrong.");

      }

   } catch (error) {

  console.error(error);

  alert("Failed to send message.");

}

    setLoading(false);

  };

  return (
    <main className="bg-[#F6F7F8] text-[#0B3A4A] overflow-hidden">

      <section className="px-5 py-12 md:px-8 lg:px-14 md:py-16">

        <div className="max-w-7xl mx-auto">

          {/* TOP */}
          <div className="grid lg:grid-cols-[1fr_0.95fr] gap-8 items-start">

            {/* LEFT - FORM */}
            <div className="bg-white border border-[#E7EDF0] p-6 md:p-8 shadow-sm">

              <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em]">

                Need Any Help?

              </h2>

              <p className="text-sm text-[#7A8B94] mt-3 leading-relaxed">

                Send us a message and we’ll respond as soon as possible.

              </p>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-4"
              >

                {/* ROW */}
                <div className="grid sm:grid-cols-2 gap-4">

                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                    className="w-full border border-[#E7EDF0] bg-[#FAFBFC] px-4 py-3 text-sm outline-none focus:border-[#5FAFC2] transition"
                  />

                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                    className="w-full border border-[#E7EDF0] bg-[#FAFBFC] px-4 py-3 text-sm outline-none focus:border-[#5FAFC2] transition"
                  />

                </div>

                {/* ROW */}
                <div className="grid sm:grid-cols-2 gap-4">

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full border border-[#E7EDF0] bg-[#FAFBFC] px-4 py-3 text-sm outline-none focus:border-[#5FAFC2] transition"
                  />

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full border border-[#E7EDF0] bg-[#FAFBFC] px-4 py-3 text-sm outline-none focus:border-[#5FAFC2] transition"
                  />

                </div>

                {/* SUBJECT */}
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full border border-[#E7EDF0] bg-[#FAFBFC] px-4 py-3 text-sm outline-none focus:border-[#5FAFC2] transition"
                />

                {/* MESSAGE */}
                <textarea
                  rows={7}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message Here"
                  required
                  className="w-full resize-none border border-[#E7EDF0] bg-[#FAFBFC] px-4 py-4 text-sm outline-none focus:border-[#5FAFC2] transition"
                />

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#0B3A4A] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#124B5F] disabled:opacity-70"
                >

                  {loading ? "Sending..." : "Send Message"}

                </button>

              </form>

            </div>

            {/* RIGHT SIDE */}
            <div>

              {/* LABEL */}
              <span className="inline-flex bg-[#EEF3F5] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5FAFC2]">

                Contact Us

              </span>

              {/* TITLE */}
              <h1 className="text-4xl md:text-5xl font-semibold leading-[1] tracking-[-0.04em] mt-5">

                Get In Touch
                <br />
                With Us

              </h1>

              {/* TEXT */}
              <p className="text-sm md:text-[15px] leading-[1.9] text-[#5C6F79] mt-5 max-w-[580px]">

                Have questions? Need support? Want to partner with us?
                We’d love to hear from you. Contact us using the
                details below or send us a message through the form.

              </p>

              {/* CONTACT INFO */}
{/* CONTACT INFO */}
<div className="grid sm:grid-cols-3 gap-6 mt-8">

  {/* PHONE */}
  <div>

    <Phone className="h-5 w-5 text-[#0B3A4A]" />

    <h3 className="text-sm font-semibold mt-4">
      Call Us
    </h3>

    <a
      href="tel:+265997902095"
      className="text-xs text-[#5C6F79] font-bold leading-relaxed mt-2 block hover:text-[#0B3A4A] transition"
    >
      +265 997 902 095
    </a>

  </div>

  {/* EMAIL */}
  <div>

    <Mail className="h-5 w-5 text-[#5FAFC2]" />

    <h3 className="text-sm font-semibold mt-4">
      Email Us
    </h3>

    <a
      href="mailto:info@vitalrightsfoundation.com"
      className="text-xs text-[#5C6F79] font-bold leading-relaxed mt-2 block break-all hover:text-[#0B3A4A] transition"
    >
      info@vitalrightsfoundation.com
    </a>

  </div>

  {/* SOCIAL */}
  <div>

    <MapPin className="h-5 w-5 text-[#124B5F]" />

    <h3 className="text-sm font-semibold mt-4">
      Connect
    </h3>

    <div className="flex items-center gap-2 mt-3">

      <a
        href="https://web.facebook.com/VitalRights/?_rdc=1&_rdr#"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E7EDF0] transition hover:bg-[#EEF3F5]"
      >
        <FaFacebookF className="h-3.5 w-3.5 text-[#0B3A4A]" />
      </a>

      <a
        href="https://www.linkedin.com/company/vital-rights-foundation/posts/?feedView=all"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E7EDF0] transition hover:bg-[#EEF3F5]"
      >
        <FaLinkedinIn className="h-3.5 w-3.5 text-[#0B3A4A]" />
      </a>

    </div>

  </div>

</div>

              {/* MAP */}
              <div className="mt-8 overflow-hidden border border-[#E7EDF0] bg-white shadow-sm">

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d491459.29634263384!2d35.030766!3d-15.776208!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d84513cbc0005f%3A0x236358dae4d811e6!2sBlantyre%2C%20Malawi!5e0!3m2!1sen!2sus!4v1778539017554!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  className="border-0 min-h-[360px]"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}