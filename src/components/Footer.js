/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import applogo from "../source/App_logo.svg";

const Footer = () => {
  return (
    <div>
      <div class="mx-auto">
        <footer class="p-4 bg-white rounded-lg shadow-lg md:px-6 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a href="/" target="_blank" class="flex items-center mb-4 sm:mb-0">
              <img src={applogo} class="mr-4 h-20" alt="Flowbite Logo" />
            </a>
            <ul class="flex flex-wrap items-center mb-6 sm:mb-0">
              <li>
                <a
                  href="#"
                  class="mr-4 text-sm text-gray-500 hover:underline md:mr-6 "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="mr-4 text-sm text-gray-500 hover:underline md:mr-6 "
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="mr-4 text-sm text-gray-500 hover:underline md:mr-6 "
                >
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" class="text-sm text-gray-500 hover:underline ">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto 00 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center ">
            © 2022{" "}
            <a href="/" target="_blank" class="hover:underline">
              To™
            </a>
            . All Rights Reserved.
          </span>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
