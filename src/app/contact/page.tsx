"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="container-width text-center">
          <span className="text-crimson font-medium uppercase tracking-wider text-sm">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mt-4 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-silver-300 max-w-2xl mx-auto">
            Bulk orders, venue setups, and World Cup planning — drop us a line
            and we&apos;ll get back to you fast.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={48} className="text-green-600" />
                    </div>
                    <h2 className="text-2xl font-montserrat font-bold text-navy mb-4">
                      Message Sent!
                    </h2>
                    <p className="text-silver-600 mb-6">
                      Thank you for reaching out. Our team will get back to you 
                      within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="btn-outline"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-montserrat font-bold text-navy mb-6">
                      Send Us a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-navy mb-2">
                            Your Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="input-field"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-navy mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="input-field"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy mb-2">
                          Subject
                        </label>
                        <select
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="input-field"
                        >
                          <option value="">Select a topic</option>
                          <option value="order">Order Inquiry</option>
                          <option value="product">Product Question</option>
                          <option value="shipping">Shipping & Delivery</option>
                          <option value="returns">Returns & Exchanges</option>
                          <option value="wholesale">Wholesale Inquiry</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy mb-2">
                          Message
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          className="input-field resize-none"
                          placeholder="How can we help you?"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={20} />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-navy" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-navy mb-1">
                      Call or Text
                    </h3>
                    <p className="text-silver-600 text-sm mb-2">
                      Best for venue and bulk orders
                    </p>
                    <a
                      href="tel:+12816545610"
                      className="text-navy hover:text-crimson transition-colors font-medium"
                    >
                      (281) 654-5610
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-navy" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-navy mb-1">
                      Email Us
                    </h3>
                    <p className="text-silver-600 text-sm mb-2">
                      Email address coming soon — call or text us in the meantime
                    </p>
                    <span className="text-silver-500 italic">Email coming soon</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-navy" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-navy mb-1">
                      Based In
                    </h3>
                    <p className="text-silver-600 text-sm">
                      Houston, Texas<br />
                      Serving venues, fans, and event spaces worldwide
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-navy" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-navy mb-1">
                      Business Hours
                    </h3>
                    <div className="text-silver-600 text-sm space-y-1">
                      <p>Monday - Friday: 9am - 6pm CT</p>
                      <p>Saturday: 10am - 4pm CT</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-navy rounded-xl p-6 text-white">
                <h3 className="font-montserrat font-bold text-lg mb-3">
                  FAQ
                </h3>
                <p className="text-silver-300 text-sm mb-4">
                  Have questions? Check our frequently asked questions for quick answers.
                </p>
                <a href="#" className="text-crimson font-medium text-sm hover:underline">
                  View FAQ →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
