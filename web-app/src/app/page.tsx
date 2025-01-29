/* eslint-disable @next/next/no-img-element */
import { Download, Droplets, Leaf, PlayCircle, Smartphone } from "lucide-react"
import Image from "next/image"
// import { PhoneMockup } from "./componants/Phone-mockup"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold">Hydrify</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          
        </div>
        <button className="px-6 py-2 bg-[#8A3FFC] text-white rounded-full hover:bg-[#7B2FED] transition-colors">
          Contact
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="relative mx-auto py-20 md:py-32 px-6 max-w-7xl">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-32  h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-40 -left-32  h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          </div>
          
          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full">
                <Droplets className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-800 font-medium">Smart Irrigation System</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                The future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">irrigation</span> is now!
              </h1>
              
              <p className="text-lg text-gray-600">
                Hydrify is a revolutionary wireless precision irrigation automation system that helps you save water, time, and money while keeping your plants healthy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group shadow-lg shadow-blue-600/20">
                  <span>Watch Demo</span>
                  <PlayCircle className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-6 py-3 bg-white rounded-full flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm">
                  <Download className="w-5 h-5 text-gray-700" />
                  <span className="text-gray-700">Download App</span>
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">95%</div>
                  <div className="text-sm text-gray-600">Water Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">10k+</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Monitoring</div>
                </div>
              </div>
            </div>
            
            <div className="relative p-5">
              {/* Phone Frame */}
              <div className="relative mx-auto w-[280px] h-[580px] bg-gray-900 rounded-[3rem] shadow-2xl p-4 ring-1 ring-gray-900/10">
                {/* Notch */}
                <div className="absolute top-0 inset-x-0 h-6 flex justify-center">
                  <div className="w-40 h-6 bg-gray-900 rounded-b-3xl"></div>
                </div>
                {/* Screen */}
                <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-white">
                  <img 
                    src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=800&q=80" 
                    alt="Smart Irrigation System" 
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute bottom-[20%] -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4 shadow-lg">
                <div className="p-3 bg-green-100 rounded-full">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Eco-Friendly</div>
                  <div className="text-xs text-gray-600">Reduces water waste</div>
                </div>
              </div>
              
              <div className="absolute top-[30%] -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4 shadow-lg">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Smart Control</div>
                  <div className="text-xs text-gray-600">Mobile app enabled</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Smart Features for Smarter Irrigation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take control of your irrigation system with our intelligent features designed to save water and optimize plant health.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Droplets className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Scheduling</h3>
              <p className="text-gray-600">Automatically adjusts watering schedules based on weather conditions and soil moisture levels.</p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Remote Control</h3>
              <p className="text-gray-600">Control your irrigation system from anywhere using our mobile app with real-time monitoring.</p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100/50 border border-green-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Water Conservation</h3>
              <p className="text-gray-600">Save up to 95% water with our precision irrigation technology and smart sensors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto py-16 px-6 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Seamless control</h2>
          <h3 className="text-2xl font-semibold">anytime and anywhere</h3>
          <p className="max-w-2xl mx-auto text-gray-600">
            With Hydrify app you can take full control of your irrigation anytime from anywhere in the world. The
            control and monitoring of your irrigation is at your fingertips. Cloud intelligence, weather data and AI
            updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="grid gap-6 md:col-span-2">
            <BentoCard
              image="/images/image2.jpeg"
              title="Consistent irrigation"
              description="No matter what you grow – with Hydrify you'll always achieve consistent results."
              variant="image"
              className="h-[300px]"
            />
            <div className="grid grid-cols-2 gap-6">
              <BentoCard
                title="Feel safe"
                description="Advanced monitoring ensures your garden is always properly watered."
                variant="toggle"
              />
              <BentoCard
                title="Intelligent irrigation"
                description="Smart sensors provide real-time data for optimal watering."
                variant="purple"
              />
            </div>
          </div>
          <div className="grid gap-6">
            <BentoCard
              image="/images/image1.jpeg"
              title="Save 50% of water"
              description="By optimizing the irrigation at the right moment"
              variant="success"
              className="h-[400px]"
            />
            <BentoCard title="Smart Control" description="Take control from anywhere in the world" variant="default" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Updates
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Status
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t">
            <p className="text-sm text-gray-600">© 2024 Hydrify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function BentoCard({
  image,
  title,
  description,
  variant = "default",
  className = "",
}: {
  image?: string
  title: string
  description: string
  variant?: "default" | "success" | "purple" | "toggle" | "image"
  className?: string
}) {
  const variants = {
    default: "bg-gray-50",
    success: "bg-[#0D894F] text-white",
    purple: "bg-[#8A3FFC] text-white",
    toggle: "bg-gray-900 text-white",
    image: "relative overflow-hidden",
  }

  if (variant === "image") {
    return (
      <div className={`rounded-2xl ${variants[variant]} ${className}`}>
        {image && <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 p-6 text-white h-full flex flex-col justify-end">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-white/90">{description}</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`rounded-2xl p-6 ${variants[variant]} ${className}`}>
      {image && (
        <div className="aspect-[4/3] relative mb-4">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover rounded-xl" />
        </div>
      )}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        {variant !== "default" && <div className="w-12 h-6 bg-white/20 rounded-full" />}
      </div>
      <p className={variant === "default" ? "text-gray-600" : "text-white/90"}>{description}</p>
    </div>
  )
}