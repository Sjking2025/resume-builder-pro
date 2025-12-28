/**
 * Resume Store - Zustand state management for resume data
 */
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const initialResumeData = {
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
    education: [],
    experience: [],
    projects: [],
    skills: {
        technical: [],
        soft: [],
        languages: []
    },
    achievements: []
}

const useResumeStore = create(
    persist(
        (set, get) => ({
            // Resume data
            resume: initialResumeData,

            // Template selection
            selectedTemplate: 'modern',

            // Export mode: 'digital' or 'print'
            exportMode: 'digital',

            // Dirty flag for unsaved changes
            isDirty: false,

            // Update personal info
            updatePersonalInfo: (field, value) => {
                set(state => ({
                    resume: {
                        ...state.resume,
                        personalInfo: { ...state.resume.personalInfo, [field]: value }
                    },
                    isDirty: true
                }))
            },

            // Update entire resume
            setResume: (resume) => {
                set({ resume, isDirty: true })
            },

            // Load resume (from import)
            loadResume: (data) => {
                set({
                    resume: { ...initialResumeData, ...data },
                    isDirty: false
                })
            },

            // Mark as clean (after save)
            markClean: () => set({ isDirty: false }),

            // Mark as dirty
            markDirty: () => set({ isDirty: true }),

            // Reset to initial state
            resetResume: () => set({
                resume: initialResumeData,
                isDirty: false
            }),

            // Set template
            setTemplate: (template) => set({ selectedTemplate: template }),

            // Set export mode
            setExportMode: (mode) => set({ exportMode: mode }),

            // Add education entry
            addEducation: (entry) => set(state => ({
                resume: {
                    ...state.resume,
                    education: [...state.resume.education, entry]
                },
                isDirty: true
            })),

            // Add experience entry
            addExperience: (entry) => set(state => ({
                resume: {
                    ...state.resume,
                    experience: [...state.resume.experience, entry]
                },
                isDirty: true
            })),

            // Add project entry
            addProject: (entry) => set(state => ({
                resume: {
                    ...state.resume,
                    projects: [...state.resume.projects, entry]
                },
                isDirty: true
            })),

            // Update skills
            updateSkills: (skills) => set(state => ({
                resume: {
                    ...state.resume,
                    skills
                },
                isDirty: true
            }))
        }),
        {
            name: 'resume-storage',
            version: 1
        }
    )
)

export default useResumeStore
