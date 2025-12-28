"""
ResumeCrew - AI Agent orchestration for resume analysis
Uses Google Gemini for parsing and analysis
"""

import os
import json
import re
from typing import Optional

try:
    import google.generativeai as genai
    GEMINI_AVAILABLE = True
except ImportError:
    GEMINI_AVAILABLE = False
    print("Warning: google-generativeai not installed")


class ResumeCrew:
    """Orchestrates AI agents for resume analysis"""
    
    def __init__(self):
        self.api_key = os.getenv("GOOGLE_API_KEY")
        if self.api_key and GEMINI_AVAILABLE:
            genai.configure(api_key=self.api_key)
            self.model = genai.GenerativeModel('gemini-1.5-flash')
        else:
            self.model = None
    
    def parse_resume_for_import(self, resume_text: str) -> dict:
        """Parse resume text and extract structured data."""
        if not self.model:
            raise ValueError("AI model not initialized. Check GOOGLE_API_KEY.")
        
        prompt = self._get_parsing_prompt(resume_text)
        
        try:
            response = self.model.generate_content(prompt)
            raw_response = response.text
            
            # Extract JSON from response
            parsed_data = self._extract_json(raw_response)
            
            # Normalize to match frontend schema
            return self._normalize_import_data(parsed_data)
        except Exception as e:
            print(f"Error parsing resume: {e}")
            return self._get_empty_template()
    
    def _get_parsing_prompt(self, resume_text: str) -> str:
        """Generate the prompt for parsing resume text."""
        return f'''Analyze this resume and extract ALL information into JSON format.

RESUME TEXT:
{resume_text}

OUTPUT FORMAT (valid JSON only):
{{
  "personalInfo": {{
    "fullName": "name",
    "email": "email",
    "phone": "phone",
    "location": "city, state",
    "linkedin": "linkedin url or empty",
    "github": "github url or empty",
    "portfolio": "website url or empty",
    "summary": "professional summary"
  }},
  "education": [
    {{
      "degree": "degree name",
      "field": "field of study",
      "institution": "school name",
      "location": "school location",
      "graduationDate": "date",
      "gpa": "gpa or empty"
    }}
  ],
  "experience": [
    {{
      "title": "job title",
      "company": "company name",
      "location": "job location",
      "startDate": "start date",
      "endDate": "end date or empty if current",
      "current": false,
      "description": "bullet points as text"
    }}
  ],
  "projects": [
    {{
      "name": "project name",
      "technologies": "comma-separated tech",
      "description": "description",
      "link": "url or empty"
    }}
  ],
  "skills": {{
    "technical": ["skill1", "skill2"],
    "soft": ["skill1", "skill2"],
    "languages": ["language1"]
  }},
  "achievements": [
    {{
      "title": "achievement title",
      "date": "date or empty",
      "description": "description or empty"
    }}
  ]
}}

RULES:
1. Extract ALL information found
2. Use empty string "" if not found
3. Mark "current": true if job says Present/Current
4. Respond with ONLY valid JSON, no other text'''

    def _extract_json(self, text: str) -> dict:
        """Extract JSON from AI response text."""
        # Try to find JSON in response
        json_match = re.search(r'\{[\s\S]*\}', text)
        if json_match:
            try:
                return json.loads(json_match.group())
            except json.JSONDecodeError:
                pass
        return {}
    
    def _normalize_import_data(self, data: dict) -> dict:
        """Normalize parsed data to match frontend store schema."""
        return {
            "personalInfo": {
                "fullName": data.get("personalInfo", {}).get("fullName", ""),
                "email": data.get("personalInfo", {}).get("email", ""),
                "phone": data.get("personalInfo", {}).get("phone", ""),
                "location": data.get("personalInfo", {}).get("location", ""),
                "linkedin": data.get("personalInfo", {}).get("linkedin", ""),
                "github": data.get("personalInfo", {}).get("github", ""),
                "portfolio": data.get("personalInfo", {}).get("portfolio", ""),
                "summary": data.get("personalInfo", {}).get("summary", ""),
            },
            "education": data.get("education", []),
            "experience": data.get("experience", []),
            "projects": data.get("projects", []),
            "skills": {
                "technical": data.get("skills", {}).get("technical", []),
                "soft": data.get("skills", {}).get("soft", []),
                "languages": data.get("skills", {}).get("languages", []),
            },
            "achievements": data.get("achievements", []),
        }
    
    def _get_empty_template(self) -> dict:
        """Return empty template structure."""
        return {
            "personalInfo": {
                "fullName": "", "email": "", "phone": "", "location": "",
                "linkedin": "", "github": "", "portfolio": "", "summary": ""
            },
            "education": [],
            "experience": [],
            "projects": [],
            "skills": {"technical": [], "soft": [], "languages": []},
            "achievements": []
        }
