import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareTwitter, faLinkedin, faSquareYoutube, faSquareFacebook, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

const MenuOverlay = () => {
  const [activeSection, setActiveSection] = useState("about");

  const sectionData = {
    about: ["Overview", "Vision & Mission", "Institute Leadership", "Accreditations & Rankings", "Campus Facilities", "Research & Innovation", "Governance & Policies", "Contact & Location"],
    admissions: ["Why Choose SIT?", "Courses Offered", "Admission Process", "Eligibility Criteria", "Fees & Scholarships", "Important Dates", "International Admissions", "Download Prospectus", "FAQs"],
    academics: ["Departments & Programs", "Faculty Directory", "Academic Calendar", "Curriculum & Syllabus", "Examinations & Results", "Student Support Services", "Research & Publications", "E-Learning Portal"],
    studentlife: ["Clubs & Societies", "Events & Fests", "Sports & Athletics", "Hostel & Accommodation", "Cafeteria & Food Services", "Student Council", "Anti-Ragging Cell", "Alumni Network"],
    placements: ["Placement Overview", "Top Recruiters", "Placement Statistics", "Internships", "Skill Development Programs", "Resume & Interview Prep", "Career Guidance Cell", "Entrepreneurship & Startups"],
    news: ["Latest News", "Announcements", "Upcoming Events", "Media Coverage", "Press Releases", "Student Achievements", "Awards & Recognitions"],
  };

  return (
    <div id="menu-overlay" className="fixed top-[110px] left-0 w-full h-[calc(100vh-60px)] bg-white bg-opacity-90 z-40 px-4 md:px-40">
      <div className="p-6 grid grid-cols-3 gap-4 relative h-full">
        <div className="absolute top-0 left-1/3 h-full w-px bg-gray-300"></div>
        <div className="absolute top-0 left-2/3 h-full w-px bg-gray-300"></div>
        <div className="pr-4">
          <h2 className="text-base font-light text-blue-900">Sections</h2>
          <ul id="sections-list" className="mt-4 space-y-4 text-xl">
            {Object.keys(sectionData).map((section) => (
              <li
                key={section}
                className={`cursor-pointer text-blue-900 hover:text-red-700 ${activeSection === section ? "text-red-800" : ""}`}
                onClick={() => setActiveSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1).replace(/([A-Z])/g, " $1")}
              </li>
            ))}
          </ul>
        </div>
        <div className="pl-4">
          <h2 id="active-section-title" className="text-base font-light text-blue-900">
            {activeSection.charAt(0).toUpperCase() + activeSection.slice(1).replace(/([A-Z])/g, " $1")}
          </h2>
          <ul id="section-content" className="mt-4 space-y-4 text-xl text-blue-800">
            {sectionData[activeSection].map((item, index) => (
              <li key={index} className="py-1 cursor-pointer hover:text-red-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="pl-4">
          <h2 className="text-base font-light text-gray-700">Quick Links</h2>
          <ul className="mt-4 space-y-4 text-xl text-gray-700">
            <li className="cursor-pointer hover:text-black">Student Login</li>
            <li className="cursor-pointer hover:text-black">Faculty Login</li>
            <li className="cursor-pointer hover:text-black">Library</li>
            <li className="cursor-pointer hover:text-black">Online Payments</li>
            <li className="cursor-pointer hover:text-black">Contact & Help</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-300 w-full fixed bottom-0 bg-white">
        <div className="flex justify-start items-center w-full px-6 py-3">
          {/* Social Icons */}
          <div className="flex space-x-4">
            <button className="p-2">
              <FontAwesomeIcon icon={faSquareTwitter} className="h-6 w-6" />
            </button>
            <button className="p-2">
              <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
            </button>
            <button className="p-2">
              <FontAwesomeIcon icon={faSquareYoutube} className="h-6 w-6" />
            </button>
            <button className="p-2">
              <FontAwesomeIcon icon={faSquareFacebook} className="h-6 w-6" />
            </button>
            <button className="p-2">
              <FontAwesomeIcon icon={faSquareInstagram} className="h-6 w-6" />
            </button>
          </div>

          {/* College Address & Details */}
          <div className="text-sm text-gray-700 ml-10">
            <strong>Siliguri Institute of Technology</strong> · Hill Cart Road, Salbari, Siliguri ·
            0353-2778002 · info@sittechno.org
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
