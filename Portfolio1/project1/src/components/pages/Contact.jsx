import React from 'react';

const Contact = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form className="space-y-4 max-w-md mx-auto">
        <input type="text" placeholder="Name" className="w-full border p-2" />
        <input type="email" placeholder="Email" className="w-full border p-2" />
        <textarea placeholder="Message" className="w-full border p-2" rows="5"></textarea>
        <button className="px-4 py-2 bg-green-600 text-white rounded">Send</button>
      </form>
    </div>
  );
};

export default Contact;
