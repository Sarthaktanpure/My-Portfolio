import React from 'react';
import { Mail, Linkedin, Smartphone, Instagram } from 'lucide-react'; // Example using lucide-react for icons

const contactDetails = [
  {
    icon: Mail,
    title: 'EMAIL',
    value: 'sarthaktanpure255@gmial.com',
    
  },
  {
    icon: Linkedin,
    title: 'LINKEDIN',
    value: 'Sarthak Tanpure',
    link: 'https://www.linkedin.com/in/sarthak-tanpure-a74b5133a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  },
  {
    icon: Smartphone,
    title: 'MOBILE',
    value: '+91 9307919092',
   
  },
  {
    icon: Instagram,
    title: 'INSTAGRAM',
    value: 'sarthak_tanpure_9290',
    link: 'https://www.instagram.com/sarthak_tanpure_9290'
  },
];

const ContactCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="max-w-4xl w-full mx-auto p-8 rounded-xl bg-gray-950 shadow-2xl border border-gray-700/50 backdrop-blur-sm">
        
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-white mb-10 text-center tracking-wider uppercase">
          Contact
        </h1>

        {/* Contact Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {contactDetails.map((item) => (
            <a 
              key={item.title} 
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 rounded-lg bg-gray-950 transition-all duration-300 transform hover:scale-[1.03] hover:bg-gray-700/70 border border-transparent hover:border-blue-500/50"
            >
              <item.icon className="h-8 w-8 text-blue-400 mb-3 transition-colors duration-300 group-hover:text-blue-300" />
              <p className="text-lg font-semibold text-gray-300 uppercase mb-1">
                {item.title}
              </p>
              <p className="text-sm text-gray-400 font-light truncate">
                {item.value}
              </p>
            </a>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="mt-10 flex justify-center">
          <button className="btn btn-outline-light flex ">
            <span className="text-sm">Send a message</span>
            {/* <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg> */}
          </button>
        </div>

      </div>
    </div>
  );
};

export default ContactCard;