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

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    deliveryTime: "",
    budget: "",
    message: "",
  });

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
              <div className="neumorphic rounded-3xl p-8 md:p-12 h-full">
                <div className="text-center mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance">
                    Get In Touch
                  </h1>
                  <p className="text-muted-foreground text-lg">
                    {"Let's discuss your project and bring your ideas to life"}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground"
                      >
                        Name
                      </Label>
                      <div className="neumorphic-inset rounded-2xl p-1">
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          className="border-0 bg-transparent text-lg py-4 px-6 rounded-2xl focus:ring-0 focus:outline-none placeholder:text-muted-foreground"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email
                      </Label>
                      <div className="neumorphic-inset rounded-2xl p-1">
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          className="border-0 bg-transparent text-lg py-4 px-6 rounded-2xl focus:ring-0 focus:outline-none placeholder:text-muted-foreground"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="subject"
                      className="text-sm font-medium text-foreground"
                    >
                      Subject
                    </Label>
                    <div className="neumorphic-inset rounded-2xl p-1">
                      <Input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) =>
                          handleInputChange("subject", e.target.value)
                        }
                        className="border-0 bg-transparent text-lg py-4 px-6 rounded-2xl focus:ring-0 focus:outline-none placeholder:text-muted-foreground"
                        placeholder="Project subject"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="budget"
                        className="text-sm font-medium text-foreground"
                      >
                        Approximated Budget
                      </Label>
                      <div className="neumorphic-inset rounded-2xl p-1">
                        <Select
                          onValueChange={(value) =>
                            handleInputChange("budget", value)
                          }
                        >
                          <SelectTrigger className="border-0 bg-transparent text-lg py-4 px-6 rounded-2xl focus:ring-0 focus:outline-none">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent className="neumorphic border-0 rounded-2xl">
                            <SelectItem value="under-1k">
                              Under $1,000
                            </SelectItem>
                            <SelectItem value="1k-5k">
                              $1,000 - $5,000
                            </SelectItem>
                            <SelectItem value="5k-10k">
                              $5,000 - $10,000
                            </SelectItem>
                            <SelectItem value="10k-25k">
                              $10,000 - $25,000
                            </SelectItem>
                            <SelectItem value="25k-plus">$25,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="deliveryTime"
                        className="text-sm font-medium text-foreground"
                      >
                        Desired Delivery Time
                      </Label>
                      <div className="neumorphic-inset rounded-2xl p-1">
                        <Select
                          onValueChange={(value) =>
                            handleInputChange("deliveryTime", value)
                          }
                        >
                          <SelectTrigger className="border-0 bg-transparent text-lg py-4 px-6 rounded-2xl focus:ring-0 focus:outline-none">
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent className="neumorphic border-0 rounded-2xl">
                            <SelectItem value="asap">ASAP</SelectItem>
                            <SelectItem value="1-week">
                              Within 1 week
                            </SelectItem>
                            <SelectItem value="2-weeks">
                              Within 2 weeks
                            </SelectItem>
                            <SelectItem value="1-month">
                              Within 1 month
                            </SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      Message
                    </Label>
                    <div className="neumorphic-inset rounded-2xl p-1">
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        className="border-0 bg-transparent text-lg py-4 px-6 rounded-2xl focus:ring-0 focus:outline-none placeholder:text-muted-foreground min-h-32 resize-none"
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        required
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full neumorphic-button border-0 text-lg py-6 px-8 rounded-2xl font-semibold text-foreground hover:bg-accent transition-all duration-200"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
