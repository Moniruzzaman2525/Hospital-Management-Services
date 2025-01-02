import { z } from "zod"

export const createServicesValidationSchema = z.object({
    body: z.object({
        services: z.object({
            id: z.string().optional(),
            servicesName: z.string(),
            description: z.string(),
            cost: z.string(),
            image: z.string().optional()
        })
    })
})
 
export const updateServicesValidationSchema = z.object({
    body: z.object({
        services: z.object({
            id: z.string().optional(),
            servicesName: z.string().optional(),
            description: z.string().optional(),
            cost: z.string().optional(),
            image: z.string().optional()
        })
    })
})
 