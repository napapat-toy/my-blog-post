"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { createUser } from "@/lib/actions/user.action";

const userSchema = z.object({
  username: z.string().min(2).max(50),
  name: z.string().min(2).max(50),
  password: z.string().max(200),
});

const PostForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      username: "",
      name: "",
      password: "",
    },
  });

  const onSubmit = async ({
    username,
    name,
    password,
  }: z.infer<typeof userSchema>) => {
    const data = {
      username,
      name,
      password,
    };

    setIsLoading(true);
    await createUser(data);
    setIsLoading(false);

    form.reset();
  };
  return (
    <Card className="w-[300px] h-fit p-6 drop-shadow-lg lg:self-start">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-800 hover:bg-blue-700"
          >
            {isLoading ? "Creating..." : "Create User"}
          </Button>
        </form>
      </Form>
    </Card>
  );
};

export default PostForm;
