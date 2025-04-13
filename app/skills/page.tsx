import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Award, ExternalLink } from "lucide-react"
import { BackToTop } from "@/components/back-to-top"

const skills = {
  "Frontend Development": [
    "Vue.js", "React.js", "Next.js", "Nuxt.js", "TypeScript", "JavaScript", 
    "HTML", "HTML5", "CSS", "CSS3", "SASS", "SCSS", "Redux.js", 
    "React Native", "Responsive Web Design", "Web Design", "Interaction Design", 
    "User Experience Design", "User Interface Design", "Tailwind CSS",
    "Front-End Development", "XHTML", "Cascading Style Sheets (CSS)",
    "React Router", "Storybook", "Vitest", "Jest"
  ],
  "Backend Development": [
    "Node.js", "Express.js", "RESTful APIs", "GraphQL", "MySQL",
    "PostgreSQL", "DynamoDB", "MongoDB", "C#", 
    "Python", "SQL", "Amazon Relational Database Service (RDS)"
  ],
  "Cloud & DevOps": [
    "AWS", "Amazon Web Services (AWS)", "Azure Pipelines", "AWS Lambda",
    "AWS Amplify", "Amazon S3", "AWS CodeDeploy", "Amazon API Gateway",
    "AWS Identity and Access Management (AWS IAM)", "AWS CLI",
    "Docker", "CI/CD", "Git", "GitHub Actions", "IIS", 
    "Infrastructure as Code (IaC)", "Linux", "Ubuntu", "cPanel", "CentOS"
  ],
  "Design & Creative Tools": [
    "Figma", "Adobe Creative Suite", "Adobe Photoshop", "Adobe XD",
    "Adobe Illustrator", "Adobe After Effects", "Adobe Dreamweaver",
    "Graphic Design", "Search Engine Optimization (SEO)"
  ],
  "Tools & Methodologies": [
    "Agile Methodologies", "Scrum", "Agile Project Management",
    "Project Management", "Software Development Life Cycle (SDLC)",
    "Microsoft Visual Studio Code", "Webpack", "Yarn", "npm",
    "Cypress", "Unit Testing", "Android Studio", "Cordova",
    "Capacitor", "Ionic", "Bitrise", "Fastlane", "Zendesk",
    "Microsoft Office", "Office 365", "Google Analytics", "Google Tag Manager",
    "Grafana", "New Relic", "Bash", "Management", "Budget Management",
    "Privileged Access Management", "Markdown", "Stakeholder Management",
    "Conflict Resolution"
  ],
  "Mobile & App Development": [
    "Mobile Application Development", "Obfuscation",
    "iOS Development", "Android Development", "Cross-Platform Development"
  ],
  "Business & Industry Skills": [
    "Sales", "Cold Calling", "Customer Service", "B2B Sales", "B2C Sales",
    "Technical Specifications", "Consultative Selling", "Computer Hardware",
    "Banking", "Internet Banking"
  ]
}

export default function Skills() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Skills & Technologies</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(skills).map(([category, skillList], index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, i) => (
                  <Badge 
                    key={i} 
                    variant="secondary"
                    className="text-sm py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Certifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="border-b pb-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg">AWS Certified Cloud Practitioner</h3>
                  <p className="text-muted-foreground">Amazon Web Services (AWS)</p>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  <p className="text-sm">Issued Oct 2019</p>
                </div>
              </div>
              <div className="mt-2 flex items-center text-sm text-blue-500 hover:underline">
                <ExternalLink className="h-3 w-3 mr-1" />
                <a href="https://www.youracclaim.com/badges/f8f10694-f880-4e66-b2b3-4f6acab4486d/linked_in_profile" target="_blank" rel="noopener noreferrer">
                  Show credential
                </a>
              </div>
              <div className="mt-2">
                <p className="text-sm font-medium">Skills:</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {["Amazon Web Services (AWS)", "Web Development", "MySQL", "SASS"].map((skill, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-b pb-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg">Conflict Resolution in the Workplace</h3>
                  <p className="text-muted-foreground">SEESA (Pty) Ltd</p>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  <p className="text-sm">Issued Jun 2019</p>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-sm font-medium">Skills:</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  <Badge variant="outline" className="text-xs">
                    Conflict Resolution
                  </Badge>
                </div>
              </div>
            </div>

            <div className="border-b pb-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg">Junior Management</h3>
                  <p className="text-muted-foreground">SEESA (Pty) Ltd</p>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  <p className="text-sm">Issued Mar 2019</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg">Skills for Success</h3>
                  <p className="text-muted-foreground">Dale Carnegie Training</p>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  <p className="text-sm">Issued Jul 2017</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Credential ID: TJD17094781</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Honors & Awards</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3">
            <div className="mt-1">
              <Award className="h-6 w-6 text-amber-500" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Highest Award for Achievement - Dale Carnegie</h3>
              <p className="text-muted-foreground flex items-center">
                <span>Issued by Dale Carnegie</span>
                <span className="mx-2">•</span>
                <Calendar className="h-3 w-3 mr-1" />
                <span className="text-sm">Jul 2017</span>
              </p>
              <p className="mt-2">
                The award — the most prestigious award in the program — is given to the person who best exemplified the standards, qualities and principles on which the Dale Carnegie program is based.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}