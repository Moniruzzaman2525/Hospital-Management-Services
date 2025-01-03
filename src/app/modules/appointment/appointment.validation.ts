import { z } from "zod";

export const bookAppointmentValidationSchema = z.object({
    body: z.object({
        appointment: z.object({
            id: z.string().optional(),
            time: z.string(),
            reason: z.string(),
            const: z.string(),
            doctor: z.string(),
            patient: z.string(),
            specialization: z.string(),
        })
    })
})