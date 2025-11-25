import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './Button';
import { ServicePackage } from '../types';

const packages: ServicePackage[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$499',
    features: [
      '4 Blog Posts (1000 words)',
      'Keyword Research',
      'Meta Descriptions',
      '1 Revision Round',
      'Plagiarism Check'
    ]
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '$999',
    popular: true,
    features: [
      '8 Blog Posts (1500 words)',
      'Social Media Teasers',
      'Advanced SEO Strategy',
      'Stock Image Selection',
      '2 Revision Rounds',
      'CMS Uploading'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Unlimited Content Strategy',
      'White Papers & E-books',
      'Email Sequences',
      'Dedicated Account Manager',
      'Priority Support',
      'Monthly Analytics Report'
    ]
  }
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-2">Plans & Pricing</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Invest in Quality</h3>
          <p className="text-lg text-slate-600">
            Transparent pricing packages designed to scale with your content needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`relative rounded-2xl p-8 flex flex-col ${
                pkg.popular 
                  ? 'bg-white border-2 border-brand-500 shadow-xl' 
                  : 'bg-slate-50 border border-slate-100'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h4 className="text-xl font-bold text-slate-900">{pkg.name}</h4>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-slate-900">{pkg.price}</span>
                  {pkg.price !== 'Custom' && <span className="text-slate-500 ml-1">/month</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0" />
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={pkg.popular ? 'primary' : 'secondary'} 
                className="w-full"
              >
                Choose {pkg.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
