'use client';
import { mdiAccountGroup, mdiDumbbell } from '@mdi/js';
import Icon from '@mdi/react';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode, useRef } from 'react';
import FiuFitIcon from '@/public/fiufit.svg';

export const SidebarItems: Array<{
  displayName: string;
  iconPath: string;
  link: string;
}> = [
  {
    displayName: 'Users',
    iconPath:    mdiAccountGroup,
    link:        '/users',
  },
  {
    displayName: 'Workouts',
    iconPath:    mdiDumbbell,
    link:        '/workouts',
  },
];

export default function Sidebar({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) {
  const sidebarRef = useRef<HTMLInputElement | null>(null);

  const hideSidebar = () => {
    sidebarRef.current?.click();
  };

  return (
    <aside className='drawer'>
      <input
        id={id}
        type='checkbox'
        className='drawer-toggle'
        ref={sidebarRef}
      />
      <div className='drawer-content'>{children}</div>
      <div className='drawer-side'>
        <label htmlFor='drawer' className='drawer-overlay'></label>
        <ul className='menu p-4 w-80 bg-base-100 text-base-content'>
          <div className='w-full flex justify-center py-3 my-3 border-b border-base-content'>
            <Link href='/users' className='w-1/3'>
              <Image
                src={FiuFitIcon}
                alt={'Fiu-Fit Icon'}
                className='w-full invert dark:invert-0'
                priority
              />
            </Link>
          </div>

          {SidebarItems.map(item => (
            <li key={item.link}>
              <Link href={item.link} onClick={hideSidebar}>
                <Icon path={item.iconPath} size={1.5} />
                {item.displayName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
