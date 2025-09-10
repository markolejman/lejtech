"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-zinc-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-8 text-center">Get In Touch</h2>
          <p className="text-zinc-600 text-center mb-12 text-lg">
            Ready to start your next project? Let's discuss how we can bring your ideas to life.
          </p>

          <div className="form-gradient p-8 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input-gradient w-full p-4 text-lg text-zinc-900 placeholder:text-zinc-500 border-0 focus:ring-0"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input-gradient w-full p-4 text-lg text-zinc-900 placeholder:text-zinc-500 border-0 focus:ring-0"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="form-input-gradient w-full p-4 text-lg text-zinc-900 placeholder:text-zinc-500 border-0 focus:ring-0 resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full py-4 text-lg font-medium text-white bg-zinc-900 hover:bg-zinc-800 border-0 hover:border-0 transition-all duration-300 hover:shadow-lg"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
