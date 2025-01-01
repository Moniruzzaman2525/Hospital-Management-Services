import { Router } from "express";
import { UserRoutes } from "../modules/user/user.routes";
import { staffRouter } from "../modules/staff/staff.routes";
import { patientRouter } from "../modules/patient/patient.routes";
import { doctorRouter } from "../modules/doctor/doctor.routes";
import { adminRouter } from "../modules/admin/admin.routes";


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
    {
        path: '/patient',
        route: patientRouter
    },
    {
        path: '/doctor',
        route: doctorRouter
    },
    {
        path: '/admin',
        route: adminRouter
    },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))


export default router