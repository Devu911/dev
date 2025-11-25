import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-brand-100/50 blur-3xl"></div>
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-brand-600 mr-2"></span>
              Accepting new clients for Q4
            </div>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight mb-6">
              Words that <span className="text-brand-600 italic">inspire</span> action and build trust.
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We craft compelling content strategies for forward-thinking brands. 
              From SEO-driven blog posts to persuasive copy, we help you find your voice.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button href="#demo" className="w-full sm:w-auto">
                Try Our AI Demo
              </Button>
              <Button variant="outline" href="#portfolio" className="w-full sm:w-auto">
                View Portfolio
              </Button>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start space-x-6 text-sm text-slate-500">
              <div className="flex items-center"><CheckCircle size={16} className="text-brand-500 mr-2" /> SEO Optimized</div>
              <div className="flex items-center"><CheckCircle size={16} className="text-brand-500 mr-2" /> 100% Original</div>
              <div className="flex items-center"><CheckCircle size={16} className="text-brand-500 mr-2" /> Fast Turnaround</div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="relative">
              {/* Abstract representation of content creation */}
              <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8 relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="h-10 w-10 rounded-full bg-slate-200"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-32 bg-slate-200 rounded"></div>
                    <div className="h-3 w-20 bg-slate-100 rounded"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 w-full bg-slate-100 rounded"></div>
                  <div className="h-4 w-full bg-slate-100 rounded"></div>
                  <div className="h-4 w-3/4 bg-slate-100 rounded"></div>
                  <div className="h-32 w-full bg-brand-50/50 rounded-lg border border-dashed border-brand-200 flex items-center justify-center text-brand-400 mt-4">
                     <span className="font-serif italic text-lg">Your Story Here</span>
                  </div>
                </div>
                <div className="mt-6 flex justify-between items-center">
                   <div className="h-8 w-24 bg-brand-600 rounded"></div>
                   <div className="h-8 w-8 rounded-full bg-slate-100"></div>
                </div>
              </div>
              
              {/* Background card for depth */}
              <div className="absolute top-4 -right-4 w-full h-full bg-slate-900 rounded-2xl -z-10 opacity-10 rotate-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
