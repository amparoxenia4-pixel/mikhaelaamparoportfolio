/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  CheckCircle2, 
  Database, 
  Calendar, 
  FileText, 
  Search, 
  MessageSquare, 
  Layout, 
  Clock, 
  ShieldCheck, 
  Target, 
  GraduationCap, 
  Award,
  Plus,
  Folder,
  Inbox,
  Droplets,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

// Editable Photo Component
const EditablePhoto = ({ className, initialImage, label }: { className?: string, initialImage?: string, label: string }) => {
  const [image, setImage] = useState(initialImage || "https://picsum.photos/seed/profile/400/600");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className={`relative group overflow-hidden rounded-2xl shadow-xl ${className}`}>
      <img 
        src={image} 
        alt={label} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <button 
          onClick={() => setIsEditing(true)}
          className="bg-white text-deep-brown px-4 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-soft-pink transition-colors"
        >
          <Plus size={18} /> Change Photo
        </button>
      </div>
      
      {isEditing && (
        <div className="absolute inset-0 bg-white/95 p-4 flex flex-col items-center justify-center z-10">
          <p className="text-xs font-bold text-deep-brown mb-2">Paste Image URL</p>
          <input 
            type="text" 
            className="w-full p-2 border border-light-brown rounded text-xs mb-2"
            placeholder="https://example.com/photo.jpg"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setImage((e.target as HTMLInputElement).value);
                setIsEditing(false);
              }
            }}
          />
          <div className="flex gap-2">
            <button 
              onClick={() => setIsEditing(false)}
              className="text-[10px] uppercase tracking-wider font-bold text-gray-500"
            >
              Cancel
            </button>
            <button 
              onClick={() => {
                const input = document.querySelector('input') as HTMLInputElement;
                if (input.value) setImage(input.value);
                setIsEditing(false);
              }}
              className="text-[10px] uppercase tracking-wider font-bold text-accent-pink"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-soft-pink selection:text-deep-brown">
      {/* Navigation - Simple Sticky */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-light-brown/20">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-display font-bold text-deep-brown tracking-tighter text-xl">MA.</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#about" className="hover:text-accent-pink transition-colors">About</a>
            <a href="#services" className="hover:text-accent-pink transition-colors">Services</a>
            <a href="#experience" className="hover:text-accent-pink transition-colors">Experience</a>
            <a href="#samples" className="hover:text-accent-pink transition-colors">Sample Work</a>
            <a href="#contact" className="hover:text-accent-pink transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* 1. COVER PAGE */}
      <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white via-soft-pink/30 to-light-brown/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl text-deep-brown mb-4 leading-tight">
              MIKHAELA <br /> <span className="text-accent-pink">AMPARO</span>
            </h1>
            <p className="text-xl md:text-2xl font-display font-medium text-gray-600 mb-8">
              Virtual Assistant | Healthcare Support Specialist
            </p>
            <div className="space-y-4 mb-10">
              <p className="flex items-center gap-3 text-gray-600 font-medium">
                <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-accent-pink"><Target size={16} /></span>
                Detail-Oriented | Patient-Focused | Data & Admin Expert
              </p>
              <div className="flex flex-wrap gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-2"><MapPin size={16} className="text-accent-pink" /> Cavite, Philippines</span>
                <span className="flex items-center gap-2"><Mail size={16} className="text-accent-pink" /> amparo.mikhaela@gmail.com</span>
                <span className="flex items-center gap-2"><Phone size={16} className="text-accent-pink" /> 0965 321 1881</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#contact" className="bg-deep-brown text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl">
                Let's Work Together
              </a>
              <a href="https://www.linkedin.com/in/amparomikhaela" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full border-2 border-light-brown flex items-center justify-center text-deep-brown hover:bg-soft-pink transition-all">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <EditablePhoto 
              className="aspect-[3/4] max-w-md mx-auto md:ml-auto" 
              label="Cover Photo"
              initialImage="https://picsum.photos/seed/mikhaela1/600/800"
            />
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-soft-pink -z-10 rounded-2xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-light-brown -z-10 rounded-2xl"></div>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT ME */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <EditablePhoto 
              className="aspect-square max-w-md mx-auto" 
              label="About Photo"
              initialImage="https://picsum.photos/seed/mikhaela2/800/800"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="text-4xl text-deep-brown mb-8 flex items-center gap-4">
              <span className="w-12 h-1 bg-accent-pink rounded-full"></span>
              About Me
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                I am a detail-oriented Medical Assistant and aspiring Virtual Assistant with hands-on experience in healthcare operations, patient coordination, and administrative support.
              </p>
              <p>
                With a strong background in laboratory services and data management, I bring accuracy, efficiency, and professionalism to every task. I specialize in handling sensitive information, managing schedules, and supporting high-volume workflows—making me a reliable remote support partner for healthcare providers and businesses.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="p-4 bg-soft-pink/30 rounded-xl border border-soft-pink">
                <h4 className="font-bold text-deep-brown mb-1">Accuracy</h4>
                <p className="text-sm text-gray-500">Meticulous data management</p>
              </div>
              <div className="p-4 bg-light-brown/20 rounded-xl border border-light-brown/30">
                <h4 className="font-bold text-deep-brown mb-1">Reliability</h4>
                <p className="text-sm text-gray-500">Consistent remote support</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. CORE SERVICES */}
      <section id="services" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-deep-brown mb-4">Services I Offer</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Providing specialized support at the intersection of healthcare expertise and virtual assistance.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Medical Virtual Assistance", icon: <ShieldCheck className="text-accent-pink" /> },
              { title: "Data Entry & Record Management", icon: <Database className="text-accent-pink" /> },
              { title: "Patient Scheduling & Coordination", icon: <Calendar className="text-accent-pink" /> },
              { title: "Email & Calendar Management", icon: <Inbox className="text-accent-pink" /> },
              { title: "File Organization", icon: <Folder className="text-accent-pink" />, sub: "(Google Drive, Dropbox)" },
              { title: "Online Research & Admin Support", icon: <Search className="text-accent-pink" /> },
              { title: "Laboratory Data Encoding", icon: <FileText className="text-accent-pink" /> },
              { title: "Customer Support", icon: <MessageSquare className="text-accent-pink" /> },
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-light-brown/20 group"
              >
                <div className="w-12 h-12 bg-soft-pink/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-pink group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-bold text-deep-brown mb-2">{service.title}</h3>
                {service.sub && <p className="text-xs text-gray-400">{service.sub}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TOOLS & 5. SKILLS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
          {/* Tools */}
          <div>
            <h2 className="text-3xl text-deep-brown mb-10 flex items-center gap-4">Tools I Use</h2>
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-accent-pink mb-4">Productivity</h4>
                <div className="flex flex-wrap gap-3">
                  {['MS Word', 'Excel', 'PowerPoint', 'Google Docs', 'Sheets'].map(t => (
                    <span key={t} className="px-4 py-2 bg-stone-100 rounded-lg text-sm font-medium text-gray-600">{t}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-accent-pink mb-4">Communication</h4>
                <div className="flex flex-wrap gap-3">
                  {['Gmail', 'Zoom', 'Google Meet'].map(t => (
                    <span key={t} className="px-4 py-2 bg-stone-100 rounded-lg text-sm font-medium text-gray-600">{t}</span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-accent-pink mb-4">File Management</h4>
                  <div className="flex flex-wrap gap-3">
                    {['Google Drive', 'Dropbox'].map(t => (
                      <span key={t} className="px-4 py-2 bg-stone-100 rounded-lg text-sm font-medium text-gray-600">{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-accent-pink mb-4">Systems</h4>
                  <div className="flex flex-wrap gap-3">
                    {['LIS (Laboratory Info System)'].map(t => (
                      <span key={t} className="px-4 py-2 bg-stone-100 rounded-lg text-sm font-medium text-gray-600">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-3xl text-deep-brown mb-10 flex items-center gap-4">Core Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Patient Care & Client Support",
                "Data Entry & Accuracy",
                "Administrative Assistance",
                "Time Management & Multitasking",
                "Communication Skills",
                "Confidentiality & Data Privacy",
                "Workflow Organization",
                "Attention to Detail"
              ].map((skill, i) => (
                <div key={i} className="flex items-center gap-3 p-4 border border-light-brown/30 rounded-xl hover:bg-soft-pink/20 transition-colors">
                  <CheckCircle2 size={18} className="text-accent-pink shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. EXPERIENCE */}
      <section id="experience" className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl text-deep-brown mb-16 text-center">Professional Experience</h2>
          <div className="space-y-12 relative before:absolute before:left-0 md:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-light-brown/40">
            {[
              {
                company: "Multilab Diagnostic & Health Services",
                role: "Phlebotomist / Lab Aide / Specimen Collector",
                period: "2025–Present",
                tasks: ["Managed and encoded client data with high accuracy", "Scheduled appointments and coordinated home services", "Organized digital records and maintained documentation"],
                relevance: "Scheduling, data entry, admin support"
              },
              {
                company: "City of Imus Doctors Hospital",
                role: "Medical Laboratory Technician",
                period: "2024–2025",
                tasks: ["Maintained and organized patient records using LIS", "Generated reports and tracked inventory", "Collaborated with healthcare teams for efficient workflows"],
                relevance: "Data management, reporting, organization"
              },
              {
                company: "Wellcare Clinics & Laboratory",
                role: "Phlebotomist",
                period: "2023–2024",
                tasks: ["Managed patient records and documentation", "Ensured smooth coordination of specimen tracking", "Delivered excellent client communication"],
                relevance: "Customer support, documentation"
              }
            ].map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="absolute left-[-5px] md:left-1/2 md:ml-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-accent-pink border-2 border-white shadow-sm"></div>
                <div className="md:w-1/2">
                  <div className={`p-8 bg-white rounded-2xl shadow-sm border border-light-brown/20 ${i % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                    <span className="text-xs font-bold text-accent-pink uppercase tracking-widest">{exp.period}</span>
                    <h3 className="text-xl font-bold text-deep-brown mt-2 mb-1">{exp.role}</h3>
                    <p className="text-sm font-medium text-gray-500 mb-4">{exp.company}</p>
                    <ul className="space-y-2 mb-6">
                      {exp.tasks.map((t, j) => (
                        <li key={j} className="text-sm text-gray-600 flex gap-2">
                          <ChevronRight size={14} className="text-accent-pink shrink-0 mt-1" />
                          {t}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-stone-100">
                      <p className="text-xs font-bold text-deep-brown uppercase">VA Relevance:</p>
                      <p className="text-xs text-gray-500 italic">{exp.relevance}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ACHIEVEMENTS & 8. EDUCATION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
          {/* Achievements */}
          <div>
            <h2 className="text-3xl text-deep-brown mb-10 flex items-center gap-4">Key Impact Highlights</h2>
            <div className="space-y-4">
              {[
                "Improved data accuracy and reduced documentation errors",
                "Supported high-volume patient operations efficiently",
                "Maintained organized and accessible records",
                "Ensured compliance with healthcare protocols",
                "Delivered reliable administrative and clinical support"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-soft-pink/10 rounded-2xl border border-soft-pink/30">
                  <Award className="text-accent-pink" size={24} />
                  <span className="font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-3xl text-deep-brown mb-10 flex items-center gap-4">Education & Training</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-light-brown/20 rounded-xl flex items-center justify-center shrink-0">
                  <GraduationCap className="text-deep-brown" />
                </div>
                <div>
                  <h4 className="font-bold text-deep-brown">Bachelor of Science in Medical Technology</h4>
                  <p className="text-gray-500">Cavite State University (2023)</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-light-brown/20 rounded-xl flex items-center justify-center shrink-0">
                  <FileText className="text-deep-brown" />
                </div>
                <div>
                  <h4 className="font-bold text-deep-brown">Authorized Specimen Collector Training</h4>
                  <p className="text-gray-500">(2025)</p>
                </div>
              </div>
              <div className="pt-6 border-t border-stone-100">
                <h4 className="text-sm font-bold uppercase tracking-widest text-accent-pink mb-4">Internships</h4>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">• Dasmariñas City Medical Center</p>
                  <p className="text-sm text-gray-600">• Emilio Aguinaldo College Medical Center</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SAMPLE WORK */}
      <section id="samples" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-deep-brown mb-16 text-center">Sample Tasks I Can Do</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Mock 1: Data Entry */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-3xl shadow-sm border border-light-brown/20 overflow-hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-deep-brown flex items-center gap-2">
                  <Layout size={20} className="text-accent-pink" /> Data Entry Sample
                </h3>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="bg-[#7E57C2] text-white">
                      <th className="p-3 rounded-tl-lg">Patient Name</th>
                      <th className="p-3">Date</th>
                      <th className="p-3">Service</th>
                      <th className="p-3">Status</th>
                      <th className="p-3 rounded-tr-lg">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    <tr>
                      <td className="p-3 font-medium">Juan Dela Cruz</td>
                      <td className="p-3">May 12</td>
                      <td className="p-3">Blood Test</td>
                      <td className="p-3"><span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full">Completed</span></td>
                      <td className="p-3 text-gray-400 italic">Normal</td>
                    </tr>
                    <tr className="bg-stone-50/50">
                      <td className="p-3 font-medium">Maria Santos</td>
                      <td className="p-3">May 13</td>
                      <td className="p-3">Urinalysis</td>
                      <td className="p-3"><span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full">Pending</span></td>
                      <td className="p-3 text-gray-400 italic">Follow-up</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Pedro Reyes</td>
                      <td className="p-3">May 14</td>
                      <td className="p-3">CBC</td>
                      <td className="p-3"><span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full">Completed</span></td>
                      <td className="p-3 text-gray-400 italic">Sent to doctor</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Mock 2: Calendar */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-3xl shadow-sm border border-light-brown/20"
            >
              <h3 className="font-bold text-deep-brown mb-6 flex items-center gap-2">
                <Calendar size={20} className="text-accent-pink" /> Appointment Scheduling
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-gray-400 uppercase">Monday</h4>
                  <div className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
                    <p className="text-[10px] font-bold text-blue-700">9:00 AM</p>
                    <p className="text-xs text-blue-900">Patient Call</p>
                  </div>
                  <div className="p-3 bg-purple-50 border-l-4 border-purple-400 rounded-r-lg">
                    <p className="text-[10px] font-bold text-purple-700">11:00 AM</p>
                    <p className="text-xs text-purple-900">Data Encoding</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-gray-400 uppercase">Tuesday</h4>
                  <div className="p-3 bg-green-50 border-l-4 border-green-400 rounded-r-lg">
                    <p className="text-[10px] font-bold text-green-700">10:00 AM</p>
                    <p className="text-xs text-green-900">Lab Coordination</p>
                  </div>
                  <div className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
                    <p className="text-[10px] font-bold text-blue-700">2:00 PM</p>
                    <p className="text-xs text-blue-900">Email Follow-ups</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex gap-4 text-[10px] font-bold uppercase tracking-tighter">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-400"></span> Admin</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-400"></span> Patient</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-purple-400"></span> Reports</span>
              </div>
            </motion.div>

            {/* Mock 3: Google Drive */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-3xl shadow-sm border border-light-brown/20"
            >
              <h3 className="font-bold text-deep-brown mb-6 flex items-center gap-2">
                <Folder size={20} className="text-accent-pink" /> File Organization
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Client Records", color: "bg-blue-100 text-blue-600" },
                  { name: "Lab Reports", color: "bg-red-100 text-red-600" },
                  { name: "Appointments", color: "bg-green-100 text-green-600" },
                  { name: "Billing & Invoices", color: "bg-yellow-100 text-yellow-600" }
                ].map((f, i) => (
                  <div key={i} className={`p-4 rounded-2xl ${f.color} flex flex-col items-center gap-2 text-center`}>
                    <Folder size={24} />
                    <span className="text-xs font-bold">{f.name}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center text-xs text-gray-400 italic">“Organized, labeled, and easy retrieval system”</p>
            </motion.div>

            {/* Mock 4: Email */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-3xl shadow-sm border border-light-brown/20"
            >
              <h3 className="font-bold text-deep-brown mb-6 flex items-center gap-2">
                <Inbox size={20} className="text-accent-pink" /> Email Handling
              </h3>
              <div className="space-y-2">
                {[
                  { subject: "Appointment Confirmation", status: "Completed", color: "bg-green-100 text-green-700" },
                  { subject: "Lab Results Follow-up", status: "Pending", color: "bg-yellow-100 text-yellow-700" },
                  { subject: "New Client Inquiry", status: "Replied", color: "bg-blue-100 text-blue-700" }
                ].map((e, i) => (
                  <div key={i} className="flex items-center justify-between p-3 border-b border-stone-100 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent-pink"></div>
                      <span className="text-xs font-medium text-gray-700">{e.subject}</span>
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${e.color}`}>{e.status}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-3 bg-stone-50 rounded-xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent-pink flex items-center justify-center text-white"><Plus size={14} /></div>
                <div className="h-2 w-32 bg-stone-200 rounded-full"></div>
              </div>
            </motion.div>

            {/* Mock 5: Canva Graphic */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 bg-white p-6 rounded-3xl shadow-sm border border-light-brown/20"
            >
              <h3 className="font-bold text-deep-brown mb-6 flex items-center gap-2">
                <Layout size={20} className="text-accent-pink" /> Canva Graphic Sample
              </h3>
              <div className="max-w-md mx-auto aspect-square bg-gradient-to-br from-soft-pink to-white rounded-2xl border-4 border-white shadow-inner flex flex-col items-center justify-center p-10 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-pink/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-light-brown/20 rounded-full -ml-12 -mb-12"></div>
                
                <Droplets size={48} className="text-accent-pink mb-6" />
                <h4 className="text-3xl text-deep-brown mb-4">Stay Hydrated</h4>
                <p className="text-gray-600 font-medium leading-relaxed">
                  “Drink at least 8 glasses of water daily for better health and energy.”
                </p>
                <div className="mt-8 flex gap-2">
                  {[1,2,3,4,5,6,7,8].map(i => (
                    <div key={i} className="w-4 h-6 bg-blue-200 rounded-sm"></div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 10. CONTACT PAGE */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-deep-brown rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 text-white">
              <h2 className="text-4xl lg:text-5xl mb-8">Let’s Work Together</h2>
              <p className="text-stone-300 text-lg mb-12">
                “I’m ready to help streamline your workflow and support your business remotely.”
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-accent-pink">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-stone-400">Email Me</p>
                    <p className="text-lg">amparo.mikhaela@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-accent-pink">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-stone-400">Call Me</p>
                    <p className="text-lg">0965 321 1881</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-accent-pink">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-stone-400">Location</p>
                    <p className="text-lg">Cavite, Philippines</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex gap-4">
                <a href="https://www.linkedin.com/in/amparomikhaela" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white text-deep-brown px-6 py-3 rounded-full font-bold hover:bg-soft-pink transition-colors">
                  <Linkedin size={20} /> LinkedIn Profile
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 relative min-h-[400px]">
              <EditablePhoto 
                className="absolute inset-0 w-full h-full opacity-80 rounded-none" 
                label="Contact Photo"
                initialImage="https://picsum.photos/seed/mikhaela3/800/1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-brown via-transparent to-transparent lg:bg-gradient-to-l pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-stone-100 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Mikhaela Amparo. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
