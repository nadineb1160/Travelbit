import React from "react";

function Footer() {
  return (

    <footer class="bg-teal-600 bg-opacity-50 object-bottom">
      <div class="container mx-auto px-4 pt-10 pb-6">
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/4 text-center md:text-left">
            <h1 className="font-semibold text-4xl tracking-tight text-white elite bg-teal-600 p-6 mb-4">Travel | <span className="text-gray-900">Bit</span></h1>
          </div>
          <div class="w-full md:w-1/4 text-center md:text-left popppins">
            <h5 class="uppercase mb-3 font-bold">Links</h5>
            <ul class="mb-4">
              <li class="mt-2">
                <a href="#" class="hover:underline text-gray-600 hover:text-teal-600">FAQ</a>
              </li>
              <li class="mt-2">
                <a href="#" class="hover:underline text-gray-600 hover:text-teal-600">Help</a>
              </li>
              <li class="mt-2">
                <a href="#" class="hover:underline text-gray-600 hover:text-teal-600">Support</a>
              </li>
            </ul>
          </div>
          <div class="w-full md:w-1/4 text-center md:text-left popppins">
            <h5 class="uppercase mb-3 font-bold">Social</h5>
            <ul class="mb-4">
              <li class="mt-2">
                <a href="#" class="hover:underline text-gray-600 hover:text-teal-600">Facebook</a>
              </li>
              <li class="mt-2">
                <a href="#" class="hover:underline text-gray-600 hover:text-teal-600">Linkedin</a>
              </li>
              <li class="mt-2">
                <a href="#" class="hover:underline text-gray-600 hover:text-teal-600">Twitter</a>
              </li>
            </ul>
          </div>
          <div class="w-full md:w-1/4 text-center md:text-left poppins">
            <h5 class="uppercase mb-3 font-bold">Company</h5>
            <ul class="mb-4">
              <li class="mt-2">
                <a href="#" class="hover:underline text-gray-600 hover:text-teal-600">Blog</a>
              </li>
              <li class="mt-2">
                <a href="#" class="hover:underline text-gray-600 hover:text-teal-600">About Us</a>
              </li>
              <li class="mt-2">
                <a href="#" class="hover:underline text-gray-600 hover:text-teal-600">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

  );
}

export default Footer;
