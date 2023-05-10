import { mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';
import Link from 'next/link';

export const Header = ({ sidebarId }: { sidebarId: string }) => {
  return (
    <div className='navbar bg-base-100 bg-opacity-60 backdrop-blur-lg z-50'>
      <div className='flex-none'>
        <label
          className='btn btn-square btn-ghost drawer-button'
          htmlFor={sidebarId}
        >
          <Icon path={mdiMenu} size={1.5} />
        </label>
      </div>
      <div className='flex-1'>
        <Link className='btn btn-ghost normal-case text-xl' href='users'>
          Fiu-Fit
        </Link>
      </div>
      <div className='flex-none'>
        <button className='btn btn-square btn-ghost'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block w-5 h-5 stroke-current'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
