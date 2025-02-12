import { Types } from "mongoose"

export interface TProjectInterface {
  _id: Types.ObjectId;
  title: string;
  descriptions: string;
  projecttools: string;
  image: string;
  githubfrontend: string;
  livelink: string;
  githubbackend: string;
  projectduration: string;
  projectstatus: string;
  createdAt: NativeDate
  updatedAt: NativeDate
}
