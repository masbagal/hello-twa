import { FaMobileAlt } from 'react-icons/fa';

export default function DownloadApp() {
  return (
    <section className='rounded-lg p-4 bg-blue-500 mx-4 my-4 app-banner'>
      <section className='flex flex-row'>
        <figure className='bg-white rounded-lg p-2 mr-4 self-start'>
          <FaMobileAlt color='#0770cd' size='2rem' />
        </figure>
        <section>
          <div className='text-white font-bold'>We don't have any app!</div>
          <p className='text-sm text-white mt-1 leading-tight'>Please download other app that is useful for you. This is just a random testing page.</p>
        </section>
      </section>
      <button className='w-full bg-white text-center text-blue-500 py-1 mt-4 rounded-lg'>Do nothing</button>
    </section>
  )
}