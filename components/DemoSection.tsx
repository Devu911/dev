import React, { useState } from 'react';
import { Sparkles, Copy, RefreshCw, Wand2 } from 'lucide-react';
import { Button } from './Button';
import { ContentType, ToneType, GeneratedContent } from '../types';
import { generateContentSample } from '../services/geminiService';

export const DemoSection: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [type, setType] = useState<ContentType>(ContentType.BLOG_POST);
  const [tone, setTone] = useState<ToneType>(ToneType.PROFESSIONAL);
  const [result, setResult] = useState<GeneratedContent | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await generateContentSample(topic, type, tone);
      setResult(data);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="demo" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-slate-800 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-sm font-medium text-slate-300">Powered by Gemini AI</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Experience Our Quality</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Not sure if we're the right fit? Use our AI-powered sampler to generate a snippet in your preferred style. 
            We combine this technology with human editing for the final deliverable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Input Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-slate-700 shadow-xl">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Wand2 className="mr-2 text-brand-400" />
              Configure Your Sample
            </h3>
            <form onSubmit={handleGenerate} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  What should we write about?
                </label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g., Sustainable gardening tips for beginners"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Content Type
                  </label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value as ContentType)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 outline-none"
                  >
                    {Object.values(ContentType).map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Tone of Voice
                  </label>
                  <select
                    value={tone}
                    onChange={(e) => setTone(e.target.value as ToneType)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 outline-none"
                  >
                    {Object.values(ToneType).map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full py-4 text-lg"
                isLoading={loading}
              >
                {loading ? 'Generating Sample...' : 'Generate Sample'}
              </Button>
            </form>
          </div>

          {/* Output Display */}
          <div className="relative min-h-[400px]">
            {error && (
               <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-200">
                 {error}
               </div>
            )}
            
            {!result && !loading && !error && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 border-2 border-dashed border-slate-700 rounded-2xl p-8 text-center bg-slate-800/20">
                <div className="bg-slate-800 p-4 rounded-full mb-4">
                  <Sparkles className="w-8 h-8 text-slate-400" />
                </div>
                <p className="text-lg font-medium">Ready to write</p>
                <p className="text-sm mt-2">Fill out the form to see a live demonstration of our drafting capabilities.</p>
              </div>
            )}

            {result && (
              <div className="bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden animate-fadeIn h-full flex flex-col">
                <div className="bg-slate-100 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Preview Mode</span>
                </div>
                
                <div className="p-8 flex-1 overflow-y-auto">
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">{result.title}</h3>
                  <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed whitespace-pre-line mb-6">
                    {result.body}
                  </div>
                  
                  {result.metaDescription && (
                    <div className="mt-8 pt-6 border-t border-slate-100">
                      <p className="text-xs font-bold text-slate-400 uppercase mb-1">Meta Description</p>
                      <p className="text-sm text-slate-500 italic">{result.metaDescription}</p>
                    </div>
                  )}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {result.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-brand-50 text-brand-700 text-xs rounded-md font-medium">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-between items-center">
                   <p className="text-xs text-slate-500">Generated by Gemini 2.5 Flash • {new Date().toLocaleDateString()}</p>
                   <button 
                     onClick={() => {
                        const textToCopy = `${result.title}\n\n${result.body}`;
                        navigator.clipboard.writeText(textToCopy);
                     }}
                     className="text-slate-500 hover:text-brand-600 transition-colors"
                     title="Copy to clipboard"
                   >
                     <Copy size={18} />
                   </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
