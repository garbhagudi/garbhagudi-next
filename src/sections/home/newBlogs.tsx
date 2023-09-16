import Link from 'next/link';

const BlogsSnip = ({ posts }) => {
  return (
    <div className='bg-white pt-16 pb-20 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
      <div className='relative max-w-lg mx-auto lg:max-w-7xl'>
        <div className='border-b pb-4'>
          <h2 className='text-3xl tracking-tight font-extrabold text-gray-900 text-center sm:text-4xl font-heading'>
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
                  <div className='absolute inset-0 bg-black bg-opacity-60 group-hover:opacity-60S transition duration-300 ease-in-out'></div>
                  <div className='relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center'>
                    <h3 className='text-center'>
                      <div className='text-white text-lg font text-center font-lexend drop-shadow-2xl group-hover:bg-brandPink px-2 py-1.5 rounded-lg group-hover:shadow-2xl group-hover:-translate-y-2 transition duration-150 ease-in-out'>
                        {post.title}
                      </div>
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className='text-center font-content mt-4 py-3 w-32 text-lg border rounded-lg mx-auto text-white font-semibold bg-brandPink hover:bg-brandPurpleDark transition-all duration-300 ease-linear'>
          <Link href='/blogs/page/1' className='py-3 px-3'>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogsSnip;
