import NavLink from './NavLink';

const MobileNavigation: React.FC = () => (
  <div className="flex absolute z-10 justify-center w-full h-full bg-gray-50 dark:bg-dark">
    <div className="flex flex-col mt-24 space-y-4 text-center">
      <NavLink href="/" isMobileNavigation>
        Home
      </NavLink>
      <NavLink href="/dashboard" isMobileNavigation>
        Dashboard
      </NavLink>
      <NavLink href="/projects" isMobileNavigation>
        Projects
      </NavLink>
      <NavLink href="/blog" isMobileNavigation>
        Blog
      </NavLink>
      <NavLink href="/contact" isMobileNavigation>
        Contact
      </NavLink>
    </div>
  </div>
);

export default MobileNavigation;
