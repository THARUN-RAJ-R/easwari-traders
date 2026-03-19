import { motion } from 'framer-motion';
import { ShoppingBag, Heart, Search, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const EmptyState = ({ type = 'cart' }) => {
  const states = {
    cart: {
      icon: ShoppingBag,
      title: 'Your cart is empty',
      message: 'Looks like you haven\'t added any products yet. Start shopping!',
      buttonText: 'Continue Shopping',
      buttonLink: '/products',
    },
    wishlist: {
      icon: Heart,
      title: 'Your wishlist is empty',
      message: 'Start adding your favorite products to your wishlist!',
      buttonText: 'Browse Products',
      buttonLink: '/products',
    },
    search: {
      icon: Search,
      title: 'No products found',
      message: 'Try adjusting your search or filters to find what you\'re looking for',
      buttonText: 'Clear Filters',
      buttonLink: '/products',
    },
    products: {
      icon: Package,
      title: 'No products available',
      message: 'Check back soon for new products!',
      buttonText: 'Go Home',
      buttonLink: '/',
    },
  };

  const state = states[type] || states.cart;
  const Icon = state.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-16 px-4 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
        className="mb-6"
      >
        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-full flex items-center justify-center">
          <Icon className="w-12 h-12 text-primary-600 dark:text-primary-400" />
        </div>
      </motion.div>

      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-2xl font-bold mb-2"
      >
        {state.title}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-600 dark:text-gray-400 mb-8 max-w-md"
      >
        {state.message}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Link to={state.buttonLink}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            {state.buttonText}
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default EmptyState;
