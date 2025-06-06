import { ArrowRight, Download, ExternalLink, Github, Linkedin, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200/50 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-semibold text-xl">Flynn Nisbet</div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Link href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors">
                Experience
              </Link>
              <Link href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="w-4 h-4" />
              Resume
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  Available for opportunities
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Flynn
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                Computer Science & Data Analytics graduate with a passion for efficient problem-solving. I've built ML/AI tools for business use, turned messy data into meaningful insights, and applied complex algorithms to real-world workflows. Now starting my career as a Business Analyst in Charlotte, NC, where I’m excited to put these skills into action.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Button size="lg" className="gap-2 bg-gray-900 hover:bg-gray-800">
                  Get in touch
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Greenville, SC
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Furman University '25
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Flynn Nisbet"
                    width={300}
                    height={300}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Passionate about technology and innovation, I bring fresh perspectives and strong technical skills to
              every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                As a recent Computer Science graduate from Furman University, I've developed a strong foundation in
                software development, algorithms, and system design. My academic journey has been complemented by
                hands-on projects and internships that have shaped my problem-solving approach.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I'm particularly interested in full-stack development, machine learning, and creating applications that
                make a positive impact. When I'm not coding, you can find me exploring new technologies, contributing to
                open-source projects, or enjoying the outdoors in beautiful South Carolina.
              </p>
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "Python", "React", "Node.js", "Java", "SQL", "Git", "AWS"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Bachelor of Science in Computer Science</h3>
                    <p className="text-gray-600">Furman University</p>
                    <p className="text-sm text-gray-500">Class of 2024</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Interests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Web Development</Badge>
                    <Badge variant="outline">Machine Learning</Badge>
                    <Badge variant="outline">Open Source</Badge>
                    <Badge variant="outline">UI/UX Design</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My journey in technology through internships, projects, and academic achievements.
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Software Development Intern</CardTitle>
                    <CardDescription className="text-base mt-1">Tech Company • Summer 2023</CardDescription>
                  </div>
                  <Badge>Internship</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Developed and maintained web applications using React and Node.js</li>
                  <li>• Collaborated with cross-functional teams to deliver high-quality software solutions</li>
                  <li>• Implemented automated testing procedures, improving code reliability by 30%</li>
                  <li>• Participated in code reviews and agile development processes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Research Assistant</CardTitle>
                    <CardDescription className="text-base mt-1">
                      Furman University CS Department • 2023-2024
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">Research</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Conducted research on machine learning algorithms and their applications</li>
                  <li>• Developed Python scripts for data analysis and visualization</li>
                  <li>• Presented findings at undergraduate research symposium</li>
                  <li>• Collaborated with faculty on academic publications</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Teaching Assistant</CardTitle>
                    <CardDescription className="text-base mt-1">Furman University • Fall 2023</CardDescription>
                  </div>
                  <Badge variant="outline">Academic</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Assisted students in introductory programming courses</li>
                  <li>• Held office hours and provided one-on-one tutoring</li>
                  <li>• Graded assignments and provided constructive feedback</li>
                  <li>• Helped improve student understanding of fundamental CS concepts</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A selection of projects that showcase my technical skills and problem-solving abilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 rounded-t-lg"></div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Task Management App
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="p-1">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="p-1">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>
                  A full-stack web application for project and task management with real-time collaboration features.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="aspect-video bg-gradient-to-br from-green-400 to-blue-500 rounded-t-lg"></div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  ML Image Classifier
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="p-1">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="p-1">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>
                  Machine learning model for image classification with 95% accuracy using TensorFlow and Python.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">TensorFlow</Badge>
                  <Badge variant="secondary">OpenCV</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-500 rounded-t-lg"></div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  E-commerce Platform
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="p-1">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="p-1">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>
                  Full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Stripe</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="gap-2">
              <Github className="w-4 h-4" />
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Whether you have a question or just want
            to say hi, I'll try my best to get back to you!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-300">flynn.nisbet@example.com</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <Linkedin className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="text-gray-300">flynn-nisbet</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <Github className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                <h3 className="font-semibold mb-2">GitHub</h3>
                <p className="text-gray-300">flynn-nisbet</p>
              </CardContent>
            </Card>
          </div>

          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 gap-2">
            <Mail className="w-4 h-4" />
            Send Message
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black text-gray-400 text-center">
        <div className="max-w-6xl mx-auto">
          <p>&copy; 2024 Flynn Nisbet. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
