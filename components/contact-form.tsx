"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Send, Mail, User, MessageSquare, AlertCircle, CheckCircle2 } from "lucide-react"
import { useState, useRef } from "react"
import emailjs from '@emailjs/browser'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errors, setErrors] = useState<FormErrors>({})
  const [errorMessage, setErrorMessage] = useState<string>("")
  const formRef = useRef<HTMLFormElement>(null)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setStatus('submitting')
    
    try {
      const serviceId = 'service_ug7x6oh'
      const templateId = 'template_40dntgc'
      const publicKey = 'UKa50KtHeyjwkPV8I'
      
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        publicKey
      )
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      })
      
      setStatus('success')
      
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
      
    } catch (error) {
      console.error('Error sending email:', error)
      setStatus('error')
      setErrorMessage("Failed to send your message. Please try again later.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
    
    if (errors[id as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [id]: undefined
      }))
    }
  }

  return (
    <>
      {status === 'success' && (
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md p-4 mb-6 flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
          <div>
            <h3 className="font-medium text-green-800 dark:text-green-300">Message sent successfully!</h3>
            <p className="text-green-700 dark:text-green-400 text-sm mt-1">Thank you for reaching out. I'll get back to you as soon as possible.</p>
          </div>
        </div>
      )}
      
      {status === 'error' && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md p-4 mb-6 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5" />
          <div>
            <h3 className="font-medium text-red-800 dark:text-red-300">Something went wrong</h3>
            <p className="text-red-700 dark:text-red-400 text-sm mt-1">{errorMessage}</p>
          </div>
        </div>
      )}
      
      <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium">Name</Label>
          <div className="relative">
            <User className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              id="name"
              placeholder="Your name"
              className={`pl-8 ${errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">Email</Label>
          <div className="relative">
            <Mail className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder="Your email address"
              className={`pl-8 ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="subject" className="text-sm font-medium">Subject</Label>
          <Input
            id="subject"
            placeholder="What is this regarding?"
            className={errors.subject ? 'border-red-500 focus-visible:ring-red-500' : ''}
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && (
            <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-medium">Message</Label>
          <div className="relative">
            <MessageSquare className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Textarea
              id="message"
              placeholder="Your message"
              className={`min-h-[150px] pl-8 ${errors.message ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}
        </div>
        
        <Button 
          type="submit" 
          className="w-full"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </>
          )}
        </Button>
        
        <p className="text-xs text-muted-foreground text-center mt-4">
          Your message will be sent to my email. I'll respond as soon as possible.
        </p>
      </form>
    </>
  )
}