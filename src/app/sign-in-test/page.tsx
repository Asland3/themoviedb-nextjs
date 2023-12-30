"use client";

import React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSumbit = () => {
    console.log(form.getValues());
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSumbit)}>
          <FormField></FormField>
        </form>
      </Form>
    </div>
  );
}

export default Page;
