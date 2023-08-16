import { MessageCircle } from "lucide-react";
import React from "react";
import ContactPopover from "./ContactPopover";

const AppHeader: React.FC = () => {
  return (
    <header className="bg-[#212529] border-b border-white sm:h-[77px] lg:h-[91px]">
      <div className="container mx-auto px-10 flex justify-center items-center h-full lg:justify-between max-w-none">
        <div className="flex items-center">
          <img
            src="https://placehold.co/190x57"
            alt="Logo"
            className="sm:w-[166px] sm:h-[50px] lg:w-[190px] lg:h-[57px]"
          />
        </div>
        <div className="lg:flex items-center space-x-8">
          <div className="hidden lg:flex flex-col font-medium text-white font-montserrat">
            <span style={{ fontSize: "12px" }}>1503 Kelly's Landing Dr.</span>
            <span style={{ fontSize: "12px" }}>Mount Holly NC 28120</span>
            <span style={{ fontSize: "12px" }}>(704) 622-1772</span>
            <span style={{ fontSize: "12px" }}>LMatthews2131@gmail.com</span>
          </div>
          <div className="hidden lg:flex border-l h-[48px]"></div>
          <MessageCircle className="hidden lg:flex text-white h-8 w-8" />
        </div>
        <div className="absolute right-4 flex flex-row space-x-4  lg:hidden">
          <ContactPopover className="text-white h-8 w-8" />
          <MessageCircle className="text-white h-8 w-8" />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
