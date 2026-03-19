const SkeletonLoader = ({ count = 6 }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(count)].map((_, index) => (
        <div key={index} className="glass rounded-2xl overflow-hidden shadow-lg animate-pulse">
          {/* Image Skeleton */}
          <div className="aspect-square bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 bg-[length:200%_100%] animate-shimmer" />
          
          {/* Content Skeleton */}
          <div className="p-5 space-y-3">
            {/* Category Badge */}
            <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded-full" />
            
            {/* Title */}
            <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
            
            {/* Description */}
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
            
            {/* Price and Button */}
            <div className="flex items-center justify-between pt-2">
              <div className="h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-10 w-28 bg-gray-200 dark:bg-gray-700 rounded-lg" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
