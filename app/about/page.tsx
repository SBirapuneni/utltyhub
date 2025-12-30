import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - UtltyHub',
  description: 'Learn about UtltyHub and our mission to provide free, powerful online utility tools for everyone.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-8">
          About UtltyHub
        </h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            UtltyHub is your go-to destination for free, powerful online utility tools. We're on a mission to make everyday tasks easier and more efficient.
          </p>
          
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We believe that powerful tools shouldn't come with a price tag or require complex software installations. Our mission is to provide free, accessible, and privacy-focused utilities that work directly in your browser.
          </p>
          
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-4">
            What We Offer
          </h2>
          <ul className="space-y-3 text-gray-600 dark:text-gray-400 mb-6">
            <li className="flex items-start">
              <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
              <span><strong>Calculators:</strong> From financial to health calculators, we cover all your calculation needs</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
              <span><strong>Converters:</strong> Convert units, currencies, temperatures, and more</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
              <span><strong>Generators:</strong> Create secure passwords, UUIDs, QR codes, and more</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
              <span><strong>Developer Tools:</strong> JSON formatters, base64 encoders, regex testers, and more</span>
            </li>
          </ul>
          
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-4">
            Our Principles
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-400">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Privacy First</h3>
              <p>All calculations and conversions happen directly in your browser. We never store or transmit your data.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Always Free</h3>
              <p>Our tools are and will always be free to use. No hidden fees, no premium tiers, no subscriptions.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">User-Friendly</h3>
              <p>Clean, intuitive interfaces that work on any device. No learning curve required.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
