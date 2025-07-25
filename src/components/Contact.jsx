import React from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'your_service_id',    // 🔁 Replace with your EmailJS service ID
      'your_template_id',   // 🔁 Replace with your EmailJS template ID
      e.target,
      'your_public_key'     // 🔁 Replace with your EmailJS public key
    ).then((result) => {
      console.log(result.text);
      alert("Message sent successfully!");
    }, (error) => {
      console.log(error.text);
      alert("An error occurred. Please try again.");
    });

    e.target.reset();
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900" data-aos="fade-up">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-black dark:text-yellow-300 mb-8">Contact Me</h2>
        <form onSubmit={sendEmail} className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 rounded" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 rounded" />
          <textarea name="message" placeholder="Your Message" required className="w-full p-3 rounded" />
          <button type="submit" className="bg-indigo-600 text-white dark:text-yellow-300 px-6 py-2 rounded hover:bg-indigo-700">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
