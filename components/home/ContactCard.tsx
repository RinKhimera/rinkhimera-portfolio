"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ToastAction } from "@/components/ui/toast"
import { toast } from "@/components/ui/use-toast"
import { contactCardValidation } from "@/lib/validation/formSchema"
import emogirls from "@/public/assets/images/emo-girls.jpg"
import emailjs from "@emailjs/browser"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, Send } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

export const ContactCard = () => {
  const [submitting, setSubmitting] = useState(false)

  const form = useForm<z.infer<typeof contactCardValidation>>({
    resolver: zodResolver(contactCardValidation),
    defaultValues: {
      email: "",
      message: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof contactCardValidation>) => {
    console.log(values)
    setSubmitting(true)
    try {
      const response = await emailjs.send(
        "service_iv2dsuu",
        "template_a1d1u5b",
        values,
        "lP_ZVVq19Vu28zuwB",
      )

      toast({
        title: "Message Delivered",
        description:
          "We've received your message. You'll hear from us shortly. Thanks for contacting us!",
        action: <ToastAction altText="Close">Close</ToastAction>,
      })

      form.reset()
      console.log("Success !!", response)
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Oops! Something went wrong.",
        description:
          "We encountered a problem while submitting your information. Please check your network connection and try again.",
        action: <ToastAction altText="Dismiss">Dismiss</ToastAction>,
      })

      console.error("Failed !!!", error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Card className="relative h-full">
      {/* Background image */}
      <Image
        src={emogirls}
        alt="Cute emo girls"
        priority={true}
        placeholder="blur"
        className="absolute inset-0 z-10 h-full rounded-lg object-cover brightness-[0.4]"
      />

      {/* Card content */}
      <CardContent className="relative z-20 h-full px-4 py-2 text-zinc-200">
        <div className="mb-1 truncate text-2xl font-medium tracking-tight">
          Leave me a{" "}
          <span className="underline decoration-primary decoration-4 underline-offset-4">
            message!
          </span>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-3 max-sm:space-y-1"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="max-sm:space-y-0">
                  {/* Conditionally render FormLabel */}
                  {form.formState.errors.email ? (
                    <FormMessage className="truncate text-zinc-200" />
                  ) : (
                    <>
                      <FormLabel>Email</FormLabel>
                    </>
                  )}
                  <FormControl>
                    <Input
                      className="border border-neutral-700 bg-neutral-900/50 ring-offset-neutral-900 placeholder:text-zinc-400"
                      placeholder="email@domain.xyz"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="max-sm:space-y-0 max-sm:pb-2">
                  {/* Conditionally render FormLabel */}
                  {form.formState.errors.message ? (
                    <FormMessage className="truncate text-zinc-200" />
                  ) : (
                    <>
                      <FormLabel>Message</FormLabel>
                    </>
                  )}
                  <FormControl>
                    <Textarea
                      className="resize-none border border-neutral-700 bg-neutral-900/50 ring-offset-neutral-900 placeholder:text-zinc-400"
                      placeholder="Type your message here."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {submitting ? (
              <Button disabled>
                <Loader2 className="mr-2 size-6 animate-spin" />
                <span className="text-xl">Please wait</span>
              </Button>
            ) : (
              <Button type="submit">
                <Send className="mr-2" size={20} />
                <span className="text-xl">Send</span>
              </Button>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
