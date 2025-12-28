import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaHome, FaDownload, FaRobot, FaFileUpload } from 'react-icons/fa'

/**
 * EditorPage - Resume Builder Editor
 * Simplified version for initial deployment
 */
const EditorPage = () => {
  const navigate = useNavigate()
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      linkedin: '',
      github: '',
      portfolio: '',
      summary: ''
    },
    experience: [],
    education: [],
    skills: { technical: [], soft: [], languages: [] },
    projects: [],
    achievements: []
  })

  const updatePersonalInfo = (field, value) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value }
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              <FaHome /> Home
            </button>
            <h1 className="text-xl font-bold text-gray-800">Resume Editor</h1>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/analyze')}
              className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
            >
              <FaRobot /> AI Analysis
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
            >
              <FaDownload /> Export PDF
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Personal Information</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  value={resumeData.personalInfo.fullName}
                  onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={resumeData.personalInfo.email}
                    onChange={(e) => updatePersonalInfo('email', e.target.value)}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    value={resumeData.personalInfo.phone}
                    onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                    placeholder="+1 234 567 8900"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  value={resumeData.personalInfo.location}
                  onChange={(e) => updatePersonalInfo('location', e.target.value)}
                  placeholder="New York, NY"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Professional Summary</label>
                <textarea
                  value={resumeData.personalInfo.summary}
                  onChange={(e) => updatePersonalInfo('summary', e.target.value)}
                  placeholder="A brief summary of your professional background..."
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                />
              </div>
            </div>
            
            <p className="mt-6 text-sm text-gray-500 text-center">
              More sections coming soon: Experience, Education, Skills, Projects
            </p>
          </div>

          {/* Preview Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Live Preview</h2>
            
            <div className="border border-gray-200 rounded-lg p-6 min-h-[500px] bg-gray-50">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  {resumeData.personalInfo.fullName || 'Your Name'}
                </h3>
                <p className="text-gray-600">
                  {[
                    resumeData.personalInfo.email,
                    resumeData.personalInfo.phone,
                    resumeData.personalInfo.location
                  ].filter(Boolean).join(' | ') || 'Contact Information'}
                </p>
              </div>
              
              {resumeData.personalInfo.summary && (
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-1 mb-2">
                    Professional Summary
                  </h4>
                  <p className="text-gray-700 text-sm">
                    {resumeData.personalInfo.summary}
                  </p>
                </div>
              )}
              
              <div className="text-center text-gray-400 mt-8">
                <p>Add more information to see your complete resume</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default EditorPage
