import React, { ReactNode } from "react";
import Header from "../components/header";

function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default StoreLayout;
