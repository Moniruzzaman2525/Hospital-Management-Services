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