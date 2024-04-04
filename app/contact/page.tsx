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
import { contactValidation } from "@/lib/validation/formSchema"
import emailjs from "@emailjs/browser"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion } from "framer-motion"
import { Loader2, Send } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"

const Contact = () => {
  const [submitting, setSubmitting] = useState(false)

  const form = useForm<z.infer<typeof contactValidation>>({
    resolver: zodResolver(contactValidation),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof contactValidation>) => {
    console.log(values)
    setSubmitting(true)
    try {
<<<<<<< HEAD
      const resp = await fetch("http://localhost:3000/api/deposit", {
        method: "POST",
      })

      const data = await resp.json()
      console.log(data.data)
    } catch (error) {
      console.error(error)
=======
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
>>>>>>> parent of 58744c3 (Update page.tsx)
    }
  }

  return (
    <motion.div
      className="mt-10 min-h-full sm:mt-16 lg:mt-20"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Let&apos;s <span className="text-primary">connect</span> and discuss
          your project ideas.
        </h1>

        <p className="mt-6 text-base leading-loose text-zinc-600 dark:text-zinc-400">
          Innovation starts with a conversation. Share your project, and
          let&apos;s create something extraordinary.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="mt-8 max-w-2xl">
          <CardHeader>
            <CardTitle className="text-primary">Information Details</CardTitle>
            <CardDescription>
              Every project has a story. Let&apos;s write yours together!
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-3"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
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
                        <Input placeholder="email@domain.xyz" {...field} />
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
                          placeholder="Tell me a little bit about yourself"
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
                  <Button type="submit">
                    <Send className="mr-2" size={16} />
                    Send
                  </Button>
                )}
              </form>
            </Form>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

export default Contact
