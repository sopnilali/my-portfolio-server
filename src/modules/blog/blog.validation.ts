import { z } from "zod";

const createblogContentValidationSchema = z.object({
  blogtitle: z.string(),
  blogImage: z.string(),
  blogContent: z.string(),
  blogAuthor: z.string(),

  });

  const updateblogContentValidationSchema = z.object({
    blogtitle: z.string().optional(),
    blogImage: z.string().optional(),
    blogContent: z.string().optional(),
    blogAuthor: z.string().optional(),
  });  

export const blogContentValidationSchema = {
    createblogContentValidationSchema,
    updateblogContentValidationSchema

}