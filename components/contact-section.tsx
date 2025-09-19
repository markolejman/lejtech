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
                <div className="text-center mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance">
                    Get In Touch
                  </h1>
                  <p className="text-muted-foreground text-lg">
                    {"Let's discuss your project and bring your ideas to life"}
                  </p>
                </div>

                <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-6 md:p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="fullName"
                          className="text-sm font-medium text-gray-700"
                        >
                          Full Name <span className="text-red-500">*</span>
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
                          className="h-12 bg-gray-50 border-gray-200 placeholder:text-gray-400 rounded-lg"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-sm font-medium text-gray-700"
                        >
                          Email Address <span className="text-red-500">*</span>
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
                          className="h-12 bg-gray-50 border-gray-200 placeholder:text-gray-400 rounded-lg"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="projectType"
                        className="text-sm font-medium text-gray-700"
                      >
                        Project Type <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={formData.projectType}
                        onValueChange={(value) =>
                          handleInputChange("projectType", value)
                        }
                      >
                        <SelectTrigger className="h-12 w-full bg-gray-50 border-gray-200 rounded-lg">
                          <SelectValue placeholder="Select a project type" />
                        </SelectTrigger>
                        <SelectContent>
                          {projectTypes.map((type) => (
                            <SelectItem
                              key={type}
                              value={type}
                              className="capitalize"
                            >
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="projectDetails"
                        className="text-sm font-medium text-gray-700"
                      >
                        Project Details <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="projectDetails"
                        placeholder="Tell me about your project, timeline, and requirements..."
                        value={formData.projectDetails}
                        onChange={(e) =>
                          handleInputChange("projectDetails", e.target.value)
                        }
                        required
                        className="min-h-[200px] bg-gray-50 border-gray-200 placeholder:text-gray-400 resize-none rounded-lg"
                      />
                    </div>

                    <div className="space-y-4">
                      <Button
                        type="submit"
                        className="bg-slate-800 hover:bg-slate-900 text-white h-12 px-6 rounded-lg font-medium"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>

                      <p className="text-sm text-gray-500">
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
