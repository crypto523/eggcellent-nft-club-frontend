import React from "react";
import { AppSidebarOverLay, AppSidebarWrapper } from "./styles";

type SidebarProps = {
  isshow: boolean;
  onClose: () => void;
};

export const AppSidebar: React.FC<SidebarProps> = ({ isshow, onClose }) => {
  return (
    <>
      <AppSidebarWrapper isshow={isshow}>
        AppSidebar: React.FC
      </AppSidebarWrapper>
      <AppSidebarOverLay isshow={isshow} onClick={onClose} />
    </>
  );
};
