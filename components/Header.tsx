import { mdiDotsHorizontal, mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';
import Link from 'next/link';

export default function Header({ sidebarId }: { sidebarId: string }) {
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
          <Icon path={mdiDotsHorizontal} size={1} />
        </button>
      </div>
    </div>
  );
}
