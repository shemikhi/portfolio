"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Briefcase,
  Code,
  Server,
  Shield,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Award,
  Globe,
  Calendar,
  Building,
  Monitor,
  Trophy,
  Menu,
  X,
  Github,
  ExternalLink,
  Terminal,
  Download,
  ArrowRight,
} from "lucide-react"
import ScrollToTop from "@/components/scroll-to-top"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  // Track active section for navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id")

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          // Only update state if the active section has changed
          setActiveSection((prevActive) => {
            if (prevActive !== sectionId) {
              return sectionId
            }
            return prevActive
          })
        }
      })
    }

    // Use passive: true for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Improved smooth scroll function for better mobile experience
  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId)
    if (element) {
      // Get the header height to offset the scroll position
      const headerHeight = document.querySelector("header")?.offsetHeight || 0

      // Calculate the element's position relative to the viewport
      const elementPosition = element.getBoundingClientRect().top

      // Calculate the position to scroll to (element position + current scroll - header height)
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20

      // Use smooth scrolling with the calculated offset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  // Terminal component
  const TerminalComponent = () => {
    const [terminalHistory, setTerminalHistory] = useState([
      { type: "system", content: "System initialized. Type 'help' for available commands." },
    ])
    const [inputValue, setInputValue] = useState("")
    const terminalRef = useRef(null)
    const inputRef = useRef(null)

    const handleSubmit = (e) => {
      e.preventDefault()

      if (!inputValue.trim()) return

      // Add user input to history
      setTerminalHistory([...terminalHistory, { type: "user", content: inputValue }])

      // Process command
      const command = inputValue.toLowerCase().trim()

      if (command === "help") {
        setTerminalHistory((prev) => [
          ...prev,
          {
            type: "system",
            content: "Available commands: help, about, skills, contact, clear, projects, education, certifications",
          },
        ])
      } else if (command === "about") {
        setTerminalHistory((prev) => [
          ...prev,
          {
            type: "system",
            content:
              "Salm Bashemakh: IT Support Professional with a focus on Cybersecurity. Currently pursuing MSc in Computer Science (Cyber Security) at Constructor University. Ranked in the top 4% of TryHackMe users globally.",
          },
        ])
      } else if (command === "skills") {
        setTerminalHistory((prev) => [
          ...prev,
          {
            type: "system",
            content:
              "Skills include: Penetration Testing, Network Security, Bash Scripting, Hardware & Software Troubleshooting, System Administration, CTF Participation",
          },
        ])
      } else if (command === "contact") {
        setTerminalHistory((prev) => [
          ...prev,
          {
            type: "system",
            content: "Email: salemmohammed4690@gmail.com | Phone: +4915734858897 | Location: Bremen, Germany",
          },
        ])
      } else if (command === "clear") {
        setTerminalHistory([{ type: "system", content: "Terminal cleared." }])
      } else if (command === "projects") {
        setTerminalHistory((prev) => [
          ...prev,
          {
            type: "system",
            content:
              "Projects: IoT Project for COVID-19, Home Lab Environment, Capture The Flag Competitions (Cyber Apocalypse 2023-2024)",
          },
        ])
      } else if (command === "education") {
        setTerminalHistory((prev) => [
          ...prev,
          {
            type: "system",
            content:
              "Education: MSc in Computer Science (Cyber Security) at Constructor University (Present), Bachelor's in Computer Networks (Honors) from Segi University (GPA: 3.52/4.0)",
          },
        ])
      } else if (command === "certifications") {
        setTerminalHistory((prev) => [
          ...prev,
          {
            type: "system",
            content: "Certifications: AWS Cloud Practitioner, EJPT INE Junior Penetration Tester",
          },
        ])
      } else {
        setTerminalHistory((prev) => [
          ...prev,
          {
            type: "system",
            content: `Command not recognized: '${command}'. Type 'help' for available commands.`,
          },
        ])
      }

      // Clear input
      setInputValue("")
    }

    useEffect(() => {
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight
      }
    }, [terminalHistory])

    return (
      <div className="bg-black border border-green-500/50 rounded-md overflow-hidden shadow-lg">
        <div className="bg-gray-900 px-4 py-2 flex items-center justify-between border-b border-green-500/30">
          <div className="flex items-center">
            <Terminal className="h-4 w-4 text-green-500 mr-2" />
            <span className="text-green-500 text-sm font-mono">bash@salm:~</span>
          </div>
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div
          ref={terminalRef}
          className="bg-black p-4 h-64 overflow-y-auto font-mono text-sm"
          onClick={() => inputRef.current?.focus()}
        >
          {terminalHistory.map((entry, index) => (
            <div key={index} className="mb-2">
              {entry.type === "user" ? (
                <div className="flex">
                  <span className="text-green-500">salm@kali:~$</span>
                  <span className="text-white ml-2">{entry.content}</span>
                </div>
              ) : (
                <div className="text-green-400">{entry.content}</div>
              )}
            </div>
          ))}
          <form onSubmit={handleSubmit} className="flex items-center mt-2">
            <span className="text-green-500">salm@kali:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-white ml-2 font-mono"
              autoFocus
            />
          </form>
        </div>
      </div>
    )
  }

  // Skill bar component
  const SkillBar = ({ skill, level }) => {
    return (
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-white">{skill}</span>
          <span className="text-sm font-medium text-green-500">{level}%</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-2">
          <div className="bg-green-500 h-2 rounded-full" style={{ width: `${level}%` }}></div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-950 text-gray-200" style={{ minHeight: "100vh", overflowY: "auto" }}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="#hero" className="font-mono text-xl text-green-500 flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              <span>Salm Bashemakh</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {[
                { name: "About", href: "about" },
                { name: "Skills", href: "skills" },
                { name: "Experience", href: "experience" },
                { name: "Education", href: "education" },
                { name: "Projects", href: "projects" },
                { name: "Achievements", href: "achievements" },
                { name: "Contact", href: "contact" },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => smoothScrollTo(item.href)}
                  className={`text-sm hover:text-green-500 transition-colors ${
                    activeSection === item.href ? "text-green-500" : "text-gray-400"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-400 hover:text-green-500"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>

            <Button
              className="hidden md:flex bg-green-900/50 hover:bg-green-800 text-green-500 border border-green-700/50"
              onClick={() => smoothScrollTo("contact")}
            >
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-950 border-b border-gray-800">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {[
                { name: "About", href: "about" },
                { name: "Skills", href: "skills" },
                { name: "Experience", href: "experience" },
                { name: "Education", href: "education" },
                { name: "Projects", href: "projects" },
                { name: "Achievements", href: "achievements" },
                { name: "Contact", href: "contact" },
              ].map((item) => (
                <button
                  key={item.name}
                  className={`text-left text-sm hover:text-green-500 transition-colors ${
                    activeSection === item.href ? "text-green-500" : "text-gray-400"
                  }`}
                  onClick={() => {
                    setMobileMenuOpen(false)
                    // Small delay to allow menu to close before scrolling
                    setTimeout(() => smoothScrollTo(item.href), 100)
                  }}
                >
                  {item.name}
                </button>
              ))}
              <Button
                className="bg-green-900/50 hover:bg-green-800 text-green-500 border border-green-700/50 w-full"
                onClick={() => {
                  setMobileMenuOpen(false)
                  // Small delay to allow menu to close before scrolling
                  setTimeout(() => smoothScrollTo("contact"), 100)
                }}
              >
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Badge className="mb-4 bg-green-900/20 text-green-500 hover:bg-green-900/40 border-green-700/50">
                <Shield className="mr-2 h-3 w-3" /> Cybersecurity Specialist
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Salm <span className="text-green-500">Bashemakh</span>
              </h1>
              <p className="text-xl text-gray-400 mb-6 border-l-2 border-green-500 pl-4">
                IT Support Professional with a focus on <span className="text-green-500">Cybersecurity</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-8 font-mono text-sm">
                <div className="flex items-center text-gray-400">
                  <MapPin className="h-5 w-5 mr-2 text-green-500" />
                  Bremen, Germany
                </div>
                <div className="flex items-center text-gray-400">
                  <Mail className="h-5 w-5 mr-2 text-green-500" />
                  salemmohammed4690@gmail.com
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone className="h-5 w-5 mr-2 text-green-500" />
                  +4915734858897
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-green-900/50 hover:bg-green-800 text-green-500 border border-green-700/50">
                  Download CV <Download className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-green-700/50 text-green-500 hover:bg-green-900/30"
                  onClick={() => smoothScrollTo("projects")}
                >
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 animate-pulse"></div>
                <div className="absolute inset-0 rounded-full border-2 border-green-500/50 overflow-hidden">
                  <Image
                    src="/images/profile.png"
                    alt="Salm Bashemakh"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="absolute -bottom-2 left-0 right-0 text-center text-green-500 font-mono text-xs">
                  <div className="bg-black/80 py-1 px-2 rounded-full inline-block border border-green-900/50">
                    <span className="mr-1 text-green-500">$</span> whoami
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terminal Section */}
      <section className="py-10 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <TerminalComponent />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900 relative z-10">
        <div className="container mx-auto px-4 overflow-visible">
          <div className="max-w-3xl mx-auto text-center mb-16 overflow-visible">
            <Badge className="mb-4 bg-green-900/20 text-green-500 hover:bg-green-900/40 border-green-700/50">
              <Code className="mr-2 h-3 w-3" /> About Me
            </Badge>
            <h2 className="text-3xl font-bold text-white mb-4">Professional Profile</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300">
              A highly motivated and detail-oriented IT professional with a strong background in technical support and
              cybersecurity. Fluent in Arabic and English, with a passion for delivering exceptional service standards.
              Currently pursuing a Master's degree in Computer Science with a focus on Cybersecurity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-900/30 rounded-full flex items-center justify-center mr-4 border border-green-500/30">
                    <GraduationCap className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Education</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  MSc in Computer Science (Cybersecurity) at Constructor University and Bachelor's in Computer Networks
                  from Segi University.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-900/30 rounded-full flex items-center justify-center mr-4 border border-green-500/30">
                    <Award className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Certifications</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  AWS Cloud Practitioner and EJPT (eLearnSecurity Junior Penetration Tester) certified professional.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-900/30 rounded-full flex items-center justify-center mr-4 border border-green-500/30">
                    <Globe className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Languages</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Arabic (Native), English (Fluent), Tigrigna (Native), German (Intermediate)
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-900/30 rounded-full flex items-center justify-center mr-4 border border-green-500/30">
                    <Shield className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Focus Areas</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  IT Support, Network Troubleshooting, Cybersecurity, and Penetration Testing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-950 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-green-900/20 text-green-500 hover:bg-green-900/40 border-green-700/50">
              <Terminal className="mr-2 h-3 w-3" /> My Skills
            </Badge>
            <h2 className="text-3xl font-bold text-white mb-4">Technical Expertise</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300">
              A comprehensive set of technical skills developed through education, professional experience, and personal
              projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <Shield className="h-5 w-5 mr-2 text-green-500" />
                Security & Penetration Testing
              </h3>
              <div className="space-y-4">
                <SkillBar skill="Network Security" level={85} />
                <SkillBar skill="Penetration Testing" level={80} />
                <SkillBar skill="Security Tools" level={75} />
                <SkillBar skill="CTF Challenges" level={90} />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <Monitor className="h-5 w-5 mr-2 text-green-500" />
                IT Support & Administration
              </h3>
              <div className="space-y-4">
                <SkillBar skill="Hardware & Software Troubleshooting" level={95} />
                <SkillBar skill="Bash Scripting" level={85} />
                <SkillBar skill="System Administration" level={80} />
                <SkillBar skill="Network Troubleshooting" level={90} />
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-900/30 rounded-full flex items-center justify-center mr-4 border border-green-500/30">
                    <Terminal className="h-5 w-5 text-green-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Tools & Technologies</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gray-700 hover:bg-gray-600 text-gray-200">Kali Linux</Badge>
                  <Badge className="bg-gray-700 hover:bg-gray-600 text-gray-200">Wireshark</Badge>
                  <Badge className="bg-gray-700 hover:bg-gray-600 text-gray-200">Metasploit</Badge>
                  <Badge className="bg-gray-700 hover:bg-gray-600 text-gray-200">Nmap</Badge>
                  <Badge className="bg-gray-700 hover:bg-gray-600 text-gray-200">Burp Suite</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-900/30 rounded-full flex items-center justify-center mr-4 border border-green-500/30">
                    <Code className="h-5 w-5 text-green-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Programming</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gray-700 hover:bg-gray-600 text-gray-200">Bash</Badge>
                  <Badge className="bg-gray-700 hover:bg-gray-600 text-gray-200">Python</Badge>
                  <Badge className="bg-gray-700 hover:bg-gray-600 text-gray-200">C++</Badge>
                  <Badge className="bg-gray-700 hover:bg-gray-600 text-gray-200">SQL</Badge>
                  <Badge className="bg-gray-700 hover:bg-gray-600 text-gray-200">PowerShell</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-900/30 rounded-full flex items-center justify-center mr-4 border border-green-500/30">
                    <Server className="h-5 w-5 text-green-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Infrastructure</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gray-700 hover:bg-gray-600 text-gray-200">AWS</Badge>
                  <Badge className="bg-gray-700 hover:bg-gray-600 text-gray-200">Virtualization</Badge>
                  <Badge className="bg-gray-700 hover:bg-gray-600 text-gray-200">Windows Server</Badge>
                  <Badge className="bg-gray-700 hover:bg-gray-600 text-gray-200">Linux</Badge>
                  <Badge className="bg-gray-700 hover:bg-gray-600 text-gray-200">Networking</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-green-900/20 text-green-500 hover:bg-green-900/40 border-green-700/50">
              <Briefcase className="mr-2 h-3 w-3" /> My Experience
            </Badge>
            <h2 className="text-3xl font-bold text-white mb-4">Professional Journey</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300">
              A track record of hands-on experience in IT support, cybersecurity, and technical environments.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-green-500/30 pl-8 ml-4 space-y-12">
              <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-[9px] top-0"></div>

              <div className="relative">
                <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-[25px] top-2"></div>
                <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">Cyberfit Internship</h3>
                        <p className="text-gray-400 text-sm">Acronis</p>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>July 10 – September 1, 2024</span>
                        </div>
                        <div className="flex items-center text-gray-400 text-sm mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>Remote, Germany</span>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-start">
                        <div className="mr-2 mt-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        </div>
                        <span>Worked closely with the sales department to support product initiatives.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        </div>
                        <span>Solidified cybersecurity knowledge by designing courses for end users.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        </div>
                        <span>Documented technical issues and resolutions to ensure knowledge transfer.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        </div>
                        <span>Maintained a positive and professional demeanor while interacting with users.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="relative">
                <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-[25px] top-2"></div>
                <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">IT Support Engineer Intern</h3>
                        <p className="text-gray-400 text-sm">LINEX</p>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>June 2021 – September 2021</span>
                        </div>
                        <div className="flex items-center text-gray-400 text-sm mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>Kuala Lumpur, Malaysia</span>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-start">
                        <div className="mr-2 mt-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        </div>
                        <span>
                          Provided technical support to internal users, resolving hardware and software issues.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        </div>
                        <span>
                          Assisted with user onboarding, configuring new devices, and setting up software applications.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        </div>
                        <span>Troubleshot network connectivity problems and identified solutions.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        </div>
                        <span>Documented technical issues and resolutions for future reference.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="relative">
                <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-[25px] top-2"></div>
                <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">Penetration Tester</h3>
                        <p className="text-gray-400 text-sm">Home-lab</p>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>March 2018 to Present</span>
                        </div>
                        <div className="flex items-center text-gray-400 text-sm mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>Personal Project</span>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-start">
                        <div className="mr-2 mt-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        </div>
                        <span>
                          Established and maintained a personal IT lab environment for ongoing skill development.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        </div>
                        <span>Conducted simulated IT troubleshooting scenarios and penetration testing exercises.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        </div>
                        <span>
                          Utilized various network analysis tools to identify and troubleshoot vulnerabilities.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        </div>
                        <span>Developed proficiency in bash scripting to automate routine IT support tasks.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-[9px] bottom-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section id="education" className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-green-900/20 text-green-500 hover:bg-green-900/40 border-green-700/50">
              <GraduationCap className="mr-2 h-3 w-3" /> Education & Certifications
            </Badge>
            <h2 className="text-3xl font-bold text-white mb-4">Academic Background</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300">
              A solid educational foundation combined with industry-recognized certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <GraduationCap className="h-5 w-5 mr-2 text-green-500" />
                Education
              </h3>
              <div className="space-y-8">
                <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <GraduationCap className="h-6 w-6 text-green-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">MSc, Computer Science (Cyber Security)</h4>
                        <p className="text-gray-400 mb-2 text-sm">Constructor University</p>
                        <div className="flex items-center text-gray-500 text-sm mb-4">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>Present</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Currently pursuing a Master's degree with a focus on Cybersecurity.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <GraduationCap className="h-6 w-6 text-green-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Bachelor's, Computer Networks (Honors)</h4>
                        <p className="text-gray-400 mb-2 text-sm">Segi University</p>
                        <div className="flex items-center text-gray-500 text-sm mb-4">
                          <Award className="h-4 w-4 mr-1" />
                          <span>GPA: 3.52/4.0</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Completed Bachelor's degree with honors, focusing on computer networks and IT infrastructure.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Shield className="h-5 w-5 mr-2 text-green-500" />
                Certifications
              </h3>
              <div className="space-y-8">
                <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <Award className="h-6 w-6 text-green-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">AWS Cloud Practitioner</h4>
                        <p className="text-gray-400 mb-4 text-sm">Amazon Web Services</p>
                        <p className="text-gray-300 text-sm">
                          Foundational understanding of AWS Cloud services, security, architecture, pricing, and
                          support.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <Shield className="h-6 w-6 text-green-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">EJPT INE Junior Penetration Tester</h4>
                        <p className="text-gray-400 mb-4 text-sm">eLearnSecurity</p>
                        <p className="text-gray-300 text-sm">
                          Practical skills in penetration testing methodologies, tools, and techniques for identifying
                          security vulnerabilities.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-green-900/20 text-green-500 hover:bg-green-900/40 border-green-700/50">
              <Code className="mr-2 h-3 w-3" /> My Projects
            </Badge>
            <h2 className="text-3xl font-bold text-white mb-4">Technical Projects</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300">
              Showcasing practical applications of technical knowledge and problem-solving skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-colors">
              <CardContent className="p-6">
                <Badge className="mb-4 bg-green-900/20 text-green-500 hover:bg-green-900/40 border-green-700/50">
                  Final Year Project
                </Badge>
                <h3 className="text-xl font-bold text-white mb-2">IoT Project for COVID-19</h3>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>March 2022</span>
                  <span className="mx-2">•</span>
                  <Building className="h-4 w-4 mr-1" />
                  <span>Segi University</span>
                </div>
                <p className="text-gray-300 mb-4 text-sm">
                  Created an IoT device that checks temperature and face mask compliance using Arduino with C++.
                </p>
                <ul className="space-y-2 text-gray-300 mb-4 text-sm">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    </div>
                    <span>The system can connect to WiFi and has a web interface for more interaction</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    </div>
                    <span>The system is made up of sensors, cameras, and a small servo which acts like a gate</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gray-700 hover:bg-gray-600 text-gray-200">Arduino</Badge>
                  <Badge className="bg-gray-700 hover:bg-gray-600 text-gray-200">C++</Badge>
                  <Badge className="bg-gray-700 hover:bg-gray-600 text-gray-200">IoT</Badge>
                  <Badge className="bg-gray-700 hover:bg-gray-600 text-gray-200">Web Interface</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-colors">
              <CardContent className="p-6">
                <Badge className="mb-4 bg-green-900/20 text-green-500 hover:bg-green-900/40 border-green-700/50">
                  Cybersecurity
                </Badge>
                <h3 className="text-xl font-bold text-white mb-2">Capture The Flag Competitions</h3>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>2023-2024</span>
                </div>
                <p className="text-gray-300 mb-4 text-sm">
                  Participated in Cyber Apocalypse CTF competitions, developing practical cybersecurity skills through
                  hands-on challenges.
                </p>
                <ul className="space-y-2 text-gray-300 mb-4 text-sm">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    </div>
                    <span>
                      Solved challenges in various categories including web exploitation, cryptography, and reverse
                      engineering
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    </div>
                    <span>
                      Applied theoretical knowledge in practical scenarios to identify and exploit vulnerabilities
                    </span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gray-700 hover:bg-gray-600 text-gray-200">CTF</Badge>
                  <Badge className="bg-gray-700 hover:bg-gray-600 text-gray-200">Cybersecurity</Badge>
                  <Badge className="bg-gray-700 hover:bg-gray-600 text-gray-200">Ethical Hacking</Badge>
                  <Badge className="bg-gray-700 hover:bg-gray-600 text-gray-200">Problem Solving</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-colors md:col-span-2">
              <CardContent className="p-6">
                <Badge className="mb-4 bg-green-900/20 text-green-500 hover:bg-green-900/40 border-green-700/50">
                  Ongoing Project
                </Badge>
                <h3 className="text-xl font-bold text-white mb-2">Home Lab Environment</h3>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>March 2018 - Present</span>
                </div>
                <p className="text-gray-300 mb-4 text-sm">
                  Established and maintained a personal IT lab environment for ongoing skill development and
                  experimentation in IT support and cybersecurity.
                </p>
                <ul className="space-y-2 text-gray-300 mb-4 text-sm">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    </div>
                    <span>
                      Created virtualized environments for testing and learning various operating systems and security
                      tools
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    </div>
                    <span>Conducted simulated IT troubleshooting scenarios and penetration testing exercises</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    </div>
                    <span>Developed and practiced bash scripting skills to automate routine IT support tasks</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gray-700 hover:bg-gray-600 text-gray-200">Virtualization</Badge>
                  <Badge className="bg-gray-700 hover:bg-gray-600 text-gray-200">Penetration Testing</Badge>
                  <Badge className="bg-gray-700 hover:bg-gray-600 text-gray-200">Network Analysis</Badge>
                  <Badge className="bg-gray-700 hover:bg-gray-600 text-gray-200">Bash Scripting</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-green-900/20 text-green-500 hover:bg-green-900/40 border-green-700/50">
              <Trophy className="mr-2 h-3 w-3" /> Achievements
            </Badge>
            <h2 className="text-3xl font-bold text-white mb-4">Cybersecurity Platform Rankings</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300">
              Demonstrating practical cybersecurity skills through hands-on challenges and learning platforms.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-colors overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <Shield className="h-8 w-8 text-green-500 mr-3" />
                    <h3 className="text-2xl font-bold text-white">TryHackMe</h3>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">
                    Ranked in the <span className="font-bold text-green-500">top 4%</span> of all TryHackMe users
                    globally, demonstrating exceptional practical cybersecurity skills through hands-on challenges.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-gray-700 hover:bg-gray-600 text-gray-200">Penetration Testing</Badge>
                    <Badge className="bg-gray-700 hover:bg-gray-600 text-gray-200">Ethical Hacking</Badge>
                    <Badge className="bg-gray-700 hover:bg-gray-600 text-gray-200">CTF Challenges</Badge>
                    <Badge className="bg-gray-700 hover:bg-gray-600 text-gray-200">Network Security</Badge>
                  </div>
                  <div>
                    <Link
                      href="https://tryhackme.com/p/siso.1180"
                      target="_blank"
                      className="text-green-500 hover:text-green-400 font-medium flex items-center"
                    >
                      View Profile <ExternalLink className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="bg-black p-6 flex items-center justify-center border-l border-gray-800">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-900/30 mb-4 border border-green-500/30">
                      <Trophy className="h-12 w-12 text-green-500" />
                    </div>
                    <div className="text-green-500 text-4xl font-bold mb-2">Top 4%</div>
                    <div className="text-gray-400">Global Ranking</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-green-900/20 text-green-500 hover:bg-green-900/40 border-green-700/50">
              <Mail className="mr-2 h-3 w-3" /> Contact Me
            </Badge>
            <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300">
              Interested in discussing IT support or cybersecurity opportunities? Feel free to reach out.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 bg-black border-r border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 mr-3 mt-0.5 text-green-500" />
                    <div>
                      <p className="font-medium text-white">Location</p>
                      <p className="text-gray-400 text-sm">Bremen, Germany</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 mr-3 mt-0.5 text-green-500" />
                    <div>
                      <p className="font-medium text-white">Email</p>
                      <p className="text-gray-400 text-sm">salemmohammed4690@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 mr-3 mt-0.5 text-green-500" />
                    <div>
                      <p className="font-medium text-white">Phone</p>
                      <p className="text-gray-400 text-sm">+4915734858897</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe className="h-6 w-6 mr-3 mt-0.5 text-green-500" />
                    <div>
                      <p className="font-medium text-white">Languages</p>
                      <p className="text-gray-400 text-sm">Arabic, English, Tigrigna, German</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.linkedin.com/in/salm-bashemakh-171515151/"
                      className="bg-gray-800 text-green-500 p-2 rounded-full hover:bg-green-900/30 transition-colors border border-gray-700"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="mailto:salemmohammed4690@gmail.com"
                      className="bg-gray-800 text-green-500 p-2 rounded-full hover:bg-green-900/30 transition-colors border border-gray-700"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                    <a
                      href="https://github.com/"
                      className="bg-gray-800 text-green-500 p-2 rounded-full hover:bg-green-900/30 transition-colors border border-gray-700"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gray-900">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                      placeholder="How can I help you?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-green-900/50 hover:bg-green-800 text-green-500 border border-green-700/50">
                    <Mail className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-green-500 flex items-center">
                <Terminal className="h-5 w-5 mr-2" />
                Salm Bashemakh
              </h3>
              <p className="text-gray-400 text-sm">IT Support & Cybersecurity Professional</p>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/salm-bashemakh-171515151/"
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:salemmohammed4690@gmail.com"
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://github.com/" className="text-gray-400 hover:text-green-500 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Salm Bashemakh. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  )
}
