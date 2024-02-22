"use client"

import { Button } from "@/components/ui/button"
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
import { addSignature } from "@/lib/actions/action"
import { guestbookValidation } from "@/lib/validation/formSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, PenLine } from "lucide-react"
import { useTransition } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const GuestForm = () => {
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof guestbookValidation>>({
    resolver: zodResolver(guestbookValidation),
    defaultValues: {
      message: "",
    },
  })

  const onSubmit = (values: z.infer<typeof guestbookValidation>) => {
    startTransition(() => {
      addSignature(values)
      form.reset()
    })
  }

  return (
    <div className="mb-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sign my guestbook</FormLabel>
                <FormControl>
                  <Input placeholder="Your message..." {...field} />
                </FormControl>
                <FormDescription>Leave a lasting impression!</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </>
            ) : (
              <>
                <PenLine className="mr-2" size={20} />
                Sign
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default GuestForm
