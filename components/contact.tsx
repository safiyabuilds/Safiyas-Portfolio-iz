"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((current) => ({ ...current, [name]: value }))
    if (submissionStatus === "error") setSubmissionStatus("idle")
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmissionStatus("sending")

    try {
      const response = await fetch("https://formsubmit.co/ajax/muhammadsafiya2001@gmail.com", {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: { Accept: "application/json" },
      })
      const result = await response.json()

      if (!response.ok || (result.success !== true && result.success !== "true")) {
        throw new Error("Form submission failed")
      }

      setFormData({ name: "", email: "", message: "" })
      setSubmissionStatus("success")
    } catch {
      setSubmissionStatus("error")
    }
  }

  return (
    <section id="contact" className="py-20 border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start overflow-x-clip">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Mail size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a
                  href="mailto:muhammadsafiya2001@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  muhammadsafiya2001@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <Phone size={24} className="text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <a href="tel:+2348067923896" className="text-muted-foreground hover:text-secondary transition-colors">
                  +234 806 792 3896
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <MapPin size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-muted-foreground">Nigeria</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            <input type="hidden" name="_subject" value="New message from your portfolio" />
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none transition-colors text-foreground placeholder-muted-foreground"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none transition-colors text-foreground placeholder-muted-foreground"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none transition-colors text-foreground placeholder-muted-foreground resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            {submissionStatus === "success" && (
              <p role="status" className="text-sm text-green-700">Message sent successfully. Thank you for reaching out.</p>
            )}
            {submissionStatus === "error" && (
              <p role="alert" className="text-sm text-destructive">Your message could not be sent. Please try again or email me directly.</p>
            )}
            <button
              type="submit"
              disabled={submissionStatus === "sending"}
              className="w-full px-6 py-3 bg-primary hover:bg-primary/80 text-primary-foreground rounded-lg font-semibold transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/50 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <Send size={20} aria-hidden="true" />
              {submissionStatus === "sending" ? "Sending..." : submissionStatus === "success" ? "Message Sent!" : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
