"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blog_router_1 = require("../modules/blog/blog.router");
const project_router_1 = require("../modules/project/project.router");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/blogs",
        routes: blog_router_1.blogRoutes
    },
    {
        path: "/projects",
        routes: project_router_1.projectRoutes
    }
];
moduleRoutes.forEach(({ path, routes }) => {
    router.use(path, routes);
});
exports.default = router;
