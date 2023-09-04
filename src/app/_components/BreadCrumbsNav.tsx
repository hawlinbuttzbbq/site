import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { ChevronLeft } from "lucide-react";
import { CONFIG } from "@/constains";

interface BreadCrumbsNavProps {
  breadCrumb: string;
  className: string;
}

export default function BreadcrumbsNav(props: BreadCrumbsNavProps) {
  const { baseUrl, baseUrlDev } = CONFIG;
  const url = process.env.NODE_ENV === "development" ? baseUrlDev : baseUrl;

  return (
    <div role="presentation" className={props?.className}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href={url}>
          <span className="text-red-600 font-bold flex items-center">
            <ChevronLeft />
            BACK TO MENU
          </span>
        </Link>

        <Typography
          color="text.primary"
          sx={{ textTransform: "uppercase", fontWeight: "bold" }}
        >
          {props.breadCrumb}
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
