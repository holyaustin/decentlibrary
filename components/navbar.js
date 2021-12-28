import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/solid';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import React, {useState, useEffect} from 'react';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  useEffect(() => {
   
    // Check if document is finally loaded
    const ethereumButton = document.querySelector('.enableEthereumButton');
    const showAccount = document.querySelector('.showAccount');
    
    ethereumButton.addEventListener('click', () => {
      
      getAccount();
    });
    
    async function getAccount() {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
      showAccount.innerHTML = account;
    }

      })


  return (
   
    <Disclosure as="nav" className="bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500">
      {({ open }) => (
        <>
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex px-2 lg:px-0">

                <div className="flex-shrink-0 flex items-center">
                  <a
                    href="/"
                    className="font-medium text-4xl pb-2"
                  >
                    DeLibrary
                  </a>
                </div>

                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="h-10 w-18"
                    src="/b1.png"
                    alt="Delibrary logo"
                  />
                </div>

                
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                  <a
                    href="/catebooks"
                    className="border-indigo-500 text-gray-900 inline-flex items-center text-md font-medium hover:text-gray-100"
                  >
                    E-books
                  </a>
                </div>
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                  <a
                    href="/catvideos"
                    className="border-indigo-500 text-gray-900 inline-flex items-center text-md font-medium hover:text-gray-100"
                  >
                    Video-Books
                  </a>
                </div>

                <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                  <a
                    href="/community"
                    className="border-indigo-500 text-gray-900 inline-flex items-center text-md font-medium hover:text-gray-100"
                  >
                    Community
                  </a>
                </div>
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                  <a
                    href="/about"
                    className="border-indigo-500 text-gray-900 inline-flex items-center text-md font-medium hover:text-gray-100"
                  >
                    About
                  </a>
                </div>
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                  <a
                    href="/upload"
                    className="border-indigo-500 text-gray-900 inline-flex items-center text-md font-medium hover:text-gray-100"
                  >
                    Upload
                  </a>
                </div>

                
              </div>










              <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="max-w-lg w-full lg:max-w-xs">
                    <h2 class="showAccount text-red-600">Account: </h2>          
                    <button class="enableEthereumButton relative rounded-lg border-2 border-gray-700 bg-white px-1 py-1 shadow-sm flex items-center space-x-3 hover:bg-blue-400 focus-within:ring-6 focus-within:ring-offset-6 focus-within:ring-indigo-900">Connect Wallet</button>
                    
                </div>
              </div>


              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */} 
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:ml-4 lg:flex lg:items-center">

                {/* Profile dropdown */}
                <Menu as="div" className="ml-4 relative flex-shrink-0">
                  {({ open }) => (
                    <>
                      <div>
                        <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          <span className="sr-only">User menu</span>
                        </Menu.Button>
                      </div>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          static
                          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        />
                      </Transition>
                    </>
                  )}
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
              <a
                href="/"
                className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Home
              </a>
              <a
                href="/upload"
                className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Upload
              </a>
              <a
                href="/new"
                className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                New
              </a>
              <a
                href="/about"
                className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                About
              </a>

            </div>

          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
