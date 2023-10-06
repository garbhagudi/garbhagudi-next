import Link from 'next/link';

interface postsProps {
  posts: [
    {
      id: string;
      title: string;
      slug: string;
      image: {
        url: string;
      };
    },
  ];
}

const BlogsSnip = ({ posts }: postsProps) => {
  return (
    <div className='bg-white dark:bg-gray-800 pt-16 pb-20 sm:px-6 lg:pt-24 lg:pb-20 lg:px-8'>
      <div className='relative max-w-lg mx-auto lg:max-w-7xl'>
        <div className='border-b dark:border-gray-600 pb-4'>
          <h2 className='text-3xl tracking-tight font-extrabold text-gray-800 dark:text-gray-200 text-center sm:text-4xl font-heading'>
            Recent Blogs
          </h2>
        </div>
        <div className='mt-6 pb-6 flex items-center justify-center flex-col md:flex-row md:flex-wrap'>
          {posts?.map((post) => (
            <Link
              href={`/blogs/${post.slug}`}
              key={post.title}
              className='mx-auto max-w-xs sm:max-w-none transition duration-300 ease-in-out'
            >
              <div className='mt-6 flex items-center justify-center'>
                <div
                  className='relative w-[400px] h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg drop-shadow-lg hover:drop-shadow-2xl hover:shadow-2xl transition duration-300 ease-in-out'
                  style={{ backgroundImage: `url(${post.image.url})` }}
                >
                  <div className='absolute inset-0 bg-black dark:bg-gray-800 bg-opacity-60 dark:bg-opacity-60 group-hover:opacity-60S transition duration-300 ease-in-out'></div>
                  <div className='relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center'>
                    <h3 className='text-center'>
                      <div className='text-white text-lg font text-center font-lexend drop-shadow-2xl group-hover:bg-gg-500 dark:group-hover:bg-gg-400 dark:group-hover:text-gray-800 px-2 py-1.5 rounded-lg group-hover:shadow-2xl group-hover:-translate-y-2 transition duration-150 ease-in-out'>
                        {post.title}
                      </div>
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className='text-center mx-auto flex items-center mt-6 justify-center px-3 py-2 bg-transparent w-32 font-content font-bold text-gg-500 dark:text-gg-400 border-2 border-gg-500 dark:border-gg-400 hover:bg-gg-500 dark:hover:bg-gg-400 dark:hover:text-gray-800 mb-6 rounded-lg hover:shadow-2xl hover:shadow-gg-500 hover:transition-all hover:-translate-y-1 duration-300'>
          <Link href='/blogs/page/1'>Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogsSnip;
