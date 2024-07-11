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
    <div className='bg-white pb-20 pt-16 dark:bg-gray-800 sm:px-6 lg:px-8 lg:pb-20 lg:pt-24'>
      <div className='relative mx-auto max-w-lg lg:max-w-7xl'>
        <div className='border-b pb-4 dark:border-gray-600'>
          <h2 className='text-center font-heading text-3xl font-extrabold tracking-tight text-gray-800 dark:text-gray-200 sm:text-4xl'>
            Recent Blogs
          </h2>
        </div>
        <div className='mt-6 flex flex-col items-center justify-center pb-6 md:flex-row md:flex-wrap'>
          {posts?.map((post) => (
            <Link
              href={`/blogs/${post.slug}`}
              key={post.title}
              className='mx-auto max-w-xs transition duration-300 ease-in-out sm:max-w-none'
            >
              <div className='mt-6 flex items-center justify-center'>
                <div
                  className='group relative h-52 w-[400px] overflow-hidden rounded-lg bg-cover bg-center shadow-lg drop-shadow-lg transition duration-300 ease-in-out hover:shadow-2xl hover:drop-shadow-2xl'
                  style={{ backgroundImage: `url(${post.image.url})` }}
                >
                  <div className='group-hover:opacity-60S absolute inset-0 bg-black bg-opacity-60 transition duration-300 ease-in-out dark:bg-gray-800 dark:bg-opacity-60'></div>
                  <div className='relative flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-4'>
                    <h3 className='text-center'>
                      <div className='font rounded-lg px-2 py-1.5 text-center font-lexend text-lg text-white drop-shadow-2xl transition duration-150 ease-in-out group-hover:-translate-y-2 group-hover:bg-gg-500 group-hover:shadow-2xl dark:group-hover:bg-gg-400 dark:group-hover:text-gray-800'>
                        {post.title}
                      </div>
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className='mx-auto mb-6 mt-6 flex w-32 items-center justify-center rounded-lg border-2 border-gg-500 bg-transparent px-3 py-2 text-center font-content font-bold text-gg-500 duration-300 hover:-translate-y-1 hover:bg-gg-500 hover:shadow-2xl hover:shadow-gg-500 hover:transition-all dark:border-gg-400 dark:text-gg-400 dark:hover:bg-gg-400 dark:hover:text-gray-800'>
          <Link href='/blogs/page/1'>Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogsSnip;
