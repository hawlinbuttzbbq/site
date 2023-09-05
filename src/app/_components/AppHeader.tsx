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

// Heights 110px, 160px, 180px

const AppHeader = (props: AppHeaderType) => {
  const { baseUrl, baseUrlDev } = CONFIG;
  const url = process.env.NODE_ENV === "development" ? baseUrlDev : baseUrl;

  return (
    <header className="sticky bg-[#020001] top-0 z-40 border-white min-h-[120px] max-h-[120px] md:min-h-[160px] md:max-h-[160px] lg:min-h-[180px] lg:max-h-[180px]">
      <div className="bg-[url('/images/wood-surface-one.jpg')] bg-cover bg-no-repeat h-[100px] md:h-[110px] lg:h-[130px]">
        <div className="container mx-auto px-10 flex justify-center items-center h-full lg:justify-center max-w-none">
          <Link href={url}>
            <div className="flex items-center">
              <img
                src={urlForImage(props.data.logoWeb.asset._ref).url()}
                alt="Logo"
                className="hidden lg:flex w-auto lg:h-[130px] max-h-[130px] mt-4"
              />
              <img
                src={urlForImage(props.data.logoWeb.asset._ref).url()}
                alt="Logo"
                className="w-auto h-[100px] max-h-[100px] mt-4 lg:hidden"
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
          <div className="absolute right-4 flex flex-row space-x-4  md:hidden">
            <HamburgerMenu
              companyPages={props.companyPages}
              siteBaseUrl={url}
            />
          </div>
        </div>
      </div>

      {/* Nav */}
      <div className="hidden md:flex justify-start items-center bg-cover bg-no-repeat bg-[url('/images/wood-surface-two4.jpg')] h-[50px] border-y-2 border-zinc-400">
        <Link href={url}>
          <span className="text-white mx-4 font-bold capitalize">Home</span>
        </Link>
        {props.companyPages
          ?.sort((a, b) => a?.order - b?.order) // Sort by page.order in ascending order
          .map((page) => (
            <Link href={`${url}/info/${page.slug.current}`} key={page?.order}>
              <span className="text-white mx-4 font-bold capitalize">
                {page.title}
              </span>
            </Link>
          ))}
      </div>
      <div className="bg-cover bg-no-repeat bg-[url('/images/wood-surface-two4.jpg')] h-[20px] border-y-2 border-zinc-400 md:hidden" />
    </header>
  );
};

export default AppHeader;
