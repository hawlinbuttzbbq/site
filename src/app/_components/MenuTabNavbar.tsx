import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Link from "next/link";
import { MenuApiResponse } from "../_types/menuApiResponse";

interface MenuTabNavbarProps {
  data: MenuApiResponse[];
}

export default function MenuTabNavbar(props: MenuTabNavbarProps) {
  return (
    <Box sx={{ position: "sticky", bgcolor: "rgb(242, 239, 234)" }}>
      <Tabs
        // value={value}
        // onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        sx={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          height: { sm: 64, lg: 80 },
        }}
      >
        {props.data.map((item) => (
          <>
            <Link
              href={`/#${item.title.replace(/\s/g, "")}`}
              passHref
              legacyBehavior
            >
              <Tab
                label={item.title}
                wrapped
                sx={{
                  display: "flex",
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  minWidth: 208,
                  maxWidth: 208,
                  fontSize: { sm: 15, md: 18, lg: 18 },
                  textTransform: "uppercase",
                }}
              />
            </Link>

            <Divider variant="middle" orientation="vertical" flexItem />
          </>
        ))}
      </Tabs>
    </Box>
  );
}
