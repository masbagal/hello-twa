import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex w-full bg-godwit py-4 justify-center' >
      <Link href='/' passHref>
        <a>
          <h1 className='text-white font-bold'>burungterbang</h1>
        </a>
      </Link>
    </header>
  )
}