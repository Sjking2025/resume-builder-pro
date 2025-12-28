# Resume Builder Platform 🚀

A 100% free, AI-powered resume platform that feels like premium tools (Resume.io, Rezi, Novorésumé) but is student-first, privacy-respecting, and completely open.

## ✨ Features

### Phase 1 (MVP) - Available Now
- ✅ **18 Professional Templates**: ATS-friendly and modern resume templates with live preview
- ✅ **Form-Based Editor**: Structured sections for personal info, experience, education, projects, skills, and achievements
- ✅ **Live Preview**: Real-time preview that updates as you type
- ✅ **Smart Draft Protection**: Never lose your work with auto-save and unsaved changes warnings
- ✅ **PDF Export**: Generate pixel-perfect, ATS-friendly PDFs
- ✅ **100% Free**: No watermarks, no paywalls, no dark UX patterns

### Phase 2 (AI-Powered) - 🆕 Available Now!
- ✅ **Resume Import**: Upload existing resume PDF → AI extracts data → Auto-fills all form fields
- ✅ **AI Resume Analysis**: Comprehensive multi-agent analysis using CrewAI + Google Gemini 2.5 Flash
- ✅ **ATS Scoring**: Get your resume scored with detailed breakdown (keyword match, formatting, skills coverage)
- ✅ **Job Description Matching**: Align your resume to specific job postings with skill gap analysis
- ✅ **Export Mode Toggle**: Switch between Digital/ATS (shows URLs) and Print Copy (shows labels) modes

### Coming Soon
- 🔮 **Personalized Learning Roadmap**: AI-generated skill development paths based on career goals

## 🎯 Core Promise

- ❌ No watermarks
- ❌ No paywalls
- ❌ No dark UX tricks
- ✅ Same power as premium tools
- ✅ Privacy-first (your data stays on your device)
- ✅ Student-focused

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- Python 3.10+ (for AI features)
- npm or yarn
- Google API Key (for AI features - get free at [Google AI Studio](https://aistudio.google.com/app/apikey))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sjking2025/resume-builder-pro.git
   cd resume-builder-pro
   ```

2. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd ../server
   npm install
   ```

4. **Set up Python AI service**
   ```bash
   cd ../ai_service
   python -m venv venv
   .\venv\Scripts\activate  # Windows
   # source venv/bin/activate  # Mac/Linux
   pip install -r requirements.txt
   ```

5. **Set up environment variables**
   ```bash
   # In ai_service folder
   cp .env.example .env
   # Edit .env and add your GOOGLE_API_KEY
   ```

### Running Locally

1. **Start the AI service** (Terminal 1)
   ```bash
   cd ai_service
   .\venv\Scripts\activate
   uvicorn main:app --port 8000
   ```
   AI service will run on `http://localhost:8000`

2. **Start the backend server** (Terminal 2)
   ```bash
   cd server
   npm run dev
   ```
   Server will run on `http://localhost:5000`

3. **Start the frontend** (Terminal 3)
   ```bash
   cd client
   npm run dev
   ```
   App will run on `http://localhost:5173`

4. **Open your browser** and navigate to `http://localhost:5173`

## 🏗️ Tech Stack

### Frontend
- **React 18** - UI framework
- **Tailwind CSS** - Styling
- **Zustand** - State management
- **React Router** - Navigation
- **React Icons** - Icon library
- **Vite** - Build tool

### Backend
- **Node.js** - Runtime
- **Express** - Web framework with API proxy
- **Puppeteer** - PDF generation
- **Axios + Form-data** - File upload handling

### AI Service
- **Python FastAPI** - AI service framework
- **CrewAI** - Multi-agent orchestration
- **Google Gemini 2.5 Flash** - LLM for analysis
- **PyPDF2** - PDF text extraction

## 📁 Project Structure

```
Resume Builder Platform/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── editor/   # Form components
│   │   │   ├── templates/# Resume templates
│   │   │   ├── preview/  # Live preview
│   │   │   └── DraftProtection/ # Auto-save system
│   │   ├── pages/        # Page components
│   │   ├── store/        # Zustand store
│   │   └── main.jsx      # Entry point
│   └── package.json
│
├── server/                # Backend Node.js server
│   ├── routes/           # API routes
│   ├── services/         # Business logic
│   │   └── pdfGenerator.js
│   ├── index.js          # Server entry point
│   └── package.json
│
└── README.md
```

## 🎨 Features in Detail

### Draft Protection
- Auto-saves every 3 seconds to localStorage
- Warns before leaving with unsaved changes
- Detects browser back, refresh, and close attempts
- Draft recovery on page reload

### Resume Templates (18 Total)
- **ATS-Friendly**, **Modern**, **Classic**, **Executive**, **Elegant**
- **Creative**, **TwoColumn**, **Minimal**, **Corporate**, **Compact**
- **Sidebar**, **Academic**, **Professional**, **BoldHeader**, **BlueAccent**
- **CleanGrid**, **Technical**, **ModernSplit**

### Export Mode Toggle
- **Digital/ATS Mode**: Shows actual URLs (linkedin.com/in/yourname) - best for AI parsing
- **Print Copy Mode**: Shows labels only (LinkedIn) - cleaner for printed copies

### Resume Import (AI-Powered)
1. Upload your existing resume PDF
2. AI extracts all data (name, contact, experience, education, skills, projects)
3. Auto-fills all form fields in the editor
4. Review and edit as needed

### PDF Export
- Server-side PDF generation using Puppeteer
- ATS-compliant formatting
- Selectable text for parsing
- Professional page layout

## 🔒 Privacy

- **No account required** for basic use
- **LocalStorage only** - your data never leaves your browser
- **No tracking** or analytics
- **Open source** - verify the code yourself

## 🤝 Contributing

This is a student-first project! Contributions are welcome.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 🎓 Perfect for Students

This project demonstrates:
- ✅ Full-stack development (React + Node.js)
- ✅ State management (Zustand)
- ✅ PDF generation (Puppeteer)
- ✅ Real-time updates
- ✅ Draft protection patterns
- ✅ Modern UI/UX design
- ✅ RESTful API design
- ✅ Privacy-first architecture

## 🚀 Roadmap

### ✅ Phase 1 - MVP (Complete)
- 18 professional templates
- Form-based editor with live preview
- PDF export

### ✅ Phase 2 - Intelligence (Complete)
- Resume parsing from PDF
- Job description matching algorithm  
- ATS scoring system
- Keyword analysis

### ✅ Phase 3 - AI Features (Complete)
- Multi-agent analysis with CrewAI
- Content improvement suggestions
- JD matching agent
- Skill gap analyzer
- Resume import with AI parsing

### 🔮 Phase 4 - Coming Soon
- Personalized learning roadmap engine
- Progress tracking for skill development
- Integration with online learning platforms

## 💖 Built With Love

Built by students, for students. We understand the struggle of creating the perfect resume.

---

**Star ⭐ this repo if it helped you land your dream job!**
