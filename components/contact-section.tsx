"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { Send } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    projectType: "",
    projectDetails: "",
  });

  const projectTypes = [
    "consultation",
    "web development",
    "a simple landing page",
    "redesign website",
    "turn old code to new code",
    "other",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="min-h-screen bg-background p-0 md:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            <div className="lg:col-span-1 order-first">
              <div className="relative w-full h-64 sm:h-80 lg:h-full rounded-3xl overflow-hidden">
                <Image
                  src="/mockup1.png"
                  alt="Project mockup"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-3xl h-full">
                <div className="text-center space-y-2 mb-10">
                  <h1 className="text-3xl font-light text-slate-900 tracking-tight">
                    {"Let's work together"}
                  </h1>
                  <p className="text-slate-500 font-light">
                    {"Tell me about your project and I'll get back to you soon"}
                  </p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-10">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label
                          htmlFor="fullName"
                          className="text-sm font-medium text-slate-700 tracking-wide"
                        >
                          Full Name <span className="text-rose-400">*</span>
                        </Label>
                        <Input
                          id="fullName"
                          type="text"
                          placeholder="Your name"
                          value={formData.fullName}
                          onChange={(e) =>
                            handleInputChange("fullName", e.target.value)
                          }
                          required
                          className="h-14 bg-slate-50/50 border-0 rounded-2xl placeholder:text-slate-400 text-slate-900 font-light focus:bg-white focus:ring-2 focus:ring-slate-200 transition-all duration-200"
                        />
                      </div>

                      <div className="space-y-3">
                        <Label
                          htmlFor="email"
                          className="text-sm font-medium text-slate-700 tracking-wide"
                        >
                          Email Address <span className="text-rose-400">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          required
                          className="h-14 bg-slate-50/50 border-0 rounded-2xl placeholder:text-slate-400 text-slate-900 font-light focus:bg-white focus:ring-2 focus:ring-slate-200 transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label
                        htmlFor="projectType"
                        className="text-sm font-medium text-slate-700 tracking-wide"
                      >
                        Project Type <span className="text-rose-400">*</span>
                      </Label>
                      <Select
                        value={formData.projectType}
                        onValueChange={(value) =>
                          handleInputChange("projectType", value)
                        }
                      >
                        <SelectTrigger className="h-14 bg-slate-50/50 border-0 rounded-2xl text-slate-900 font-light focus:bg-white focus:ring-2 focus:ring-slate-200 transition-all duration-200">
                          <SelectValue
                            placeholder="Select a project type"
                            className="placeholder:text-slate-400"
                          />
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl border-0 shadow-xl bg-white/95 backdrop-blur-sm">
                          {projectTypes.map((type) => (
                            <SelectItem
                              key={type}
                              value={type}
                              className="capitalize rounded-xl font-light hover:bg-slate-50 focus:bg-slate-50 transition-colors duration-150"
                            >
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label
                        htmlFor="projectDetails"
                        className="text-sm font-medium text-slate-700 tracking-wide"
                      >
                        Project Details <span className="text-rose-400">*</span>
                      </Label>
                      <Textarea
                        id="projectDetails"
                        placeholder="Tell me about your project, timeline, and requirements..."
                        value={formData.projectDetails}
                        onChange={(e) =>
                          handleInputChange("projectDetails", e.target.value)
                        }
                        required
                        className="min-h-[160px] bg-slate-50/50 border-0 rounded-2xl placeholder:text-slate-400 text-slate-900 font-light resize-none focus:bg-white focus:ring-2 focus:ring-slate-200 transition-all duration-200"
                      />
                    </div>

                    <div className="space-y-6 pt-4">
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white h-14 px-8 rounded-2xl font-medium tracking-wide shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
                      >
                        <Send className="w-5 h-5 mr-3" />
                        Send Message
                      </Button>

                      <p className="text-center text-sm text-slate-400 font-light">
                        {
                          "I'll get back to you within 24 hours with a detailed response and next steps."
                        }
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
