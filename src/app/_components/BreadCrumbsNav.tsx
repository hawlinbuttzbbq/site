import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { ChevronLeft } from "lucide-react";

interface BreadCrumbsNavProps {
  breadCrumb: string;
}

export default function BreadcrumbsNav(props: BreadCrumbsNavProps) {
  return (
    <div role="presentation" className="py-2 md:py-4">
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          color="inherit"
          // TODO: Change the link back to "/" when you move this to production
          href="https://jerryseigle.github.io/hawlin-buttz-bbq/"
        >
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
