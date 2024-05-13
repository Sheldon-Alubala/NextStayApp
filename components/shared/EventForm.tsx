"use client"

import {zodResolver} from "@hookform/resolver/zod"
import {useForm} from "react-hook-form"
import * as z from "zod"

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters."
    }),
})
type EventFormProps = {
    userId: string,
    type: "create" | "update"
}

function EventForm({userId, type}: EventFormProps) {
    const form = useForm<z.infer<typeof formSchema>>({
        resover: zodResolver(formSchema),
        defaultValues: {
            username:""
        },
    })

    //Define on submit handler
    function onSubmit (values: z.infer<typeof formSchema>) {
        //do something with the form values
        //this will be type safe and validated
        console.log(values)
    }
  return (
    <div>EventForm</div>
  )
}

export default EventForm