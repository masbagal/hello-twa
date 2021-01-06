import { useState } from 'react';
import { IconType } from 'react-icons';
import { motion } from "framer-motion"
import { useRouter } from 'next/router';
import Link from 'next/link';

interface Props {
  icon: IconType;
  title: string;
  backgroundColor: string;
  onClick?: () => void;
  url: string;
}

const animateVariants = {
  default: {
    scale: 1,
  },
  clicked: {
    scale: 30,
  }
}

export default function ProductIcon(props: Props) {
  const router = useRouter();
  const { icon, title, backgroundColor, url } = props;
  const [isClicked, setClicked] = useState(false);
  const RenderedIcon = icon;

  const handleClick = (e: any) => {
    e.preventDefault();
    setClicked(true);
    setTimeout(() => { router.push(url) }, 400)
  }

  return (
    <Link href={url} passHref>
      <a className='select-none'>
        <div className='flex flex-col items-top w-12 justify-center select-none'>
          <motion.div
            className='h-12 w-12 rounded-full bg-red-500 flex justify-center items-center'
            style={{ background: backgroundColor, boxShadow: `1px 2px 8px ${backgroundColor}` }}
            animate={isClicked ? "clicked" : "default"}
            variants={animateVariants}
            onClick={handleClick}
            transition={{ duration: 0.3 }}
          >
            {isClicked ? null : <RenderedIcon color='white' size='1.4rem' />}
          </motion.div>
          <div className='text-center text-xs mt-2'>{title}</div>
        </div>
      </a>
    </Link>
  )
}

