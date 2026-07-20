"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function EarnWithUsPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    gender: "",
    location: "",
    nin: "",
    state: "",
    country: "",
    address: "",
    referrerName: "",
    referrerEmail: "",
    referrerPhone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - later connect to backend
    alert("Thank you for registering! We'll be in touch soon.");
    setFormData({
      fullName: "",
      email: "",
      whatsapp: "",
      gender: "",
      location: "",
      nin: "",
      state: "",
      country: "",
      address: "",
      referrerName: "",
      referrerEmail: "",
      referrerPhone: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="pt-24">
        <main className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
            Earn With Us
          </h1>

          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="text-center mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Turn Your Network Into Income
              </h2>
              <h3 className="text-xl font-medium text-primary mb-4">
                Refer Properties. Earn Commissions.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Become a <strong>Tbash Global Limited Referral Partner</strong>{" "}
                and earn attractive commissions by connecting clients with our
                premium real estate opportunities. Whether you're a student,
                entrepreneur, professional, content creator, or simply someone
                with a strong network, our referral program gives you the
                opportunity to earn whenever your referral successfully
                purchases a property through us.
              </p>
            </div>

            {/* How It Works */}
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">
                How It Works
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Register as a Referral Partner.</li>
                <li>
                  Receive our latest property updates, flyers, and marketing
                  materials.
                </li>
                <li>
                  Share them with your network, friends, family, and prospects.
                </li>
                <li>Connect interested buyers with our sales team.</li>
                <li>
                  Earn competitive commissions on every successful property
                  purchase.
                </li>
              </ol>
              <p className="mt-4 font-semibold text-primary">
                Your referrals. Your network. Your earnings.
              </p>
            </div>

            {/* Why Join */}
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Why Join Our Referral Program?
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Competitive commission structure</li>
                <li>No sales experience required</li>
                <li>Access to premium property listings</li>
                <li>Marketing materials provided</li>
                <li>Fast and transparent commission payments</li>
                <li>Dedicated support from our sales team</li>
                <li>Flexible—work from anywhere, anytime</li>
              </ul>
            </div>

            {/* Registration Form */}
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-8">
              <h3 className="text-xl font-semibold text-primary mb-6">
                Become a Referral Partner
              </h3>
              <p className="text-gray-600 mb-6">
                Complete the registration form below to join our growing network
                of referral partners.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Gender (Optional)
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    >
                      <option value="">Select...</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Location *
                    </label>
                    <input
                      type="text"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      National Identification Number (NIN) *
                    </label>
                    <input
                      type="text"
                      name="nin"
                      required
                      value={formData.nin}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      required
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Country *
                    </label>
                    <input
                      type="text"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Residential Address
                    </label>
                    <textarea
                      name="address"
                      rows={2}
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Upload Passport Photograph *
                    </label>
                    <input
                      type="file"
                      name="passport"
                      required
                      className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-dark transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Upload Valid Government ID *
                    </label>
                    <input
                      type="file"
                      name="govtId"
                      required
                      className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-dark transition"
                    />
                  </div>
                </div>

                {/* Referrer Information */}
                <div className="border-t pt-6 mt-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Referrer Information (Optional)
                  </h4>
                  <p className="text-sm text-gray-500 mb-4">
                    If you were introduced by a member of the Tbash Global
                    Limited team, kindly provide their details below.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Staff Name
                      </label>
                      <input
                        type="text"
                        name="referrerName"
                        value={formData.referrerName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Staff Email
                      </label>
                      <input
                        type="email"
                        name="referrerEmail"
                        value={formData.referrerEmail}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Staff Phone Number
                      </label>
                      <input
                        type="tel"
                        name="referrerPhone"
                        value={formData.referrerPhone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-primary text-white font-semibold px-8 py-3 rounded-full hover:bg-primary-dark transition-colors"
                >
                  Register Now
                </button>
              </form>
            </div>

            {/* Need Assistance */}
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Need Assistance?
              </h3>
              <p className="text-gray-700 mb-2">
                Our team is available to answer your questions and guide you
                through the registration process.
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +234 800 000 0000
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> referrals@tbashgloballimited.com
              </p>
            </div>

            {/* About */}
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">
                About Tbash Global Limited
              </h3>
              <p className="text-gray-700 leading-relaxed">
                At <strong>Tbash Global Limited</strong>, we are committed to
                helping individuals, families, and investors achieve their real
                estate goals through trusted property solutions, exceptional
                customer service, and rewarding investment opportunities. We
                believe that success grows through partnerships, and our
                referral program allows you to grow with us while earning
                attractive commissions.
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-800 mb-4">
                Ready to Start Earning?
              </p>
              <p className="text-gray-600">
                Register today and become a valued{" "}
                <strong className="text-primary">
                  Tbash Global Limited Referral Partner.
                </strong>
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}