import { z } from "zod";
import { contactInfoValidation } from "../../interface/contactInfo";



export const createAdminValidationSchema = z.object({
    body: z.object({
        password: z.string().max(20),
        admin: z.object({
            id: z.string().optional(),
            name: z.string(),
            email: z.string(),
            image: z.string().optional(),
            dateOfBirth: z.string(),
            gender: z.enum(['Male', 'Female']),
            contactInfo: contactInfoValidation,
            bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).optional()
        })
    })
})