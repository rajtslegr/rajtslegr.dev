import NavLink from "./NavLink";

const MobileNavigation: React.FC = () => (
  <div className="absolute z-10 flex h-full w-full justify-center bg-gray-50 dark:bg-dark">
    <div className="mt-24 flex flex-col space-y-4 text-center">
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
