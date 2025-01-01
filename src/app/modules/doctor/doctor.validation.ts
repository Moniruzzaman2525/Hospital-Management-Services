import { z } from "zod";
import { contactInfoValidation } from "../../interface/contactInfo";

export const doctorAvailability = z.object({
    days: z.string(),
    timeSlot: z.object({
        start: z.string(),
        end: z.string()
    })
})

export const createDoctorValidationSchema = z.object({
    body: z.object({
        password: z.string().max(20),
        doctor: z.object({
            id: z.string().optional(),
            name: z.string(),
            email: z.string(),
            image: z.string().optional(),
            dateOfBirth: z.string(),
            gender: z.enum(['Male', 'Female']),
            specialization: z.string(),
            contactInfo: contactInfoValidation,
            availability: doctorAvailability,
            bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).optional()
        })
    })
})
export const updateDoctorValidationSchema = z.object({
    body: z.object({
        doctor: z.object({
            id: z.string().optional(),
            name: z.string().optional(),
            email: z.string().optional(),
            image: z.string().optional(),
            dateOfBirth: z.string().optional(),
            gender: z.enum(['Male', 'Female']).optional(),
            specialization: z.string().optional(),
            contactInfo: contactInfoValidation.optional(),
            availability: doctorAvailability.optional(),
            bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).optional()
        })
    })
})