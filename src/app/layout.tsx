import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sistema Financeiro",
  description: "Sistema financeiro feito em next-js",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
