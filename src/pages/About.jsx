import { motion } from 'framer-motion';
import { Shield, Heart, Award, Users, Target, Eye } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Quality First',
      description: 'We never compromise on the quality of our products. Every mosquito net is tested for durability and effectiveness.',
    },
    {
      icon: Heart,
      title: 'Customer Care',
      description: 'Your satisfaction is our priority. We provide excellent customer service and support at every step.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from product design to delivery and after-sales service.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We believe in building strong relationships with our customers and contributing to healthier communities.',
    },
  ];

  const stats = [
    { number: '10+', label: 'Years in Business' },
    { number: '5000+', label: 'Happy Customers' },
    { number: '15+', label: 'Product Varieties' },
    { number: '100%', label: 'Satisfaction Rate' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <div className="gradient-green-blue dark:gradient-green-blue-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
              About <span className="text-gradient">Easwari Traders</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner in providing premium quality mosquito nets for over a decade. 
              We're committed to keeping your family safe and healthy.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold mb-6">
              Our <span className="text-gradient">Story</span>
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Easwari Traders was founded in 2010 with a simple mission: to provide affordable, 
                high-quality mosquito nets to families across Tamil Nadu. What started as a small 
                family business has grown into a trusted name in mosquito protection.
              </p>
              <p>
                Based in Karur, we've spent over a decade perfecting our products and services. 
                We understand the importance of a good night's sleep and the dangers posed by 
                mosquito-borne diseases. That's why we're committed to offering only the best 
                quality nets that combine durability, breathability, and effectiveness.
              </p>
              <p>
                Today, we serve thousands of satisfied customers across the region, and we continue 
                to innovate and expand our product line to meet evolving needs. Your family's safety 
                isn't just our business—it's our passion.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&h=600&fit=crop"
                alt="Our Team"
                className="w-full h-auto"
              />
            </div>
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-xl"
            >
              <div className="text-4xl mb-2">🏆</div>
              <div className="font-bold">Trusted by</div>
              <div className="text-2xl font-bold text-gradient">5000+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Families</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-white dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To provide every family with access to affordable, high-quality mosquito protection 
                that ensures safe and healthy living. We aim to eliminate mosquito-borne health risks 
                through our premium products and exceptional customer service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass rounded-3xl p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To become the most trusted name in mosquito protection across India. We envision a 
                future where every household has access to our premium nets, contributing to healthier 
                communities and disease-free living environments.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Why Choose <span className="text-gradient">Us</span>?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our core values guide everything we do
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl p-6 text-center hover:shadow-xl transition-shadow"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center"
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="gradient-green-blue dark:gradient-green-blue-dark py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Ready to Experience the <span className="text-gradient">Difference</span>?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Easwari Traders
            </p>
            <motion.a
              href="/products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-shadow"
            >
              Shop Now
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
