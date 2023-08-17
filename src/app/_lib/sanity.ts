import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { CONFIG } from "@/constains";

const projectId = CONFIG.projectId;
const dataset = "production";
const apiVersion = "2023-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

export const sanityCDNUrl = "https://cdn.sanity.io/images";

const builder = imageUrlBuilder(client);

export const urlForImage = (ref: string) => {
  return builder.image(ref);
};
