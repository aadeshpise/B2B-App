import React from 'react';

const Contact = () => {
  return (
    <div className="bg-brand-beige py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-belleza text-4xl text-brand-black text-center mb-10">Contact Us</h1>
        <div className="bg-white p-8 rounded-2xl shadow-lg">
             <form className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-salmon focus:border-brand-salmon" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-salmon focus:border-brand-salmon" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-salmon focus:border-brand-salmon"></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-salmon text-white py-3 rounded-lg font-medium hover:bg-brand-brown transition-colors">
                    Send Message
                </button>
             </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;