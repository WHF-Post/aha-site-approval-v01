import "../styles/globals.css";

export const metadata = {
  title: "Artistic Heights Academy",
  description: "Official AHA site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
