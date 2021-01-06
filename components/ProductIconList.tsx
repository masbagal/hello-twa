import { IconType } from 'react-icons';
import { FiPrinter, FiFilm, FiInbox, FiBookmark, FiBox } from "react-icons/fi";
import { PRIMARY_PRODUCTS } from '../constants/product';
import ProductIcon from './ProductIcon';

export default function ProductIconList() {
  return (

    <section className='px-4 mt-4'>
      <section className='flex flex-row flex-wrap '>
        {
          PRIMARY_PRODUCTS.map(product => (
            <div className='my-4 w-3/12 flex items-start justify-center select-none'>
              <ProductIcon title={product.title} backgroundColor={product.backgroundColor} icon={product.icon} url={product.url} />
            </div>
          ))
        }
      </section>
      <SecondaryProducts />
    </section>
  )
}

interface SecondaryItem {
  icon: IconType;
  title: string;
}

const secondary = [
  {
    icon: FiFilm,
    title: 'Cinema'
  },
  {
    icon: FiInbox,
    title: 'My Inbox'
  },
  {
    icon: FiBookmark,
    title: 'Saved Items'
  },
  {
    icon: FiPrinter,
    title: 'Printer'
  },
  {
    icon: FiBox,
    title: 'Box'
  },
  {
    icon: FiBox,
    title: 'Box 2'
  },
  {
    icon: FiFilm,
    title: 'Film'
  },
  {
    icon: FiInbox,
    title: 'My Outbox'
  },
] as Array<SecondaryItem>

function SecondaryProducts() {
  return (
    <section className='whitespace-nowrap flex flex-row overflow-x-auto py-2 mt-4'>
      {secondary.map(item => (
        <div key={item.title} className='mx-4 w-3/12 flex flex-col items-center justify-center'>
          <item.icon color='#0770cd' size='1.4rem' />
          <div className='text-xs mt-1'>{item.title}</div>
        </div>
      ))}
    </section>
  )
}