import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppHeader from "./_components/AppHeader";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Footer from "./_components/Footer";
import { SiteSettingsType } from "./_types/siteSettings";
import { client, urlForImage } from "./_lib/sanity";
import { CompanyPagesType } from "./_types/pagesType";

const inter = Inter({ subsets: ["latin"] });

// Original default method for meta data.
// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

async function getSiteSettings() {
  const query = `*[_type == "siteSettings"][0]`;

  const data: SiteSettingsType = await client.fetch(query);

  return data;
}

async function getCompanyPages() {
  const query = `*[_type == "page"]`;

  const data: CompanyPagesType[] = await client.fetch(query);

  return data;
}

export async function generateMetadata(): Promise<Metadata> {
  const siteSettings = await getSiteSettings();
  const favicon = urlForImage(siteSettings.favicon.asset._ref).url();
  const keywords = siteSettings?.keywords || [siteSettings.title];

  return {
    title: siteSettings.title,
    description: siteSettings.description,
    icons: {
      icon: favicon,
      apple: favicon,
    },
    keywords,
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteSettings = await getSiteSettings();

  const companyPages = await getCompanyPages();

  return (
    <html lang="en">
      {/* Status bar Color for mobile devices */}
      {/* Chrome, Firefox OS and Opera */}
      <meta name="theme-color" content="#212529" />
      {/* Windows */}
      <meta name="msapplication-navbutton-color" content="#212529" />
      {/* iOS Safari */}
      <meta name="apple-mobile-web-app-status-bar-style" content="#000" />
      <body className={inter.className}>
        <AppHeader data={siteSettings} companyPages={companyPages} />
        {children}
        <Footer data={siteSettings} />
      </body>
    </html>
  );
}
