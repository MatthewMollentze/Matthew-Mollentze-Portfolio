import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export default function Contact() {
  return (
    <main className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Contact Me</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              Get In Touch
            </CardTitle>
            <CardDescription>
              Let's discuss opportunities, collaborations, or just have a chat about tech.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
        
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium">Email</h3>
                <a 
                  href="mailto:matthewmollentze@gmail.com" 
                  className="text-blue-600 dark:text-blue-400 flex items-center gap-2 mt-1"
                >
                  <Mail className="h-4 w-4" />
                  matthewmollentze@gmail.com
                </a>
              </div>
              
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-muted-foreground mt-1">Pretoria, Gauteng, South Africa</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Looking Forward To</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Discussing job opportunities</li>
                <li>Collaborating on interesting projects</li>
                <li>Connecting with fellow developers</li>
                <li>Sharing knowledge and experiences</li>
                <li>Learning about new technologies</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}