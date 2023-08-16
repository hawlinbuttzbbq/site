import { Bookmark } from "lucide-react";
import { urlForImage } from "../_lib/sanity";
import { SiteSettingsType } from "../_types/siteSettings";
import ContactPopover from "./ContactPopover";
import ShareLinkBtn from "./ShareLinkBtn";

interface AppHeaderType {
  data: SiteSettingsType;
}

const AppHeader = (props: AppHeaderType) => {
  return (
    <header className="bg-[#212529] border-b border-white sm:h-[77px] lg:h-[91px]">
      <div className="container mx-auto px-10 flex justify-center items-center h-full lg:justify-between max-w-none">
        <div className="flex items-center">
          <img
            src={urlForImage(props.data.logoWeb.asset._ref).url()}
            alt="Logo"
            className="hidden lg:flex w-[190px] lg:h-[57px]"
          />
          <img
            src={urlForImage(props.data.logoMobile.asset._ref).url()}
            alt="Logo"
            className="sm:w-[166px] sm:h-[50px] lg:hidden"
          />
        </div>
        <div className="lg:flex items-center space-x-8">
          <div className="hidden lg:flex flex-col font-medium text-white font-montserrat">
            <span style={{ fontSize: "12px" }}>{props.data.address1}</span>
            <span style={{ fontSize: "12px" }}>{props.data.address2}</span>
            <span style={{ fontSize: "12px" }}>{props.data.address3}</span>
            <span style={{ fontSize: "12px" }}>{props.data.address4}</span>
          </div>
          <div className="hidden lg:flex border-l h-[48px]"></div>
          <ShareLinkBtn className="hidden lg:flex text-white h-8 w-8" />
        </div>
        <div className="absolute right-4 flex flex-row space-x-4  lg:hidden">
          <ContactPopover className="text-white h-8 w-8" />
          <ShareLinkBtn className="text-white h-8 w-8" />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
