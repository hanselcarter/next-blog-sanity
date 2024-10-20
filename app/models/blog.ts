import { PortableTextBlock, SanityImageAssetDocument } from "next-sanity";

export interface Blog {
  title: string;
  slug: string;
  image: SanityImageAssetDocument;
  description: string;
  content: PortableTextBlock;
  publishedAt: string;
  author: string;
  authorHeadline: string;
  tags: string;
  authorImage: SanityImageAssetDocument;
  minsToRead: string;
}
