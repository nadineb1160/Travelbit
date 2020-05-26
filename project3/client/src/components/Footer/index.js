import React from "react";

function Footer() {
  return (

    <footer className="bg-teal-600 bg-opacity-50 object-bottom">
      <div className="container mx-auto px-4 pt-10 pb-6">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h1 className="font-semibold text-4xl tracking-tight text-white elite bg-teal-600 p-6 mb-4 rounded">Travel | <span className="text-gray-900">Bit</span></h1>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left popppins">
            <h5 className="uppercase mb-3 font-bold">Links</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-600 hover:text-teal-600">FAQ</a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-600 hover:text-teal-600">Help</a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-600 hover:text-teal-600">Support</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left popppins">
            <h5 className="uppercase mb-3 font-bold">Social</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-600 hover:text-teal-600">Facebook</a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-600 hover:text-teal-600">Linkedin</a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-600 hover:text-teal-600">Twitter</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left poppins">
            <h5 className="uppercase mb-3 font-bold">Company</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-600 hover:text-teal-600">Blog</a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-600 hover:text-teal-600">About Us</a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-600 hover:text-teal-600">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

  );
}

export default Footer;
