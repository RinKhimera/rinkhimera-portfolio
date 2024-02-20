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
import { signOut } from "next-auth/react"
import { revalidatePath } from "next/cache"
import { useTransition } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const GuestBookForm = () => {
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof guestbookValidation>>({
    resolver: zodResolver(guestbookValidation),
    defaultValues: {
      message: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof guestbookValidation>) => {
    startTransition(() => {
      addSignature(values)
      // revalidatePath("/guestbook")
    })
  }

  return (
    <div>
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
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Sign</Button>
        </form>
      </Form>
    </div>
  )
}

export default GuestBookForm
