import { ReactNode, useEffect, useState } from "react";

import { useRouter } from "next/router";

import Footer from "@/components/layout/Footer";
import MobileNavigation from "@/components/navigation/MobileNavigation";
import NavBar from "@/components/navigation/NavBar";
import { useScrollBlock } from "@/hooks/useScrollBlock";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const [showMobileNavigation, setShowMobileNavigation] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();
  const router = useRouter();

  useEffect(() => {
    setShowMobileNavigation(false);
    allowScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);

  const mobileNavigationHandler = (): void => {
    if (showMobileNavigation) {
      setShowMobileNavigation(false);
      allowScroll();
    } else {
      setShowMobileNavigation(true);
      blockScroll();
    }
  };

  return (
    <>
      <NavBar
        showMobileNavigation={showMobileNavigation}
        handleClick={mobileNavigationHandler}
      />
      {showMobileNavigation && <MobileNavigation />}
      <main className="my-8 mx-auto min-h-[calc(100vh-8rem)] max-w-4xl flex-auto px-4 md:mt-12">
        {children}
      </main>
      {!showMobileNavigation && <Footer />}
    </>
  );
};

export default Layout;
