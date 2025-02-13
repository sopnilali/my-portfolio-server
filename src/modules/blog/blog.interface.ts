import { Types } from "mongoose";

export interface TBlogContent {
  _id: Types.ObjectId;
  title: string;
  description: string;
  publish_date: string;
  category: string;
  blog_image: string;
  total_likes: string;
  createdAt: NativeDate
  updatedAt: NativeDate
}