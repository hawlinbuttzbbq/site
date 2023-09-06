"use client";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import { CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from "next/link";
import { formatPrice } from "../_utils/formatPrice";

interface MenuItemCardProps {
  slug: string;
  title: string;
  price: number;
  image: string;
  isFeatured: boolean | undefined;
}

export default function MenuItemCard(props: MenuItemCardProps) {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "rgb(242, 239, 234)" }}>
      <Link href={`/menu-item-details/${props.slug}`}>
        <CardActionArea>
          {props.isFeatured && (
            <FiberNewIcon
              fontSize="large"
              color="error"
              sx={{
                position: "absolute",
                backgroundColor: "white",
                borderRadius: 1,
              }}
            />
          )}

          <CardMedia
            component="img"
            height="140"
            // TODO: once we have photos in same size then we can adjust the height
            className="min-h-[150px] max-h-[150px] lg:max-h-[200px]"
            image={props.image}
            alt={props.title}
          />
          <CardContent sx={{ height: 150, maxHeight: 150 }}>
            <h1 className="text-lg font-bold lg:text-2xl">{props.title}</h1>
            <p className="text-sm leading-7 text-gray-600">
              {`Starting at ${formatPrice(props.price)}`}
            </p>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <button className="ml-2 text-blue-700">Details</button>
        </CardActions>
      </Link>
    </Card>
  );
}
