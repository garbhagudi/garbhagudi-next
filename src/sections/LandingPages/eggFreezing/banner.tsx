import Image from 'next/image';

export default function Banner() {
  return (
    <div>
      <Image
        src={'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8vedhg58ub07ple4tn45ni'}
        alt={'Egg Freezing info Web Banner'}
        width={1920}
        height={180}
        className='h-full w-full object-cover'
        priority={true}
      />
    </div>
  );
}
