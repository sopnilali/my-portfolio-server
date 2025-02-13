import { Router } from "express";
import { blogRoutes } from "../modules/blog/blog.router";
import { projectRoutes } from "../modules/project/project.router";
import { messageRoutes } from "../modules/message/message.router";

const router = Router();

const moduleRoutes = [
    {
        path: "/blogs",
        routes: blogRoutes
    },
    {
        path: "/projects",
        routes: projectRoutes
    },
    {
        path: "/messages",
        routes: messageRoutes
    }
]

moduleRoutes.forEach(({ path, routes }) => {
    router.use(path, routes);
});

export default router;