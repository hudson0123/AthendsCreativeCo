import React from 'react';

export default function Footer() {
  return (
    <div className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold">Athens Creative Co.</h2>
            <p className="mt-2">Your digital marketing partner for the modern world.</p>
          </div>

          <div className="mt-6 md:mt-0">
            <ul className="flex justify-center md:justify-end space-x-6 text-lg">
              <li>
                <a href="mailto:hudsonodonnell2004@gmail.com" className="hover:text-gray-200">Email</a>
              </li>
              <li>
                <a href="tel:+17063437446" className="hover:text-gray-200">Phone</a>
              </li>
              <li>
                <a href="/work" className="hover:text-gray-200">Work</a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-200">About</a>
              </li>
              <li>
                <a href="/services" className="hover:text-gray-200">Services</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-200 pt-4 text-center">
          <p className="text-sm">© 2025 Bulldog Digital. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
