import React, { useEffect, useState } from "react";
import { AppContentWrapper, AppLayoutWrapper } from "./styles";
import { Header } from "./Header";
import { AppSidebar } from "./AppSidebar";

export const AppLayout: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
}) => {
  const [isSidebar, setIsSidebar] = useState(false);
  useEffect(() => {
    document.documentElement.style.overflow = isSidebar ? "hidden" : "auto";
    document.documentElement.scrollTop = 0;
  }, [isSidebar]);

  return (
    <AppLayoutWrapper>
      <Header onMenuOpen={() => setIsSidebar(true)} />
      <AppSidebar isshow={isSidebar} onClose={() => setIsSidebar(false)} />
      <AppContentWrapper>{children}</AppContentWrapper>
    </AppLayoutWrapper>
  );
};
