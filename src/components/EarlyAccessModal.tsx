import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { motion } from "framer-motion";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
});

interface EarlyAccessModalProps {
    children: React.ReactNode;
}

const EarlyAccessModal = ({ children }: EarlyAccessModalProps) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast.success("thankyou for choosing rivinity, you will be given access soon");
        form.reset();
    }

    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white/80 backdrop-blur-2xl border-white/40 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.3)] text-foreground overflow-hidden rounded-[2rem]">
                {/* Pronounced Glass highlight glare */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent pointer-events-none" />

                <DialogHeader className="relative z-10 pt-4">
                    <DialogTitle className="text-3xl font-heading font-bold text-center mb-2">
                        Get Early Access
                    </DialogTitle>
                    <p className="text-muted-foreground/70 text-center text-sm">
                        Join the future of India's AI. Fill in your details below.
                    </p>
                </DialogHeader>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6 mt-4 relative z-10"
                    >
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-black text-xs uppercase tracking-wider font-semibold">Full Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter your name"
                                            className="bg-black/5 border-black/5 focus:bg-white/50 focus:border-primary/40 transition-all h-12 rounded-xl text-foreground placeholder:text-muted-foreground/40"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-foreground/70" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-black text-xs uppercase tracking-wider font-semibold">Email Address</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="name@example.com"
                                            className="bg-black/5 border-black/5 focus:bg-white/50 focus:border-primary/40 transition-all h-12 rounded-xl text-foreground placeholder:text-muted-foreground/40"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-foreground/70" />
                                </FormItem>
                            )}
                        />
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="pt-2"
                        >
                            <Button
                                type="submit"
                                className="w-full h-12 text-lg font-heading font-bold bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all shadow-lg shadow-primary/20"
                            >
                                Submit
                            </Button>
                        </motion.div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default EarlyAccessModal;
