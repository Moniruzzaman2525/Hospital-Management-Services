import { z } from "zod";
import { contactInfoValidation } from "../../interface/contactInfo";



export const createStaffValidationSchema = z.object({
    body: z.object({
        password: z.string().max(20),
        staff: z.object({
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
export const updateStaffValidationSchema = z.object({
    body: z.object({
        staff: z.object({
            id: z.string().optional(),
            name: z.string().optional(),
            email: z.string().optional(),
            image: z.string().optional(),
            dateOfBirth: z.string().optional(),
            gender: z.enum(['Male', 'Female']).optional(),
            contactInfo: contactInfoValidation.optional(),
            bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).optional()
        })
    })
})