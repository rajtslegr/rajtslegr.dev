import { Menu, Transition } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/solid';
import React, { Fragment } from 'react';
import NavLink from './NavLink';

const MobileNavigation: React.FC = () => (
  <Menu as="div" className="relative inline-block text-left">
    <Menu.Button className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-lg shadow dark:text-gray-100 dark:bg-gray-700">
      <MenuIcon className="w-5 h-5" />
    </Menu.Button>

    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-100"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute left-0 mt-[6px] origin-top-right rounded shadow cursor-pointer w-36 bg-gray-50 dark:bg-dark focus:outline-none ring-1 ring-gray-500 dark:ring-gray-400">
        <div className="flex flex-col px-4 py-2 space-y-4">
          <Menu.Item>
            <NavLink href="/">Home</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink href="/dashboard">Dashboard</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink href="/projects">Projects</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink href="/blog">Blog</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink href="/contact">Contact</NavLink>
          </Menu.Item>
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
);

export default MobileNavigation;
