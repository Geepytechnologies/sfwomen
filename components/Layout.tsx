import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TheHead from "./TheHead";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <TheHead />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
