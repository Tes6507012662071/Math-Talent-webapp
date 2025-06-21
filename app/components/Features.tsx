import { FaTrophy, FaGraduationCap, FaUsers, FaChartLine } from 'react-icons/fa';

const features = [
  {
    name: 'Math Competitions',
    description: 'Participate in challenging competitions and test your mathematical skills against peers worldwide.',
    icon: FaTrophy,
  },
  {
    name: 'Interactive Learning',
    description: 'Access comprehensive math courses and interactive problems designed by expert mathematicians.',
    icon: FaGraduationCap,
  },
  {
    name: 'Community Support',
    description: 'Join a vibrant community of math enthusiasts, share knowledge, and learn from others.',
    icon: FaUsers,
  },
  {
    name: 'Track Progress',
    description: 'Monitor your progress with detailed analytics and performance tracking tools.',
    icon: FaChartLine,
  },
];

const Features = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to excel in mathematics
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Discover the tools and resources that will help you achieve your mathematical goals.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features; 