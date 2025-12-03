import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-sand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="block text-terracotta-600 font-bold tracking-widest text-xs uppercase mb-6">
              Get in Touch
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-emerald-950 leading-[1.1] mb-8">
              Let's plan your <br/>
              <span className="italic text-terracotta-500">next adventure</span> together.
            </h1>
            <p className="text-lg text-sand-800 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
              Have questions? Want to discuss a custom itinerary? We're here to help bring your travel dreams to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-4xl text-emerald-950 mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-sand-800 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-sand-50 border border-sand-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:border-transparent text-sand-800"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-sand-800 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-sand-50 border border-sand-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:border-transparent text-sand-800"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-sand-800 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-sand-50 border border-sand-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:border-transparent text-sand-800"
                  >
                    <option value="">Select a subject</option>
                    <option value="custom-trip">Plan a Custom Trip</option>
                    <option value="existing-booking">Existing Booking</option>
                    <option value="general-inquiry">General Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-sand-800 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-sand-50 border border-sand-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:border-transparent text-sand-800 resize-none"
                    placeholder="Tell us about your travel dreams..."
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center gap-3 bg-emerald-800 hover:bg-emerald-900 text-white px-8 py-4 rounded-lg font-medium transition-all shadow-md hover:shadow-lg w-full justify-center"
                >
                  Send Message
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-4xl text-emerald-950 mb-8">Contact Information</h2>
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sand-50 rounded-full">
                    <Mail className="h-6 w-6 text-emerald-900" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-emerald-950 mb-2">Email</h3>
                    <p className="text-sand-800 font-light">
                      <a href="mailto:hello@journeynest.com" className="hover:text-emerald-900 transition-colors">
                        hello@journeynest.com
                      </a>
                    </p>
                    <p className="text-sand-800 font-light">
                      <a href="mailto:support@journeynest.com" className="hover:text-emerald-900 transition-colors">
                        support@journeynest.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sand-50 rounded-full">
                    <Phone className="h-6 w-6 text-emerald-900" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-emerald-950 mb-2">Phone</h3>
                    <p className="text-sand-800 font-light">
                      <a href="tel:+1234567890" className="hover:text-emerald-900 transition-colors">
                        +1 (234) 567-8900
                      </a>
                    </p>
                    <p className="text-sand-800 font-light text-sm mt-1">
                      Available 24/7 for urgent travel assistance
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sand-50 rounded-full">
                    <MapPin className="h-6 w-6 text-emerald-900" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-emerald-950 mb-2">Office</h3>
                    <p className="text-sand-800 font-light">
                      123 Traveler's Lane<br />
                      San Francisco, CA 94102<br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sand-50 rounded-full">
                    <Clock className="h-6 w-6 text-emerald-900" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-emerald-950 mb-2">Business Hours</h3>
                    <p className="text-sand-800 font-light">
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Saturday: 10:00 AM - 4:00 PM PST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;

