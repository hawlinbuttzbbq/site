import { CONFIG } from "@/constains";
import { Menu } from "lucide-react";
import Link from "next/link";
import { urlForImage } from "../_lib/sanity";
import { SiteSettingsType } from "../_types/siteSettings";
import HamburgerMenu from "./HamburgerMenu";
import { CompanyPagesType } from "../_types/pagesType";

interface AppHeaderType {
  data: SiteSettingsType;
  companyPages: CompanyPagesType[];
}

const AppHeader = (props: AppHeaderType) => {
  const { baseUrl, baseUrlDev } = CONFIG;
  const url = process.env.NODE_ENV === "development" ? baseUrlDev : baseUrl;

  return (
    <header className="sticky bg-[#020001] top-0 z-40 border-white h-[110px] md:h-[160px] lg:h-[180px]">
      <div className="bg-cover bg-no-repeat bg-[url('/images/wood-surface-one.svg')]">
        <div className="container mx-auto px-10 flex justify-center items-center h-full lg:justify-center max-w-none">
          <Link href={url}>
            <div className="flex items-center">
              <img
                src={urlForImage(props.data.logoWeb.asset._ref).url()}
                alt="Logo"
                className="hidden lg:flex w-auto lg:h-[130px]"
              />
              <img
                src={urlForImage(props.data.logoWeb.asset._ref).url()}
                alt="Logo"
                className="w-auto h-[110px] lg:hidden"
              />
            </div>
          </Link>
          <div className="lg:flex items-center space-x-8 absolute right-10">
            <div className="hidden lg:flex flex-col font-medium text-white font-montserrat">
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  textAlign: "right",
                }}
              >
                {props.data.address1}
              </span>
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  textAlign: "right",
                }}
              >
                {props.data.address2}
              </span>
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  textAlign: "right",
                  color: "#dc5143",
                }}
              >
                {props.data.address3}
              </span>
            </div>
          </div>
          <div className="absolute right-4 flex flex-row space-x-4  lg:hidden">
            <HamburgerMenu
              companyPages={props.companyPages}
              siteBaseUrl={url}
            />
          </div>
        </div>
      </div>

      {/* Nav */}
      <div className="hidden md:flex justify-start items-center bg-cover bg-no-repeat bg-[url('/images/wood-surface-two.svg')] h-[50px]">
        <Link href={url}>
          <span className="text-white mx-4 font-bold capitalize">Home</span>
        </Link>
        {props.companyPages?.map((page) => (
          <Link href={`${url}/info/${page.slug.current}`}>
            <span className="text-white mx-4 font-bold capitalize">
              {page.title}
            </span>
          </Link>
        ))}
      </div>

      {/* Show Header Divider on mobile only */}
      <div className="bg-cover bg-no-repeat bg-[url('/images/wood-surface-two.svg')] h-[20px] md:hidden" />
    </header>
  );
};

export default AppHeader;
