import { ArrowLeft, Bell, Briefcase, Calendar, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProject = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    taskGroup: 'Work',
    projectName: 'Grocery Shopping App',
    description: 'This application is designed for super shops. By using this application they can enlist all their products in one place and can deliver. Customers will get a one-stop solution for their daily shopping.',
    startDate: '01 May, 2022',
    endDate: '30 June, 2022',
    logo: 'Grocery shop'
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic here
    console.log('Project data:', formData)
    navigate('/')
  }

  return (
    <div className="bg-white min-h-screen relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-14 -left-8 w-[451px] h-[839px] opacity-30">
          <div className="w-full h-full bg-gradient-to-br from-purple-100 via-blue-50 to-orange-50 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between px-6 pt-7 pb-4">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 -ml-2"
          aria-label="Geri dön"
        >
          <ArrowLeft className="w-6 h-6 text-gray-800" />
        </button>
        
        <h1 className="text-[19px] font-semibold text-[var(--text-primary)] font-['Lexend_Deca']">
          Add Project
        </h1>
        
        <div className="relative">
          <Bell className="w-6 h-6 text-gray-800" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="relative z-10 px-6 space-y-6">
        {/* Task Group */}
        <div className="bg-white rounded-[15px] shadow-[0px_4px_32px_0px_rgba(0,0,0,0.04)] p-4">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 bg-[var(--surface-pink-soft)] rounded-[7px] flex items-center justify-center">
              <Briefcase className="w-3.5 h-3.5 text-gray-600" />
            </div>
            <div className="flex-1">
              <label className="block text-[9px] text-[var(--text-secondary)] font-normal mb-1">
                Task Group
              </label>
              <div className="flex items-center justify-between">
                <span className="text-[14px] font-semibold text-[var(--text-primary)]">
                  {formData.taskGroup}
                </span>
                <ChevronDown className="w-6 h-6 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Project Name */}
        <div className="bg-white rounded-[15px] shadow-[0px_4px_32px_0px_rgba(0,0,0,0.04)] p-4">
          <label className="block text-[9px] text-[var(--text-secondary)] font-normal mb-1">
            Project Name
          </label>
          <input
            type="text"
            value={formData.projectName}
            onChange={(e) => handleInputChange('projectName', e.target.value)}
            className="w-full text-[14px] text-[var(--text-primary)] font-normal border-none outline-none bg-transparent"
            placeholder="Enter project name"
          />
        </div>

        {/* Description */}
        <div className="bg-white rounded-[15px] shadow-[0px_4px_32px_0px_rgba(0,0,0,0.04)] p-4 h-[142px]">
          <label className="block text-[9px] text-[var(--text-secondary)] font-normal mb-1">
            Description
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            className="w-full h-full text-[11px] text-[var(--text-primary)] font-normal border-none outline-none bg-transparent resize-none"
            placeholder="Enter project description"
            rows={4}
          />
        </div>

        {/* Start Date */}
        <div className="bg-white rounded-[15px] shadow-[0px_4px_32px_0px_rgba(0,0,0,0.04)] p-4">
          <div className="flex items-center gap-4">
            <Calendar className="w-6 h-6 text-gray-600" />
            <div className="flex-1">
              <label className="block text-[9px] text-[var(--text-secondary)] font-normal mb-1">
                Start Date
              </label>
              <div className="flex items-center justify-between">
                <span className="text-[14px] text-[var(--text-primary)]">
                  {formData.startDate}
                </span>
                <ChevronDown className="w-6 h-6 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* End Date */}
        <div className="bg-white rounded-[15px] shadow-[0px_4px_32px_0px_rgba(0,0,0,0.04)] p-4">
          <div className="flex items-center gap-4">
            <Calendar className="w-6 h-6 text-gray-600" />
            <div className="flex-1">
              <label className="block text-[9px] text-[var(--text-secondary)] font-normal mb-1">
                End Date
              </label>
              <div className="flex items-center justify-between">
                <span className="text-[14px] text-[var(--text-primary)]">
                  {formData.endDate}
                </span>
                <ChevronDown className="w-6 h-6 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Logo Section */}
        <div className="bg-white rounded-[15px] shadow-[0px_4px_32px_0px_rgba(0,0,0,0.04)] p-4">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">
                {formData.logo.split(' ').map(word => word[0]).join('')}
              </span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[14px] font-semibold text-[var(--accent-teal)]">
                  Grocery
                </span>
                <span className="text-[14px] font-semibold text-[var(--accent-orange)]">
                  shop
                </span>
              </div>
              <div className="bg-[var(--surface-purple-soft)] rounded-[7px] px-3 py-1 inline-block">
                <span className="text-[11px] text-[var(--primary)] font-normal">
                  Change Logo
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center mt-8">
          <div className="w-[310px] h-[7px] bg-gray-200 rounded-full">
            <div className="w-3/4 h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <button
            type="submit"
            className="w-full h-[52px] bg-gradient-to-r from-purple-600 to-blue-600 rounded-[15px] text-white font-semibold text-[19px] shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Add Project
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddProject
