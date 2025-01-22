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


function FormAdmission() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      class: "",
    },
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {

    console.log(data);
    form.reset()
    navigate("/thankyou")
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="name" className=" text-slate-200">Enter Name of the Student: </Label>
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
              <FormItem>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="email" className=" text-slate-200">Enter Email: </Label>
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
              <FormItem>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="email" className=" text-slate-200">Enter Phone Number: </Label>
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
              <FormItem>
                <Label htmlFor="class" className=" text-slate-200">Select Class: </Label>
                <Select onValueChange={field.onChange} value={field.value} required>
                  <SelectTrigger className="w-[280px] text-gray-200">
                    <SelectValue placeholder="Select class Applying for"/>
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
          <Button type="submit" className=" bg-orange-500 text-gray-200 hover:bg-orange-300 hover:text-gray-800">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

export default FormAdmission;
