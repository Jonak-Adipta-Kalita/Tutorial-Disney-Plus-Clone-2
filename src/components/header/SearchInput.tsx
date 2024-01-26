"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";

const formSchema = z.object({
  input: z.string().min(2).max(50),
});

const SearchInput = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          router.push(`/search/${data.input}`);
          form.reset();
        })}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="input"
          render={({ field }) => (
            <FormItem>
              <Input placeholder="Search..." {...field} />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default SearchInput;
