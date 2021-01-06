import { FiHome, FiList, FiUser, FiBookmark } from 'react-icons/fi';
import Link from 'next/link';

export default function BottomNav() {
  return (
    <section className='bottom-nav flex flex-row justify-evenly'>
      <Link href='/' passHref>
        <a>
          <FiHome color='#8f8f8f' size='1.4rem' />
        </a>
      </Link>
      <FiList color='#8f8f8f' size='1.4rem' />
      <FiBookmark color='#8f8f8f' size='1.4rem' />
      <FiUser color='#8f8f8f' size='1.4rem' />
    </section>
  )
}