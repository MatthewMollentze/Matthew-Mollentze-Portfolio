import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Building2, UserCircle } from "lucide-react"
import Image from "next/image"
import { MermaidDiagram } from "@/components/ui/mermaid-diagram"

export default function Projects() {
  const companyProjects = [
    {
      title: "Betway Pay To Card",
      period: "Dec 2023 - Mar 2024",
      description: "Lead front-end developer working with the business and backend team to release Betway Pay To Card, a first of its kind in the industry for South Africa. This innovative feature allows users to withdraw their winnings directly to their bank cards, providing a seamless and efficient user experience.",
      video: "/videos/Betway_Pay_To_Card.MP4",
      skills: [
        "Vue.js",
        "Nuxt.js",
        "TypeScript",
        "JavaScript",
        "CSS",
        "SASS",
        "Azure Pipelines",
        "IIS",
        "Git"
      ]
    },
    {
      title: "Obsidian™ - Service Connectivity Platform",
      period: "Jul 2021 - Oct 2022",
      description: "Core Team member of the design, development and marketing of the PMT™ Obsidian™ Service Connectivity Platform. Obsidian™ enables service exposure and management of API, IoT & Cellular endpoints through an end-to-end managed solution and delivers websites and apps to customers at no mobile data cost to them, even without an airtime or data balance.",
      features: [
        "Development, design, and UX/UI of the User Portal",
        "Implementation of Banking-Grade security systems/functions",
        "Development of the product user guide online documentation",
        "Implementation of continuous automated testing"
      ],
      image: "/images/pattern_matched_technologies_obsidian.jpg",
      skills: [
        "AWS",
        "React.js",
        "Node.js",
        "SASS",
        "TypeScript",
        "Web Development",
        "Redux.js"
      ],
      infoUrl: "https://patternmatched.com/products/obsidian/"
    }
  ]

  const personalProjects = [
    {
      title: "ReChat - Web-Based Instant Messaging",
      period: "Nov 2022 - Apr 2023",
      description: "Built with Bootstrap v5.1.3 in Node.js with Socket.io. Features include group chats, contacts, file sharing, emojis, online status and more.",
      image: "/images/rechat.png",
      features: [
        "One to One Chats",
        "Group Chats",
        "Contacts",
        "Edit & Copy messages",
        "Google ReCaptcha",
        "Emojis & Forwarding",
        "Light & Dark Mode",
        "Audio, Video & Images files"
      ],
      skills: [
        "Node.js",
        "Socket.io",
        "MySQL",
        "Bootstrap 5",
        "TypeScript",
        "AWS"
      ],
      githubUrl: "https://github.com/MatthewMollentze/rechat"
    },
    {
      title: "Franchesco - Fish Tank Temperature Management",
      period: "Jan 2023 - Mar 2023",
      description: "A home automation project utilizing an ESP32 development board to control the temperature of a fish tank. The ESP32 communicates with a DS18B20 temperature sensor and two relays to manage the temperature by turning on/off a heater and a fan.",
      diagram: `sequenceDiagram
                participant ESP32
                participant TempSensor as DS18B20 Temperature Sensor
                participant RelayModule as Opto-isolated 2 channel 5V Relay Module
                participant PowerSupply as 12V 5A Power Supply
                participant FishTank as Aquarium
                participant WallPlug as 230VAC Wall Plug

                ESP32->>TempSensor: Read temperature (GPIO1)
                TempSensor->>ESP32: Temperature data
                ESP32->>RelayModule: Control Relay1 (GPIO2)
                ESP32->>RelayModule: Control Relay2 (GPIO3)

                Note over PowerSupply, FishTank: Electrical Connections

                WallPlug->>RelayModule: Provide live wire (230VAC)
                RelayModule->>FishTank: Control Heater (Relay1, Live Wire)
                WallPlug->>RelayModule: Provide live wire (230VAC)
                RelayModule->>FishTank: Control Fan (Relay2, Live Wire)
                WallPlug->>RelayModule: Provide neutral wire
                WallPlug->>RelayModule: Provide ground wire
                WallPlug->>RelayModule: Provide neutral wire
                WallPlug->>RelayModule: Provide ground wire`,
      features: [
        "Monitors temperature using a DS18B20 temperature sensor",
        "Controls a heater and fan based on temperature readings",
        "Integrates with Home Assistant for remote monitoring",
        "Sends data to Home Assistant via MQTT",
        "Supports configuration of temperature parameters through Home Assistant"
      ],
      skills: [
        "ESP32",
        "Arduino",
        "Home Assistant",
        "MQTT",
        "IoT",
        "Automation",
        "Embedded Systems"
      ],
      githubUrl: "https://github.com/MatthewMollentze/Franchesco"
    },
    {
      title: "User List Application",
      period: "Nov 2022 - Dec 2022",
      description: "A React application for managing user data, featuring filtering, sorting, and CRUD operations with responsive design principles.",
      image: "/images/user_list.png",
      skills: ["React.js", "JavaScript", "CSS", "REST API", "Responsive Design"],
      githubUrl: "https://github.com/MatthewMollentze/User-List"
    },
    {
      title: "MARIPOSA - E-Commerce",
      period: "Dec 2022 - Jan 2023",
      description: "Smart Home Automation Product Reseller built on WordPress with WooCommerce, featuring custom React.js components for improved user experience and product visualization.",
      image: "/images/mariposa.png",
      skills: [
        "AWS",
        "Responsive Web Design",
        "Git",
        "React.js",
        "Redux.js",
        "SEO",
        "WordPress",
        "WooCommerce"
      ],
      githubUrl: "https://github.com/MatthewMollentze/mariposa"
    },
  ]

  return (
    <main className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>

      <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <UserCircle className="h-5 w-5 text-blue-500" />
        Personal Projects
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {personalProjects.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden">
            {project.image && (
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            {project.diagram && (
              <div className="bg-white dark:bg-gray-900 p-4">
                <MermaidDiagram chart={project.diagram} className="w-full" />
              </div>
            )}
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              {project.period && <CardDescription>{project.period}</CardDescription>}
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-muted-foreground mb-4 flex-1">
                {project.description}
              </p>
              {project.features && (
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, i) => (
                    <Badge key={i} variant="outline">{skill}</Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <Building2 className="h-5 w-5 text-blue-500" />
        Company Projects
      </h2>
      <div className="grid gap-6 md:grid-cols-2 mb-12">
        {companyProjects.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden">
            {project.image && (
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            {project.video && (
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <video
                  controls
                  className="absolute top-0 left-0 w-full h-full"
                  poster="/images/betway_africa.jpg"
                >
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              {project.period && <CardDescription>{project.period}</CardDescription>}
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-muted-foreground mb-4 flex-1">
                {project.description}
              </p>
              {project.features && (
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, i) => (
                    <Badge key={i} variant="outline">{skill}</Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  {project.infoUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.infoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Project Info
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}