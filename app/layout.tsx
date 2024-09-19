import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import "@fontsource-variable/lexend";
import { Footer } from "@/components/footer";
import "./globals.css";

const BASE_URL = "https://best-ai-tools-chi.vercel.app";

function generateCanonicalUrl(path: string): string {
  return `${BASE_URL}${path}`;
}
export const metadata: Metadata = {
  title: "AriaDocs - Template",
  metadataBase: new URL(BASE_URL),
  description:
    "This comprehensive documentation template, crafted with Next.js and available as open-source, delivers a sleek and responsive design, tailored to meet all your project documentation requirements.",
    alternates: {
      canonical: generateCanonicalUrl("/"),
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-lexend`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="sm:container mx-auto w-[88vw] h-auto">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
