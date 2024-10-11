import React from 'react';
import { FaBriefcase, FaUserGraduate, FaCertificate } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Define animation variants for icons
const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
        },
    },
});

// Experience data
const experienceData = [
    {
        title: 'Founder',
        company: 'NX Codeworks',
        duration: 'Jan 2021 - Present',
        location: 'New Delhi, Delhi, India · Remote',
        description: 'As a freelance developer, I am dedicated to delivering efficient, secure, and dynamic code solutions. I specialize in web development, bot creation, and more. With expertise in Python, PHP, JavaScript, Node.js, React, HTML, and CSS3.',
        skills: ['Python', 'Node.js'],
    },
    {
        title: 'Web Development Intern',
        company: 'Zidio Development',
        duration: 'Jun 2024 - Oct 2024',
        location: 'New Delhi, Delhi, India · Remote',
        description: 'Responsible for developing a Job Listing Portal and creating a Resume Builder, including UI design and backend integration.',
        skills: ['React.js', 'Node.js', 'Full-Stack Development'],
    },
    {
        title: 'Graduate Engineer Trainee (GET)',
        company: 'GAIL (India) Limited',
        duration: 'Feb 2023 - Mar 2024',
        location: 'New Delhi, Delhi, India · On-site',
        description: 'Monitoring and maintaining cathodic protection systems, conducting site assessments, and ensuring compliance with safety standards.',
        skills: ['Electrical Engineering', 'SCADA', 'Cathodic Protection'],
    },
    {
        title: 'Electrical Design Engineer - Oil & Gas',
        company: 'Sombansi Enviro Engg Pvt Ltd',
        duration: 'Jul 2021 - Feb 2023',
        location: 'Uttar Pradesh, India · On-site',
        description: 'Designed electrical systems, conducted site surveys, and prepared design documentation for various projects.',
        skills: ['Cathodic Protection', 'Electrical Troubleshooting'],
    },
    {
        title: 'Subject Matter Expert',
        company: 'Chegg India',
        duration: 'Apr 2021 - Feb 2023',
        location: 'New Delhi, Delhi, India · Remote',
        description: 'Provided expertise in Electrical Engineering, solving over 1,000 questions.',
        skills: ['Subject Matter Expert'],
    },
    {
        title: 'Subject Matter Expert',
        company: 'Unacademy',
        duration: 'Apr 2020 - Feb 2023',
        location: 'Greater Bengaluru Area · Remote',
        description: 'Specialized in Mathematics with more than 20k questions solved.',
        skills: ['Subject Matter Expert', 'Mathematics'],
    },
];

// Education data
const educationData = [
    {
        degree: 'Master of Business Administration (MBA)',
        institution: 'UPES',
        duration: 'Feb 2024 - Jul 2026',
        specialization: 'Human Resource Management (HRM)',
    },
    {
        degree: 'Bachelor of Technology (BTech) in Electrical and Electronics Engineering',
        institution: 'Jamia Millia Islamia, Central University',
        duration: 'Jul 2017 - Sep 2021',
        grade: '8.33 CPI (A Grade)',
    },
];

// Certifications data
const certificationsData = [
    'Certified Python Developer',
    'Full Stack Development Certification',
    'Bootcamp | React | Full Stack Development - Coding Ninjas (Issued Aug 2024, Expires Feb 2025)',
    'Bootcamp | Back End with Node.js | Full Stack Development - Coding Ninjas (Issued Jul 2024, Expired Aug 2024)',
    'Ford - EV Engineering Advanced Job Simulation - Forage (Issued Apr 2024)',
    'Introduction to Programming Using Python - Great Learning (Issued Mar 2024)',
    'Bootcamp | Back End with Node.js | Full Stack Development - Coding Ninjas (Issued Feb 2024, Expired Jul 2024)',
    'Bootcamp | Front End | Full Stack Development - Coding Ninjas (Issued Jan 2024, Expired Apr 2024)',
    'Bootcamp | React | Full Stack Development - Coding Ninjas (Issued Aug 2023, Expired Feb 2024)',
    'Python Machine Learning - TEACHNOOK (Issued Feb 2023)',
    'Transformer - Tata Steel (Issued May 2020)',
    'Machine Learning Engineer - TEACHNOOK (Issued Jan 2023, Expired Apr 2023)',
];


const Experience = () => {
    return (
        <div className='pb-24'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl'>
                Experience & Education
            </motion.h2>
            <motion.div className='relative flex flex-col items-center'>
                <div className='flex justify-around w-full'>
                    {/* Experience Section */}
                    <div className='flex flex-col items-start w-1/2 pr-4'>
                        <h3 className='text-2xl font-semibold mb-4'>Experience</h3>
                        {experienceData.map((experience, index) => (
                            <div key={index} className='flex items-start mb-8'>
                                <motion.div
                                    initial="initial"
                                    animate="animate"
                                    variants={iconVariants(2.5 + index * 0.5)}
                                    className='relative flex-shrink-0 mr-4'>
                                    <FaBriefcase className="text-4xl text-blue-600" />
                                </motion.div>
                                <div className='border-l-2 border-gray-300 pl-4'>
                                    <h4 className='text-lg font-semibold'>{experience.title}</h4>
                                    <p className='text-gray-700'>{experience.company}</p>
                                    <p className='text-gray-500'>{experience.duration}</p>
                                    <p className='text-gray-500'>{experience.location}</p>
                                    <p className='mt-2 text-gray-600'>{experience.description}</p>
                                    <p className='mt-1 text-gray-500'>Skills: {experience.skills.join(', ')}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Education Section */}
                    <div className='flex flex-col items-start w-1/2 pl-4'>
                        <h3 className='text-2xl font-semibold mb-4'>Education</h3>
                        {educationData.map((education, index) => (
                            <div key={index} className='flex items-start mb-8'>
                                <motion.div
                                    initial="initial"
                                    animate="animate"
                                    variants={iconVariants(2.5 + index * 0.5)}
                                    className='relative flex-shrink-0 mr-4'>
                                    <FaUserGraduate className="text-4xl text-green-600" />
                                </motion.div>
                                <div className='border-l-2 border-gray-300 pl-4'>
                                    <h4 className='text-lg font-semibold'>{education.degree}</h4>
                                    <p className='text-gray-700'>{education.institution}</p>
                                    <p className='text-gray-500'>{education.duration}</p>
                                    {education.specialization && (
                                        <p className='text-gray-500'>Specialization: {education.specialization}</p>
                                    )}
                                    {education.grade && (
                                        <p className='text-gray-500'>Grade: {education.grade}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Certifications Section */}
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className='my-20 text-center text-4xl'>
                    Certifications
                </motion.h2>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(5)}
                    className='flex flex-col items-center'>
                    <FaCertificate className="text-5xl text-yellow-500" />
                    <h3 className='mt-2 text-xl font-semibold'>Certifications</h3>
                    <ul className='list-disc list-inside mt-4'>
                        {certificationsData.map((certification, index) => (
                            <li key={index} className='text-white-700 flex items-center'>
                                {/* SVG or Icon for bullet point */}
                                <svg className="w-4 h-4 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                    <circle cx="10" cy="10" r="4" />
                                </svg>
                                <span className='text-white-1200'>{certification}</span> {/* Ensured text color is gray */}
                            </li>
                        ))}
                    </ul>
                </motion.div>

            </motion.div>
        </div>
    );
};

export default Experience;
