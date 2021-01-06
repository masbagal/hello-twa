import { IconType } from 'react-icons';
import Link from 'next/link';

interface Props {
  icon: IconType;
  title: string;
  backgroundColor: string;
  onClick?: () => void;
  url: string;
}

export default function ProductIcon(props: Props) {
  const { icon, title, backgroundColor, onClick, url } = props;
  const RenderedIcon = icon;
  return (
    <Link href={url} passHref>
      <a>
        <div className='flex flex-col items-top w-12 justify-center user-select-none'>
          <div className='h-12 w-12 rounded-full bg-red-500 flex justify-center items-center' style={{ background: backgroundColor, boxShadow: `1px 2px 8px ${backgroundColor}` }}>
            <RenderedIcon color='white' size='1.4rem' />
          </div>
          <div className='text-center text-xs mt-2'>{title}</div>
        </div>
      </a>
    </Link>
  )
}

