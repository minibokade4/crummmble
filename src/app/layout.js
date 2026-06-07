import "./globals.css";

export const metadata = {
  title: "Crummmble",
  description: "Healthy home bakery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}