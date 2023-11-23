"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import { Textarea } from "@/components/ui/textarea"
import { ToastAction } from "@/components/ui/toast"
import { toast } from "@/components/ui/use-toast"
import { formSchema } from "@/lib/validation/formSchema"
import emailjs from "@emailjs/browser"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"

const Contact = () => {
  const [submitting, setSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
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
    <div className="mt-10 min-h-full sm:mt-16 lg:mt-20">
      <div className="max-w-2xl">
        <p className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Let&apos;s <span className="text-primary">connect</span> and discuss
          your project ideas.
        </p>
        <p className="mt-6 text-base leading-loose text-zinc-600 dark:text-zinc-400">
          Ready to bring your ideas to life with my full-stack skills.
        </p>
      </div>

      <Card className="mt-8 max-w-2xl">
        <CardHeader>
          <CardTitle>Information Details</CardTitle>
          <CardDescription>
            Your message is the first step to a great collaboration.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John Doe"
                        disabled={submitting}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />

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

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us a little bit about yourself"
                        disabled
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              {submitting ? (
                <Button disabled>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
              ) : (
                <Button type="submit">Submit</Button>
              )}
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Contact
