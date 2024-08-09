"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import HeaderTitle from "./HeaderTitle";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { toast } from "@/components/ui/use-toast"

const FormSchema = z.object({
  pin: z.string().min(4, {
    message: "Your one-time password must be 4 characters.",
  }),
});

export default function Verify() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  // function onSubmit(data: z.infer<typeof FormSchema>) {
  //   toast({
  //     title: "You submitted the following values:",
  //     description: (
  //       <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
  //         <code className="text-white">{JSON.stringify(data, null, 2)}</code>
  //       </pre>
  //     ),
  //   })
    
  // }
  const getUrl = window.location.href;
  const url = new URL(getUrl);
  const getEmail = url.searchParams.get("email");

  const router = useRouter(); 
  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const email = getEmail; 
  
    try {
      const res = await fetch("https://akil-backend.onrender.com/verify-email", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          OTP: data.pin, 
          email: email,  
        }),
      });
  
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`); 
      }
  
      const user = await res.json();
  
      if (user) {
        Swal.fire("Success", "Email verified successfully", "success");
        console.log("User verified successfully");
        router.push("/auth/login"); 
      } else {
        Swal.fire("Error", "Invalid OTP", "error");
        console.log("Error verifying user");
      }
    } catch (error) {

      console.error("Error occurred during verification:", error);
    }
  
  };

  return (
    <div className="flex flex-col gap-6 pt-24 pb-24 px-8 mx-auto my-auto max-w-lg bg-white rounded-lg shadow-md">
      {/* Header Title */}
      <HeaderTitle title="Verify Email" />
      <p className="text-gray-600 font-normal text-sm">
        We've sent a verification code to the email address you provided. To
        complete the verification process, please enter the code here.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputOTP maxLength={4} {...field}>
                    <InputOTPGroup>
                      <div className="flex gap-[35px] justify-center pt-8 pl-4">
                        <InputOTPSlot
                          className="text-[#D6DDEB] text-[34px] border-2 border-[#4540de83] w-[76px] h-12 text-center rounded-md bg-[#F8F8FD]"
                          index={0}
                        />
                        <InputOTPSlot
                          className="text-[#D6DDEB] text-[34px] border-2 border-[#4540de83] w-[76px] h-12 text-center rounded-md bg-[#F8F8FD]"
                          index={1}
                        />
                        <InputOTPSlot
                          className="text-[#D6DDEB] text-[34px] border-2 border-[#4540de83] w-[76px] h-12 text-center rounded-md bg-[#F8F8FD]"
                          index={2}
                        />
                        <InputOTPSlot
                          className="text-[#D6DDEB] text-[34px] border-2 border-[#4540de83] w-[76px] h-12 text-center rounded-md bg-[#F8F8FD]"
                          index={3}
                        />
                      </div>
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Resend Code Timer */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-center mt-4">
              <p>
                You can Request to {" "}
                <Link href="/" className="text-blue-600 font-semibold">
                  Resend code
                </Link>
                {" "}
                in
              </p>
              <h3 className="text-blue-600 font-semibold text-sm">00:59</h3>
            </div>

            {/* Continue Button */}
            <div className="flex justify-center pt-6"> 
            <Button
              className="btn bg-[#4640DE] rounded-3xl w-full text-white font-Epilogue font-bold"
              type="submit"
            >
              Continue
            </Button>
            </div>
          </div>
        </form>
      </Form>
      <div />
    </div>
  );
}
