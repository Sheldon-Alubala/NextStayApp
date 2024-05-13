"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
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
import { eventFormSchema } from "@/lib/validator"
import * as z from "zod"
import { eventDefaultValues } from "@/constants"
import DropDown from "./DropDown"
import { Textarea } from "@/components/ui/textarea"
import {FileUploader} from "./FileUploader"
import { useState } from "react"
import Image from "next/image"




type EventFormProps = {
    userId: string,
    type: "create" | "update"
}

function EventForm({userId, type}: EventFormProps) {

    const [files, setFiles] = useState<File[]>([])

    const initialValues = eventDefaultValues;
    const form = useForm<z.infer<typeof eventFormSchema>>({
        resolver: zodResolver(eventFormSchema),
        defaultValues: initialValues
      })

    //Define on submit handler
    function onSubmit (values: z.infer<typeof eventFormSchema>) {
        //do something with the form values
        //this will be type safe and validated
        console.log(values)
    }
  return (
  <Form {...form}>
<form onSubmit={form.handleSubmit(onSubmit)}
className="flex flex-col gap-5"
>
    <div className="flex flex-col gap-5 md:flex-row">
    <FormField
  control={form.control}
  name="title"
  render={({ field }) => (
    <FormItem className="w-full">
      <FormControl>
        <Input placeholder="space title" {...field} className="input-field"/>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
<FormField
  control={form.control}
  name="categoryId"
  render={({ field }) => (
    <FormItem className="w-full">
      <FormControl>
        <DropDown onChangeHandler={field.onChange} value={field.value}/>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
    </div>
    <div className="flex flex-col gap-5 md:flex-row">
    <FormField
  control={form.control}
  name="description"
  render={({ field }) => (
    <FormItem className="w-full">
      <FormControl className="h-72">
        <Textarea placeholder="Description" {...field} className="textarea rounded-2xl"/>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
<FormField
  control={form.control}
  name="imageUrl"
  render={({ field }) => (
    <FormItem className="w-full">
      <FormControl className="h-72">
        <FileUploader
        onFieldChange={field.onChange}
        imageUrl={field.value}
        setFiles={setFiles}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
    </div>
    <div className="flex flex-col gap-5 md:flex-row">
    <FormField
  control={form.control}
  name="location"
  render={({ field }) => (
    <FormItem className="w-full">
      <FormControl>
        <div className="flex-center h-[54px] w-full overflow-hidden
         rounded-full bg-grey-50 px-4 py-2">
            <Image
            src="/assets/icons/location-grey.svg"
            alt="calender"
            width={24}
            height={24}
            />
            <Input placeholder="space location" {...field} className="input-field"/>
        </div>
        <DropDown onChangeHandler={field.onChange} value={field.value}/>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

    </div>
    <div className="flex flex-col gap-5 md:flex-row">
    <FormField
  control={form.control}
  name="startDateTime"
  render={({ field }) => (
    <FormItem className="w-full">
      <FormControl>
        <div className="flex-center h-[54px] w-full overflow-hidden
         rounded-full bg-grey-50 px-4 py-2">
            <Image
            src="/assets/icons/calender.svg"
            alt="calender"
            width={24}
            height={24}
            className="filter-grey"
            />
            <p className="ml-3 whitespace-nowrap text-grey-600">Listed on</p>
           
        </div>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

    </div>
    


<Button type="submit">Submit</Button>
</form>
</Form>

  )
}

export default EventForm