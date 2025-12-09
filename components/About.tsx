import React from 'react';
import { EXPERIENCES, EDUCATION } from '../constants';
import { Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    "HTML5 & CSS3", "JavaScript (ES6+)", "React.js", "Shopify Liquid",
    "Tailwind CSS", "WordPress", "Node.js Basics", "SQL / NoSQL"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Experience & Education */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-brand-dark mb-8">Experience & Education</h2>
            
            <div className="space-y-8">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-brand-accent">
                      <Briefcase className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark">{exp.role}</h3>
                    <p className="text-brand-accent font-medium">{exp.company}</p>
                    <p className="text-sm text-slate-400 mb-2">{exp.period}</p>
                    <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
                      {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

              <div className="flex gap-4">
                <div className="mt-1">
                  <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-dark">{EDUCATION.degree}</h3>
                  <p className="text-brand-accent font-medium">{EDUCATION.school}</p>
                  <p className="text-sm text-slate-400">{EDUCATION.year}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills & Summary */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-brand-dark mb-8">Professional Skills</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Experienced Web Developer specializing in Shopify and React.js, with a strong background in eCommerce development and theme customization. Proven expertise in building responsive and high-converting online stores, and managing end-to-end projects from ideation to deployment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="font-medium text-slate-700">{skill}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-brand-dark rounded-xl text-white">
              <h4 className="text-lg font-bold mb-2">Why work with me?</h4>
              <p className="text-slate-300 text-sm mb-4">
                I combine technical expertise in React and Liquid with a keen eye for design and conversion optimization.
              </p>
              <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-brand-accent w-11/12"></div>
              </div>
              <p className="text-xs text-right mt-1 text-slate-400">92% Project Success Rate</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
