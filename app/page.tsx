'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 shadow-lg' : 'bg-white/95'
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center py-4">
            <a href="#" className="flex items-center gap-3">
              <img
                src="https://i.ibb.co/jkDshtZW/Whats-App-Image-2026-11-17-at-1-08-58-PM.jpg"
                alt="NISAARI GLOBAL SOLUTIONS Logo"
                className="h-12 w-auto rounded-lg"
              />
              <span className="text-xl font-bold text-indigo-600">
                NISAARI GLOBAL SOLUTIONS
              </span>
            </a>
            <ul className="flex gap-8 hidden md:flex">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('home');
                  }}
                  className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('services');
                  }}
                  className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                  className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 text-center text-white">
        <div className="container mx-auto px-4">
          <img
            src="https://i.ibb.co/jkDshtZW/Whats-App-Image-2026-11-17-at-1-08-58-PM.jpg"
            alt="NISAARI GLOBAL SOLUTIONS Logo"
            className="h-32 w-auto mx-auto mb-8 rounded-2xl shadow-2xl animate-fade-in-up"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
            NISAARI GLOBAL SOLUTIONS
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up">
            Your Trusted Partner for Innovative IT Solutions
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-full font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '💻',
                title: 'Web Development',
                description: 'Custom websites and web applications tailored to your business needs',
              },
              {
                icon: '📱',
                title: 'Mobile Solutions',
                description: 'Native and cross-platform mobile app development',
              },
              {
                icon: '☁️',
                title: 'Cloud Services',
                description: 'Cloud infrastructure setup, migration, and management',
              },
              {
                icon: '🔒',
                title: 'Cybersecurity',
                description: 'Comprehensive security solutions to protect your digital assets',
              },
              {
                icon: '📊',
                title: 'Data Analytics',
                description: 'Business intelligence and data-driven insights',
              },
              {
                icon: '🤖',
                title: 'IT Consulting',
                description: 'Strategic technology guidance for business growth',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-indigo-600">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg leading-relaxed opacity-90">
              NISAARI GLOBAL SOLUTIONS is a leading IT solutions provider dedicated to
              delivering innovative technology services that help businesses thrive in the
              digital age. We combine technical expertise with a customer-centric approach
              to provide solutions that drive growth and efficiency.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                name: 'SHAIK SAMREEN ANJUM',
                role: 'Co-Founder & Director',
              },
              {
                name: 'SHAIK ARIFUNISSA BEGUM',
                role: 'Co-Founder & Director',
              },
            ].map((owner, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl text-center min-w-[280px]"
              >
                <h4 className="text-xl font-bold mb-2">{owner.name}</h4>
                <p className="opacity-80">{owner.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Contact Us
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-3 text-indigo-600">📍 Address</h3>
                <p className="text-gray-600 leading-relaxed">
                  Flat no 201, 3rd floor, above Indian Overseas Bank
                  <br />
                  KPR Colony, Puppalguda Main Road
                  <br />
                  Manikonda, Hyderabad - 500089
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-3 text-indigo-600">📧 Email</h3>
                <p>
                  <a
                    href="mailto:nizam.nilha@gmail.com"
                    className="text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    nizam.nilha@gmail.com
                  </a>
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-3 text-indigo-600">🏢 Company</h3>
                <p className="text-gray-600">NISAARI GLOBAL SOLUTIONS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <div className="container mx-auto px-4">
          <img
            src="https://i.ibb.co/jkDshtZW/Whats-App-Image-2026-11-17-at-1-08-58-PM.jpg"
            alt="NISAARI GLOBAL SOLUTIONS Logo"
            className="h-16 w-auto mx-auto mb-4 rounded-lg"
          />
          <p className="opacity-80">
            &copy; 2024 NISAARI GLOBAL SOLUTIONS. All Rights Reserved.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease forwards;
        }
      `}</style>
    </div>
  );
}
