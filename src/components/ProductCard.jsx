import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, index }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative"
    >
      {/* Best Seller Badge */}
      {product.bestSeller && (
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="absolute -top-2 -right-2 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
        >
          ⭐ Best Seller
        </motion.div>
      )}

      <div className="glass rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
        {/* Image Container */}
        <Link to={`/product/${product.id}`}>
          <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20">
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
            
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black/40 flex items-center justify-center space-x-3"
            >
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  toggleWishlist(product);
                }}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                  isInWishlist(product.id)
                    ? 'bg-red-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-red-50'
                }`}
              >
                <Heart
                  className={`w-5 h-5 ${isInWishlist(product.id) ? 'fill-current' : ''}`}
                />
              </motion.button>

              <Link to={`/product/${product.id}`}>
                <motion.button
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-primary-50 transition-colors"
                >
                  <Eye className="w-5 h-5 text-gray-700" />
                </motion.button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(product);
                }}
                className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full flex items-center justify-center shadow-lg"
              >
                <ShoppingCart className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </Link>

        {/* Product Info */}
        <div className="p-5">
          <div className="mb-2">
            <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-2 py-1 rounded-full">
              {product.category}
            </span>
          </div>
          
          <Link to={`/product/${product.id}`}>
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-baseline space-x-1">
              <span className="text-2xl font-bold text-gradient">₹{product.price}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">only</span>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => addToCart(product)}
              className="px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transition-shadow"
            >
              Add to Cart
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
