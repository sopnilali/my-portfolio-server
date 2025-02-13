import { model, Schema, Types } from "mongoose";
import { TBlogContent } from "./blog.interface";


const blogSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    publish_date: {
        type: String,
        required: true,
    },
    author_name: {
        type: String,
        required: true,
    }, 
    blog_image: {
        type: String,
        required: true,
    },
    total_likes: {
        type: String,
        required: true,
    },
}, { timestamps: true }
)


const Blog = model<TBlogContent>('blogs', blogSchema)

export default Blog;