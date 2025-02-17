import { z } from "zod";
import { contactInfoValidation } from "../../interface/contactInfo";
import { medicalHistoryValidation } from "../../interface/medicalHistory";



export const createPatientValidationSchema = z.object({
    body: z.object({
        password: z.string().max(20),
        patient: z.object({
            id: z.string().optional(),
            name: z.string(),
            dateOfBirth: z.string(),
            gender: z.string(),
            email: z.string(),
            image: z.string().optional(),
            contactInfo: contactInfoValidation,
            medicalHistory: medicalHistoryValidation,
            bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        })
    })
})
export const updatePatientValidationSchema = z.object({
    body: z.object({
        patient: z.object({
            id: z.string().optional(),
            name: z.string().optional(),
            dateOfBirth: z.string().optional(),
            gender: z.string().optional(),
            email: z.string().optional(),
            image: z.string().optional(),
            contactInfo: contactInfoValidation.optional(),
            medicalHistory: medicalHistoryValidation.optional(),
            bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        })
    })
})