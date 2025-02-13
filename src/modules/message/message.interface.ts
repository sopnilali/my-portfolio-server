import { Types } from "mongoose"

export type TMessages =  {
  _id: Types.ObjectId;
  name: string;
  email: string;
  message: string;
  createdAt: NativeDate
  updatedAt: NativeDate
}
