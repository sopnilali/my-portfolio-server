import { Types } from "mongoose";

export interface TBlogContent {
  _id: string
  title: string;
  description: string;
  publish_date: string;
  author_name: string;
  blog_image: string;
  total_likes: string;
  createdAt: NativeDate
  updatedAt: NativeDate
}