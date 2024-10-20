import { createClient, SanityImageAssetDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  apiVersion: "2023-05-03",
  dataset: "production",
  projectId: "kpdhqsk9",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageAssetDocument) {
  return builder.image(source);
}
