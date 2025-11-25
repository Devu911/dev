import React from 'react';
import { PenTool, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <PenTool className="text-brand-500" size={24} />
              <span className="text-xl font-serif font-bold text-white">
                Inkwell <span className="text-brand-500">&</span> Co.
              </span>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Elevating brands through the power of storytelling and strategic content creation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-brand-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-brand-500 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Blog Writing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SEO Optimization</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Copywriting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Strategy</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-4">Contact</h4>
             <ul className="space-y-2 text-sm">
               <li>hello@inkwellco.com</li>
               <li>+1 (555) 123-4567</li>
               <li>123 Writer's Lane<br />Creative City, NY 10012</li>
             </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Inkwell & Co. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
