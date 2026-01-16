import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema } from "@/lib/schemas";
import { useContact } from "@/hooks/use-contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, MapPin, Phone } from "lucide-react";
import { z } from "zod";

export default function Contact() {
  const mutation = useContact();
  
  const form = useForm<z.infer<typeof insertContactSchema>>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof insertContactSchema>) {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  }

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        <div className="bg-slate-50 py-16 border-b border-slate-200">
          <div className="container-custom text-center">
            <h1 className="text-4xl font-bold text-foreground font-heading">Contact Us</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? We'd love to hear from you.
            </p>
          </div>
        </div>

        <div className="container-custom py-20">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-6 font-heading text-primary">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 text-primary">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Visit Us</p>
                      <p className="text-muted-foreground text-sm">
                        Chandigarh University<br/>
                        Lucknow-Kanpur Highway-27,<br/>
                        Unnao, Uttar Pradesh, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 text-primary">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email Us</p>
                      <a href="mailto:ieee@cumail.in" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                        ieee@cumail.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 text-primary">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Call Us</p>
                      <p className="text-muted-foreground text-sm">
                        +91 96460 01222
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-100 p-6 rounded-xl">
                <h4 className="font-semibold mb-2">Office Hours</h4>
                <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-sm text-muted-foreground">Saturday: 10:00 AM - 2:00 PM</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-6 font-heading">Send a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} />
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
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="yourname@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="What is this regarding?" {...field} />
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
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Write your message here..." 
                            className="min-h-[150px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white h-11"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
