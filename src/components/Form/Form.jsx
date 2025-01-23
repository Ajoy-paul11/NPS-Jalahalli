import React from "react";
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

function FormAdmission() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      class: "",
      terms: false,
    },
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    form.reset();
    navigate("/thankyou");
  };

  return (
    <div className=" w-[380px] overflow-hidden space-y-8 bg-[rgba(255,255,255,0.2)] backdrop-blur-lg  rounded-lg">
      <h2 className=" text-2xl text-center font-bold text-orange-500 my-4">
        Admission Form
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="  px-6 pb-6 rounded-lg  m-0"
        >
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
                    className=" text-slate-200"
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
                    className=" text-slate-200"
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
                    className=" text-slate-200"
                  />
                </div>
              </FormItem>
            )}
          />
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
                      <SelectItem value="grade-12">Grade 12</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            name="terms"
            control={form.control}
            rules={{ required: "Please accept the terms" }}
            render={({ field }) => (
              <FormItem className="space-y-0 my-3">
                <div className="items-top flex space-x-2">
                  <Checkbox
                    id="terms"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className=" border-gray-200 data-[state=checked]:bg-orange-500 data-[state=checked]:border-white"
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms"
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
            className=" bg-orange-500 text-gray-200 hover:bg-orange-300 hover:text-gray-800 w-full mt-3"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default FormAdmission;
