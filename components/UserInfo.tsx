export default function UserInfo() {
  return (
    <section className='flex flex-row p-4 border-b'>
      <figure className='overflow-hidden rounded-full bg-red-400 h-12 w-12'>
        <img src='https://uifaces.co/our-content/donated/9vLfhK9h.jpg' alt='avatar' />
      </figure>
      <div className='flex flex-col ml-4'>
        <div className='text-lg font-semibold'>Riza Hawkeye</div>
        <PointsContainer />
      </div>
    </section>
  )
}

function PointsContainer() {
  return (
    <div className='bg-blue-100 text-xs px-2 py-1 rounded-full flex flex-row justify-evenly align-center' style={{ boxShadow: '1px 2px 8px #EFF6FF' }}>
      <div className='h-4 w-4 bg-yellow-500 rounded-full text-center text-xs text-white'>P</div>
      1380 points
    </div>
  )
}