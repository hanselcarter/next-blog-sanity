import { SanityImageAssetDocument } from "next-sanity";

export interface Blog {
  title: string;
  subTitle: string;
  slug: string;
  image: SanityImageAssetDocument;
  description: string;
  content: unknown;
  publishedAt: string;
  author: string;
  authorHeadline: string;
  tags: string;
}
