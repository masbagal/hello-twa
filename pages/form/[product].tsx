import { DocumentContext } from 'next/document';
import { PRIMARY_PRODUCTS } from '../../constants/product';
import InputField from '../../components/InputField';

interface PageProps {
  product: string;
}

export default function SearchForm(props: PageProps) {
  const { product } = props;
  const productInformation = PRIMARY_PRODUCTS.find(p => p.id === product);

  return (
    <>
      <section className='w-full px-4 py-4 flex flex-row' style={{ background: productInformation.backgroundColor }}>
        <productInformation.icon color='white' size='2rem' />
        <div className='ml-4 text-white'>
          <div className='font-bold'>Get Promo</div>
          <div className='text-sm leading-tight'>Get bigger promo on another real app! This app does nothing</div>
        </div>
      </section>
      <div style={{ background: productInformation.backgroundColor }} className='w-full h-16' />
      <div className='bg-white rounded-lg shadow p-4 mx-4' style={{ marginTop: '-4rem' }}>
        <InputField label='From' value='Yogyakarta' />
        <InputField label='To' value='Surakarta' />
        <InputField label='Departure Date' value='32 December 2020' />
        <InputField label='Return Date' value='14 February 2021' />
        <button className='bg-yellow-500 text-white'>Search Later</button>
      </div>
    </>
  )
}

SearchForm.getInitialProps = (ctx: DocumentContext) => {
  return {
    product: ctx.query.product
  }
}