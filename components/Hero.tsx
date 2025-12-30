import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950 py-20 sm:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mb-8">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Free Online Utilities</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Your Ultimate
            <span className="block bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600 bg-clip-text text-transparent">
              Utility Hub
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Access a comprehensive collection of free online tools including calculators, converters, generators, and developer utilities. Everything you need, all in one place.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#utilities"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 group"
            >
              Explore Tools
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href="https://calculators.utltyhub.com"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-700 dark:text-primary-300 bg-white dark:bg-gray-800 border-2 border-primary-300 dark:border-primary-700 hover:border-primary-400 dark:hover:border-primary-600 rounded-lg transition-all duration-200"
            >
              Visit Calculators
            </a>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Tools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Free</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">No Ads</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Clean UI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
