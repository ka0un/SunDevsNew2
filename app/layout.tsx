import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Sundevs - Your Trusted Software Product Company",
  description:
    "Empowering Businesses with Innovative Software Solutions. Enterprise-grade software solutions including SunLicense, SunGuard, and more.",
  keywords: [
    "Sundevs",
    "Software Product Company",
    "SunLicense",
    "SunGuard",
    "License Management",
    "Code Obfuscation",
    "Java Development",
    "Minecraft Plugins",
    "Software Protection",
    "Enterprise Software",
    "Sri Lanka Software Company",
  ],
  openGraph: {
    type: "website",
    siteName: "Sundevs",
    locale: "en_US",
    url: "https://sundevs.com",
    title: "Sundevs - Your Trusted Software Product Company",
    description:
      "Empowering Businesses with Innovative Software Solutions. Enterprise-grade software solutions including SunLicense, SunGuard, and more.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sundevs - Your Trusted Software Product Company",
      },
    ],
  },
  authors: [
    {
      name: "Sundevs PVT LTD",
      url: "https://sundevs.com",
    },
  ],
  creator: "Sundevs PVT LTD",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-512x512.png",
      sizes: "512x512",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
