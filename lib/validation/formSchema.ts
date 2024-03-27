import * as z from "zod"

export const contactValidation = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(30, {
      message: "Name must not be longer than 30 characters.",
    }),
  email: z.string().email("Please enter a valid email address."),
  message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(160, {
      message: "Message must not be longer than 160 characters.",
    }),
})

export const newsletterValidation = z.object({
  email: z.string().email("Please enter a valid email address."),
})

export const guestbookValidation = z.object({
  message: z
    .string()
    .trim()
    .min(1, {
      message: "This input is required.",
    })
    .max(120, {
      message: "Message must not be longer than 120 characters.",
    }),
})

export const contactCardValidation = z.object({
  email: z.string().trim().email("Please enter a valid email address."),
  message: z
    .string()
    .trim()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(160, {
      message: "Message must not be longer than 160 characters.",
    }),
})
