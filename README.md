# 🎉 Welcome to My Stationary Shop !!
<h2>Stationary Shop API</h2>
<p>Assalamu Alaikum! My Name is Md Abdul Adud. Project Name: My Portfolio. I am Develop an Express application with TypeScript, integrating MongoDB with Mongoose to manage a Portfolio.</p>

<h2>Project Name: Portfolio and Blog</h2>

<strong>GitHub Repository Link</strong> : https://github.com/sopnilali/stationery-shop-server

 <strong>Live: URL</strong> : https://stationery-shop-server.vercel.app/

<h2>Technology Used ⚙️</h2>
<li>Node</li>
<li>Express</li>
<li>React</li>
<li>Mongoose</li>
<li>TypeScript</li>

# Folder Structure 📂
<p>I organized the project by creating this folder structure. The folders here are project and blog. All of them are crated in different files, so that they can be controlled and handled very easily.</p>

<pre>
src/
├── modules/
│   ├── blog/
│   │   ├── blog.constant.ts
│   │   ├── blog.controller.ts
│   │   ├── blog.interface.ts
│   │   ├── blog.model.ts
│   │   ├── blog.router.ts
│   │   ├── blog.service.ts
│   ├── project/
│   │   ├── project.controller.ts
│   │   ├── project.interface.ts
│   │   ├── project.model.ts
│   │   ├── project.router.ts
│   │   ├── project.service.ts
├── app.ts
├── server.ts
</pre>

# Project Model 🚟
<pre>
    title: {
      type: String,
      required: true,

    },
   descriptions: {
      type: String,
      required: true,
    },
    projecttools: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    githubfrontend: {
      type: String,
      required: true,
    },
    livelink: {
      type: String,
      required: true,
    },
    githubbackend: {
      type: String,
      required: true,
    },
    projectduration: {
      type: String,
      required: true,
    },
    projectstatus: {
      type: String,
      required: true,
    }
</pre>
 
# Blog Model 🚟
<p> I created the order model.</p>
<pre>
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
</pre>


# Features of Products ⚡
<li>Create Project</li>
<li>Get All Project</li>
<li>Update Project. To update Project, you need to Project the Project using Projectid.</li>
<li>Delete Projects. To delete Projects, you need to delete the Project using Projectid.</li>

# Features of Blog 🕎
<li>Create Blog from user</li>
<li>Get All Blog</li>
<li>Update Blog. To update Blog, you need to update the blog using blogid.</li>
<li>Delete blogs. To delete blogs, you need to delete the blog using blogid.</li>

# Error Handling ⚠️
<li>I am implement error handling for invalid input, missing data, invalid email and insufficient stock.</li>
<pre>
  {
    "success": false,
    "message": "Validation Error",
    "errorSources": [
        {
            "path": "blogImage",
            "message": "Path `blogImage` is required."
        }
    ],
    "err": {
        "errors": {
            "blogImage": {
                "name": "ValidatorError",
                "message": "Path `blogImage` is required.",
                "properties": {
                    "message": "Path `blogImage` is required.",
                    "type": "required",
                    "path": "blogImage"
                },
                "kind": "required",
                "path": "blogImage"
            }
        },
        "_message": "blogs validation failed",
        "name": "ValidationError",
        "message": "blogs validation failed: blogImage: Path `blogImage` is required."
    }
}
</pre>
<li><strong>Not Found:</strong> If you hit a wrong route, it will send a message and tell you your status, and which route you hit. </li>
<pre>
{
    "success": false,
    "message": "API Not Found /api/v2/mylove",
    "error": "Error: API Not Found /api/v2/mylove\n ...."
}
</pre>

# Thanks you Sir/Mam 💕




