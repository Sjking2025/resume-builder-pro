# Resume Builder Platform 🚀

A 100% free, AI-powered resume platform that feels like premium tools (Resume.io, Rezi, Novorésumé) but is student-first, privacy-respecting, and completely open.

## ✨ Features

### Phase 1 (MVP) - Available Now
- ✅ **Professional Templates**: ATS-friendly and modern resume templates
- ✅ **Form-Based Editor**: Structured sections for personal info, experience, education, projects, skills, and achievements
- ✅ **Live Preview**: Real-time preview that updates as you type
- ✅ **Smart Draft Protection**: Never lose your work with auto-save and unsaved changes warnings
- ✅ **PDF Export**: Generate pixel-perfect, ATS-friendly PDFs
- ✅ **100% Free**: No watermarks, no paywalls, no dark UX patterns

### Coming Soon
- 🔮 **AI Resume Assistant**: Multi-agent AI system for content improvement
- 🔮 **Resume Parser**: Upload existing resumes and get instant feedback
- 🔮 **ATS Scoring**: Get your resume scored against job descriptions
- 🔮 **Job Description Matching**: Align your resume to specific job postings

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
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd "Resume Builder Platform"
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

4. **Set up environment variables**
   ```bash
   cd server
   cp .env.example .env
   # Edit .env if needed
   ```

### Running Locally

1. **Start the backend server**
   ```bash
   cd server
   npm run dev
   ```
   Server will run on `http://localhost:5000`

2. **Start the frontend** (in a new terminal)
   ```bash
   cd client
   npm run dev
   ```
   App will run on `http://localhost:5173`

3. **Open your browser** and navigate to `http://localhost:5173`

## 🏗️ Tech Stack

### Frontend
- **React 18** - UI framework
- **Tailwind CSS** - Styling
- **Zustand** - State management
- **React Router** - Navigation
- **React DnD** - Drag & drop functionality
- **React Icons** - Icon library
- **Vite** - Build tool

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **Puppeteer** - PDF generation
- **Helmet** - Security
- **CORS** - Cross-origin resource sharing

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

### Resume Templates
1. **ATS-Friendly Template**: Clean, structured layout optimized for Applicant Tracking Systems
2. **Modern Template**: Visually appealing design with color accents and icons

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

### Phase 2 - Intelligence
- Resume parsing from PDF
- Job description matching algorithm
- ATS scoring system
- Keyword analysis

### Phase 3 - AI Features
- Content improvement agent
- JD matching agent
- Skill gap analyzer
- ATS optimization agent

## 💖 Built With Love

Built by students, for students. We understand the struggle of creating the perfect resume.

---

**Star ⭐ this repo if it helped you land your dream job!**
