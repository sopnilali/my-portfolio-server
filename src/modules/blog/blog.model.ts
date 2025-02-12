import { model, Schema } from "mongoose";
import { TBlogContent } from "./blog.interface";


const blogSchema = new Schema({
    blogtitle: {
        type: String,
        required: true,
    },
    blogImage:{
        type: String,
        required: true,
    },
    blogContent: {
        type: String,
        required: true,
    },
    blogAuthor: {
        type: String,
    },
    isPublished: {
        type: Boolean,
        default: true
    },
}, { timestamps: true }
)


const Blog = model<TBlogContent>('blogs', blogSchema)

export default Blog;