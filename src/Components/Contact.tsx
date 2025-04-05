import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Datasaur from "/src/Assets/Datasaur.png";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "./UI/form";
import { Input } from "./UI/input";
import Button from "./Button";
import { Textarea } from "./UI/textarea";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  company: z.string().optional(),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  });
  const onSubmit = (data: z.infer<typeof formSchema>) => console.log(data);

  return (
    <div
      className="flex sm:p-14 lg:p-24 p-4 pb-0 min-h-[80vh] w-full sm:gap-[10vw] flex-wrap mt-[10vw]"
      id="contact"
    >
      <div className="flex-1 flex flex-col justify-center items-center gap-10 min-w-[300px]">
        <div className="flex flex-col text-white">
          <h3 className="text-[clamp(16px,2.5vw,25px)]">WANT TO LEARN MORE?</h3>
          <h2 className="text-[clamp(32px,5vw,50px)] font-bold">CONTACT US</h2>
          <p className="hidden sm:inline-block">
            Get in touch with us regarding blah blah we are so cool you will
            love being in our club, i think by the time you are here you would
            get a direct offer from amazon.
          </p>
        </div>
        <img
          src={Datasaur}
          alt="Datasaur"
          className="w-1/2 hidden sm:inline-block"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center min-w-[300px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Name</FormLabel>
                  <FormControl>
                    <Input className="text-white" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Company</FormLabel>
                  <FormControl>
                    <Input className="text-white" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Email</FormLabel>
                  <FormControl>
                    <Input className="text-white" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Message</FormLabel>
                  <FormControl>
                    <Textarea className="text-white" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button contents="Submit" onclick={form.handleSubmit(onSubmit)} />
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
