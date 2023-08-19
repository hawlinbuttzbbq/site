"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Link from "next/link";
import { formatPrice } from "../_utils/formatPrice";

interface MenuItemCardProps {
  slug: string;
  title: string;
  price: number;
  image: string;
}

export default function MenuItemCard(props: MenuItemCardProps) {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "rgb(242, 239, 234)" }}>
      <Link href={`/menu-item-details/${props.slug}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            // TODO: once we have photos in same size then we can adjust the height
            className="max-h-[150px] lg:max-h-[200px]"
            image={props.image}
            alt={props.title}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h1"
              component="h1"
              className="text-lg font-bold lg:text-2xl"
            >
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`Starting at ${formatPrice(props.price)}`}
              {/* Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica */}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Details
          </Button>
        </CardActions>
      </Link>
    </Card>
  );
}
