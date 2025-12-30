import { Calculator, Repeat, Code, Zap, Palette, FileText, Database, Shield } from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    name: 'Calculators',
    description: 'Financial, health, math, and scientific calculators',
    icon: Calculator,
    link: 'https://calculators.utltyhub.com',
    color: 'from-blue-500 to-cyan-500',
    available: true,
  },
  {
    name: 'Converters',
    description: 'Unit converters, currency, temperature, and more',
    icon: Repeat,
    link: '#',
    color: 'from-purple-500 to-pink-500',
    available: false,
  },
  {
    name: 'Generators',
    description: 'Password, UUID, QR code, and text generators',
    icon: Zap,
    link: '#',
    color: 'from-orange-500 to-red-500',
    available: false,
  },
  {
    name: 'Developer Tools',
    description: 'JSON formatter, base64, regex tester, and more',
    icon: Code,
    link: '#',
    color: 'from-green-500 to-emerald-500',
    available: false,
  },
  {
    name: 'Design Tools',
    description: 'Color pickers, gradient generators, image tools',
    icon: Palette,
    link: '#',
    color: 'from-pink-500 to-rose-500',
    available: false,
  },
  {
    name: 'Text Tools',
    description: 'Word counter, case converter, diff checker',
    icon: FileText,
    link: '#',
    color: 'from-indigo-500 to-blue-500',
    available: false,
  },
  {
    name: 'Data Tools',
    description: 'CSV, XML, YAML processors and validators',
    icon: Database,
    link: '#',
    color: 'from-teal-500 to-cyan-500',
    available: false,
  },
  {
    name: 'Security Tools',
    description: 'Hash generators, encryption, security checkers',
    icon: Shield,
    link: '#',
    color: 'from-red-500 to-orange-500',
    available: false,
  },
];

export function UtilityCategories() {
  return (
    <section id="utilities" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Explore Our Utilities
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose from our growing collection of utility categories. Each subdomain hosts specialized tools for specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            const isExternal = category.link.startsWith('http');
            const CardWrapper = category.available ? (isExternal ? 'a' : Link) : 'div';
            const cardProps = category.available
              ? isExternal
                ? { href: category.link }
                : { href: category.link }
              : {};

            return (
              <CardWrapper
                key={category.name}
                {...cardProps}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${category.color} p-[1px] ${
                  category.available ? 'cursor-pointer' : 'cursor-not-allowed opacity-60'
                }`}
              >
                <div className="h-full bg-white dark:bg-gray-900 rounded-2xl p-6 transition-transform duration-300 group-hover:scale-[0.98]">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {category.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {category.description}
                  </p>
                  
                  {category.available ? (
                    <div className="flex items-center text-sm font-medium bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600 bg-clip-text text-transparent">
                      Explore Now →
                    </div>
                  ) : (
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-medium text-gray-600 dark:text-gray-400">
                      Coming Soon
                    </div>
                  )}
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
