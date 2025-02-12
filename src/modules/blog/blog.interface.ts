import { Types } from "mongoose";

export interface TBlogContent {
  _id: Types.ObjectId
  blogtitle: string
  blogImage: string
  blogContent: string
  blogAuthor: string
  createdAt: NativeDate
  updatedAt: NativeDate
}