"use client";
import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { MapPin } from "lucide-react";
import Button from "@mui/material/Button";

interface ContactPopoverProps {
  className?: string;
}

export default function ContactPopover(props: ContactPopoverProps) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "contact-us-popover" : undefined;

  const openInMaps = () => {
    //TODO: Google Maps Later add method to make this dynamic from backend instead of hardcoded
    window.open(
      "https://www.google.com/maps/dir/35.3334705,-81.0644256/1503+Kellys+Landing+Drive,+Mt+Holly,+NC+28120/@35.3308332,-81.076673,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8856bbfd3d8e2119:0x709af59820607c78!2m2!1d-81.0736133!2d35.332837?entry=ttu"
    );
  };

  return (
    <div>
      <MapPin
        aria-describedby={id}
        className={props.className}
        onClick={handleClick}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography>1503 Kelly's Landing Dr.</Typography>
          <Typography>Mount Holly NC 28120</Typography>
          <Typography>(704) 622-1772</Typography>
          <Typography>LMatthews2131@gmail.com</Typography>
        </Box>
        <Button
          sx={{ display: "flex", justifyContent: "center" }}
          onClick={openInMaps}
        >
          Get Directions
        </Button>
      </Popover>
    </div>
  );
}
