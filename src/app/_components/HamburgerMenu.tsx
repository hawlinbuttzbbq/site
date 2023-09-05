"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Menu, X } from "lucide-react";
import { CompanyPagesType } from "../_types/pagesType";
import Link from "next/link";

type Anchor = "top" | "left" | "bottom" | "right";

interface HamburgerMenuType {
  companyPages: CompanyPagesType[];
  siteBaseUrl: string;
}

export default function HamburgerMenu(props: HamburgerMenuType) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link href={props.siteBaseUrl}>
          <ListItem key={"home-page-123abc"} disablePadding>
            <ListItemButton>
              <ListItemText primary="Home" className="capitalize" />
            </ListItemButton>
          </ListItem>
        </Link>

        {props.companyPages.map((page, index) => (
          <Link href={`${props.siteBaseUrl}/info/${page.slug.current}`}>
            <ListItem key={page._id} disablePadding>
              <ListItemButton>
                <ListItemText primary={page.title} className="capitalize" />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <Menu className="text-white h-8 w-8" />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <div className="mt-3 mx-2">
              <X onClick={toggleDrawer(anchor, false)} />
              {list(anchor)}
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
