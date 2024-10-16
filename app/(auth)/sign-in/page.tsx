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
import { useRouter } from "next/navigation";
import { account } from "@/lib/actions/client.action";


const userSchema = z.object({
  email: z.string().min(2).max(50),
  username: z.string().min(2).max(50),
  password: z.string().max(200),
});

const SignInPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  const onSubmit = async ({
    email,
    username,
    password,
  }: z.infer<typeof userSchema>) => {
    const data = {
      email,
      username,
      password,
    };

    setIsLoading(true);
    const newUser = await createUser(data);

    if (!newUser) throw new Error("Create User failed");

    const session = await account.createEmailPasswordSession(email, password);

    console.log(session);
    

    setIsLoading(false);

    form.reset();
    router.push("/");
  };
  return (
    <Card className="w-[300px] h-fit p-6 drop-shadow-lg">
      <Form {...form}>
        <h2 className="text-center font-semibold font-sans text-3xl mb-4">
          Sign In
        </h2>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Userame</FormLabel>
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

export default SignInPage;
