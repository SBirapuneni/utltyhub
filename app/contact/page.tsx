import type { Metadata } from 'next';
import { Mail, MessageSquare, Github } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us - UtltyHub',
  description: 'Get in touch with the UtltyHub team. We\'d love to hear from you!',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-8">
          Contact Us
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
          Have a question, suggestion, or found a bug? We'd love to hear from you!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-900">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
            <a href="mailto:contact@utltyhub.com" className="text-primary-600 dark:text-primary-400 hover:underline">
              contact@utltyhub.com
            </a>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-900">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 mb-4">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Feedback</h3>
            <a href="mailto:feedback@utltyhub.com" className="text-primary-600 dark:text-primary-400 hover:underline">
              feedback@utltyhub.com
            </a>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-900">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 mb-4">
              <Github className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">GitHub</h3>
            <a href="#" className="text-primary-600 dark:text-primary-400 hover:underline">
              Report an Issue
            </a>
          </div>
        </div>
        
        <div className="bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Are these tools really free?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes! All our tools are completely free to use with no hidden costs or premium features.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Do you store my data?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                No. All calculations happen directly in your browser. We don't store or transmit any of your data.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Can I suggest a new tool?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Absolutely! We're always looking to add new tools. Send us your suggestions at feedback@utltyhub.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
