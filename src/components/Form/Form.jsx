import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "react-toastify";
// import OTPInput from "react-otp-input";


function FormAdmission() {

  function gtag_report_conversion() {
    return new Promise((resolve) => {
      const callback = () => {
        resolve();
      };
      
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-833858299/E6YqCM7-iJIaEPvVzo0D',
          'event_callback': callback
        });
      } else {
        resolve();
      }
    });
  }

  const [isSubmitting, setIsSubmitting] = useState(false);
  // const [showOtpField, setShowOtpField] = useState(false);
  // const [otp, setOtp] = useState("");
  // const [isVerified, setIsVerified] = useState(false);
  // const [countdown, setCountdown] = useState(0);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      class: "",
      terms_and_conditions: false,
    },
  });

  const navigate = useNavigate();

  // Handle phone number input change
  // const handlePhoneChange = (e) => {
  //   const value = e.target.value
  //   // Show send OTP button only when 10 digits are entered
  //   setShowOtpField(value.length === 10);
  // }

  // Send OTP
  // const sendOtp = async() => {
  //   try {
  //     const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/send-otp`, {
  //       method: "POST",
  //       body: JSON.stringify({ phone: form.getValues("phone") }),
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //     })
  //     if (response.ok) {
  //       setCountdown(60);
  //     }
  //   } catch (error) {
  //     console.error("Error sending OTP: ",error);
  //   }
  // };

  // Verify OTP
  // const verifyOtp = async() => {
  //   try {
  //     const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/verify-otp`, {
  //       method: "POST",
  //       body: JSON.stringify({
  //         phone: form.getValues("phone"),
  //         otp
  //       }),
  //       headers: {
  //         "Content-Type": "application/json"
  //       }
  //     })

  //     const data = await response.json();
  //     setIsVerified(data.verified)
  //   } catch (error) {
  //     console.error("Error verifying OTP: ",error);

  //   }
  // };

  // Countdown timer
  // useEffect(() => {
  //   countdown > 0 && setTimeout(() => setCountdown(countdown - 1), 1000);
  // }, [countdown])

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {

        // Push the form submission event to dataLayer
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          'event': "form_submission",
          'formId': "admission_form",
        });
        
        toast.success("Message sent Successfully");

        await gtag_report_conversion();

        form.reset();

        navigate("/thankyou");
      } else {
        toast.error(result.message || "Failed to send message");
      }
    } catch (error) {
      toast.error(error.message || "Internal Server Error, Please try again!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className=" w-[380px] lg:w-[330px] xl:w-[380px] overflow-hidden space-y-8 bg-[rgba(255,255,255,0.2)] backdrop-blur-lg  rounded-lg">
      <h2 className=" text-2xl text-center font-bold text-white my-4">
        Admission Form <br />
        for <span className=" text-blue">2025-26</span>
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="  px-6 pb-6 rounded-lg  m-0"
        >
          <input
            type="hidden"
            value={import.meta.env.VITE_FORM_API_KEY}
            {...form.register("access_key")}
          />
          <input type="hidden" {...form.register("subject")} />
          <input
            type="hidden"
            value="NPS Jalahalli Website"
            {...form.register("from_name")}
          />
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem className="space-y-0 my-3">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="name" className=" text-slate-200">
                    Enter Name of the Student:{" "}
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Student Name..."
                    required
                    {...field}
                    className=" placeholder:text-white text-white"
                  />
                </div>
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem className="space-y-0 my-3">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="email" className=" text-slate-200">
                    Enter Email:{" "}
                  </Label>
                  <Input
                    type="email"
                    id="name"
                    placeholder="Email Address..."
                    required
                    {...field}
                    className=" placeholder:text-white text-white"
                  />
                </div>
              </FormItem>
            )}
          />
          <FormField
            name="phone"
            control={form.control}
            render={({ field }) => (
              <FormItem className="space-y-0 my-3">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="email" className=" text-slate-200">
                    Enter Phone Number:{" "}
                  </Label>
                  <Input
                    type="number"
                    id="phone"
                    placeholder="Phone Number..."
                    required
                    {...field}
                    className=" placeholder:text-white text-white"
                    maxLength={10}
                    minLength={10}
                    // onChange={(e) => {
                    //   field.onChange(e);
                    //   handlePhoneChange(e);
                    // }}
                  />
                  {/* {
                    showOtpField && (
                      <Button
                      type="button"
                      onClick={sendOtp}
                      disabled={countdown > 0}
                      className="mt-2 bg-blue-500 hover:bg-blue-300 text-white"
                      >
                        {countdown > 0 ? `Resend OTP in ${countdown}s` : "Send OTP"}
                      </Button>
                    )
                  } */}
                </div>
              </FormItem>
            )}
          />
          {/* OTP verification */}
          {/* { countdown > 0 && (
          <div className=" relative">
            <OTPInput 
            value={otp}
            onChange={setOtp}
            numInputs={6}
            separator={<span>-</span>}
            inputStyle="otp-input"
            shouldAutoFocus
            isInputNum
            onBlur={verifyOtp}
            />
            { isVerified && <span className="absolute top-3 right-2 text-green-500">  ✓ </span>}
          </div>
         )} */}
          <FormField
            name="class"
            control={form.control}
            rules={{ required: "Please select a class" }}
            render={({ field }) => (
              <FormItem className="space-y-0 my-3">
                <Label htmlFor="class" className=" text-slate-200">
                  Select Class:{" "}
                </Label>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  required
                >
                  <SelectTrigger className="max-w-sm text-gray-200">
                    <SelectValue placeholder="Select class Applying for" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="nursery">Nursery</SelectItem>
                      <SelectItem value="lkg">LKG</SelectItem>
                      <SelectItem value="ukg">UKG</SelectItem>
                      <SelectItem value="grade-1">Grade 1</SelectItem>
                      <SelectItem value="grade-2">Grade 2</SelectItem>
                      <SelectItem value="grade-3">Grade 3</SelectItem>
                      <SelectItem value="grade-4">Grade 4</SelectItem>
                      <SelectItem value="grade-5">Grade 5</SelectItem>
                      <SelectItem value="grade-6">Grade 6</SelectItem>
                      <SelectItem value="grade-7">Grade 7</SelectItem>
                      <SelectItem value="grade-8">Grade 8</SelectItem>
                      <SelectItem value="grade-9">Grade 9</SelectItem>
                      <SelectItem value="grade-10">Grade 10</SelectItem>
                      <SelectItem value="grade-11">Grade 11</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            name="terms_and_conditions"
            control={form.control}
            rules={{ required: "Please accept the terms" }}
            render={({ field }) => (
              <FormItem className="space-y-0 my-3">
                <div className="items-top flex space-x-2">
                  <Checkbox
                    id="terms_and_conditions"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className=" border-gray-200 data-[state=checked]:bg-blue-500 data-[state=checked]:border-white"
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms_and_conditions"
                      className="text-sm text-gray-200 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to receive information regarding my submitted
                      application on National Public School - Jalahalli
                    </label>
                  </div>
                </div>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className={`bg-blue-500 text-gray-200 hover:bg-blue-400 duration-200 hover:text-gray-800 w-full mt-3 ${
              isSubmitting ? "cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Sending" : "Send Message"}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default FormAdmission;
