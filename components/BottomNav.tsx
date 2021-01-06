import { FiHome, FiList, FiUser, FiBookmark } from 'react-icons/fi';

export default function BottomNav() {
  return (
    <section className='bottom-nav flex flex-row justify-evenly'>
      <FiHome color='#8f8f8f' size='1.4rem' />
      <FiList color='#8f8f8f' size='1.4rem' />
      <FiBookmark color='#8f8f8f' size='1.4rem' />
      <FiUser color='#8f8f8f' size='1.4rem' />
    </section>
  )
}

function MenuItem() {
  return (
    <div className='flex flex-col'>
      <FiHome color='#8f8f8f' size='1.4rem' />
    </div>
  )
}