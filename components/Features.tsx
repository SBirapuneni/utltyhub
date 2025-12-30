import { Zap, Shield, Smartphone, Globe } from 'lucide-react';

const features = [
  {
    name: 'Lightning Fast',
    description: 'All tools are optimized for speed and performance. Get instant results without any delays.',
    icon: Zap,
  },
  {
    name: 'Privacy First',
    description: 'All calculations happen in your browser. Your data never leaves your device.',
    icon: Shield,
  },
  {
    name: 'Mobile Friendly',
    description: 'Fully responsive design works perfectly on all devices, from phones to desktops.',
    icon: Smartphone,
  },
  {
    name: 'Always Available',
    description: 'Access our tools 24/7 from anywhere in the world. No registration required.',
    icon: Globe,
  },
];

export function Features() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose UtltyHub?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We're committed to providing the best online utility tools experience with these core principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.name} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
