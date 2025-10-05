import React from 'react';
import Head from 'next/head';

const SAPJobDemo: React.FC = () => {
  return (
    <>
      <Head>
        <title>SAP iXp Intern Application Demo - David Lim</title>
        <meta name="description" content="Demo application for SAP Analytics Cloud Security Engineer internship position" />
        <link rel="icon" href="/DL.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              SAP iXp Internship Application Demo
            </h1>
            <p className="text-xl text-gray-300 mb-2">
              SAP Analytics Cloud Security Engineer - Vancouver
            </p>
            <p className="text-lg text-gray-400">
              Application Date: August 24, 2025
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Job Overview Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="bg-blue-500 w-3 h-3 rounded-full mr-3"></span>
                Position Overview
              </h2>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span className="font-semibold">Company:</span>
                  <span>SAP</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Location:</span>
                  <span>Vancouver, BC</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Duration:</span>
                  <span>8 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Start Date:</span>
                  <span>September 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Work Hours:</span>
                  <span>40 hours/week</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Salary Range:</span>
                  <span>$24-35 CAD/hour</span>
                </div>
              </div>
            </div>

            {/* Key Responsibilities Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="bg-green-500 w-3 h-3 rounded-full mr-3"></span>
                Key Responsibilities
              </h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Work with Cloud Architecture teams on security, risk and governance
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Analyze security test results for target environments
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Conduct vulnerability assessments and penetration testing
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Contribute to hands-on coding, design, and architecture
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Collaborate in remote team environments
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Assess new technology and infrastructure
                </li>
              </ul>
            </div>

            {/* Required Skills Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="bg-yellow-500 w-3 h-3 rounded-full mr-3"></span>
                Required Skills
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-white mb-2">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">JavaScript</span>
                    <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm">Java</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Python</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Technical Skills</h3>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Data structures & algorithms</li>
                    <li>• Object-oriented design principles</li>
                    <li>• Database & web application servers</li>
                    <li>• Software security (authentication, cryptography)</li>
                    <li>• IT security (network security, firewalls, IPS)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Preferred Qualifications Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="bg-purple-500 w-3 h-3 rounded-full mr-3"></span>
                Preferred Qualifications
              </h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Previous internship experience
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Experience with networking analysis tools (Nmap, Wireshark, ZAP, BurpSuite)
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Prior experience with AWS/Azure/GCP
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Computer Science or Engineering degree
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Currently enrolled or recently graduated
                </li>
              </ul>
            </div>

            {/* About SAP Card */}
            <div className="lg:col-span-2 bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="bg-indigo-500 w-3 h-3 rounded-full mr-3"></span>
                About SAP iXp Internship Program
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
                <div className="text-center">
                  <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">Culture of Collaboration</h3>
                  <p className="text-sm">Meet with mentors, make new friends across the globe and create a thriving personal network.</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">Project-Driven Experience</h3>
                  <p className="text-sm">Gain cross-functional skills from virtual and in-person learning sessions, diverse subject matter experts.</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">👁️</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">Gain Visibility</h3>
                  <p className="text-sm">Access to a global network of SAP leaders, entrepreneurs and career development opportunities.</p>
                </div>
              </div>
            </div>

            {/* Team Information Card */}
            <div className="lg:col-span-2 bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="bg-orange-500 w-3 h-3 rounded-full mr-3"></span>
                Meet Your Team
              </h2>
              <p className="text-gray-300 leading-relaxed">
                The SAP Analytics Cloud team is looking for energetic and innovative individuals to help with our 
                next generation cloud-based Analytics platform on the topic of security. We're passionate about 
                security and understand the importance of end-to-end security, data protection and compliance of 
                SAP's technology development and operations. Our team thrives with strong engineers to learn from, 
                where all members of the engineering team, including management, are close to the code and making 
                technical contributions.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center mt-12">
            <a 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              ← Back to Portfolio
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SAPJobDemo;