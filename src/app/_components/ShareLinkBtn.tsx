"use client";
import React from "react";
import { Share } from "lucide-react";
import { usePathname } from "next/navigation";

interface ShareLinkBtnProps {
  className?: string;
}

const ShareLinkBtn = (props: ShareLinkBtnProps) => {
  const pathname = usePathname();
  const handleSharePress = () => {
    console.log(pathname);
  };

  return <Share className={props.className} onClick={handleSharePress} />;
};

export default ShareLinkBtn;
