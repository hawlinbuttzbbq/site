import React from "react";
import { SiteSettingsType } from "../_types/siteSettings";
import Link from "next/link";

interface FooterProps {
  data: SiteSettingsType;
}

const Footer = (props: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="mt-20 p-8"
      style={{ backgroundColor: "rgb(242, 239, 234)" }}
    >
      {props.data.showSocialChannels && (
        <div className="text-center mb-6">
          <h2 className="text-lg font-semibold">Stay Connected</h2>
          <div className="flex justify-center mt-2 space-x-4">
            {props.data.socialFacebook && (
              <a
                href={props.data.socialFacebook}
                className="text-red-600 hover:text-red-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            )}
            {props.data.socialInstagram && (
              <a
                href={props.data.socialInstagram}
                className="text-red-600 hover:text-red-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            )}
            {props.data.socialYoutube && (
              <a
                href={props.data.socialYoutube}
                className="text-red-600 hover:text-red-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-youtube"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </a>
            )}
            {props.data.socialX && (
              <a
                href={props.data.socialX}
                className="text-red-600 hover:text-red-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </a>
            )}
          </div>
        </div>
      )}
      <p className="text-center text-gray-600">
        &copy; {currentYear} All rights reserved. Site by Hawlin Buttz BBQ LLC.
        <Link href="https://hawlinbuttzbbq.sanity.studio"> Developed</Link> by
        JERRY SEIGLE.
      </p>
    </footer>
  );
};

export default Footer;
