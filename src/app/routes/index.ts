import { Router } from "express";
import { UserRoutes } from "../modules/user/user.routes";
import { staffRouter } from "../modules/staff/staff.routes";


const router = Router()

const moduleRoutes = [
    {
        path: '/user',
        route: UserRoutes
    },
    {
        path: '/staff',
        route: staffRouter
    },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))


export default router