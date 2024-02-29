"use client"

import { MotionDiv } from "@/components/MotionFragment"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ToastAction } from "@/components/ui/toast"
import { toast } from "@/components/ui/use-toast"
import { newsletterValidation } from "@/lib/validation/formSchema"
import emailjs from "@emailjs/browser"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, Mail, Send } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"

const NewsletterCard = () => {
  const [submitting, setSubmitting] = useState(false)

  const form = useForm<z.infer<typeof newsletterValidation>>({
    resolver: zodResolver(newsletterValidation),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof newsletterValidation>) => {
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
        action: <ToastAction altText="Hooray">Hooray!</ToastAction>,
      })
      form.reset()
      console.log("Success !!", response)
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Oops! Something went wrong.",
        description:
          "We encountered a problem while submitting your information. Please check your network connection and try again.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
      console.error("Failed !!!", error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <MotionDiv
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ margin: "-100px", once: true }}
      transition={{ duration: 0.25 }}
    >
      <Card className="max-w-2xl bg-zinc-50 p-6 transition hover:bg-zinc-100 dark:bg-zinc-800/50 dark:hover:bg-zinc-700/50">
        <CardHeader className="p-1">
          <CardTitle className="flex items-center font-semibold text-zinc-900 dark:text-zinc-100 max-sm:text-lg">
            <Mail />
            <span className="ml-3">Stay up to date</span>
          </CardTitle>

          <CardDescription className="text-base leading-tight tracking-tight max-sm:text-sm">
            Get notified when I publish something new.
          </CardDescription>
        </CardHeader>

        <CardContent className="p-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="email@domain.xyz"
                        disabled
                        {...field}
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />

              {submitting ? (
                <Button className="mt-1 h-9 w-full text-base" disabled>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
              ) : (
                <Button
                  className="mt-1 h-9 w-full bg-primary/90 text-base transition-colors hover:bg-primary"
                  type="submit"
                >
                  <Send className="mr-2" size={16} />
                  Join
                </Button>
              )}
            </form>
          </Form>
        </CardContent>
      </Card>
    </MotionDiv>
  )
}

export default NewsletterCard
