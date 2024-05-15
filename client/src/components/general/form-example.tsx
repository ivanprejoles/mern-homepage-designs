import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import axios, {AxiosResponse} from 'axios'

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

const formSchema = z.object({
    example: z.string().min(1, {
        message: 'Server name is required.'
    }),
    example2: z.string().min(1, {
        message: 'Server name is required.'
    }),
})

export function FormExample() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
        example: '',
        example2: ''
    }
  })

  const loading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await axios.post('/api/user/example', values)
        .then((response: AxiosResponse) => {
            console.log(response)
        })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="example"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                    disabled={loading}
                    placeholder='Enter template name here'
                    className='bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0'
                    {...field}
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="example2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                    disabled={loading}
                    placeholder='Enter template name here'
                    className='bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0'
                    {...field}
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button 
            type="submit"
            disabled={loading}
        >
            Submit
        </Button>
      </form>
    </Form>
  )
}
