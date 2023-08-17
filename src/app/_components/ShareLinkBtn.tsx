"use client";
import React from "react";
import { Share } from "lucide-react";
import { usePathname } from "next/navigation";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { X } from "lucide-react";
import { CONFIG } from "@/constains";

interface ShareLinkBtnProps {
  className?: string;
}

const ShareLinkBtn = (props: ShareLinkBtnProps) => {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  const handleSharePress = async () => {
    await navigator.clipboard.writeText(`${CONFIG.baseUrl}${pathname}`);

    // Show the snackbar
    setOpen(true);
  };

  const handleDismiss = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleDismiss}
      >
        <X />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      <Share className={props.className} onClick={handleSharePress} />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleDismiss}
        message="Url copied successful!"
        action={action}
      />
    </>
  );
};

export default ShareLinkBtn;
