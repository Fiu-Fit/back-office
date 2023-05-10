'use client';
import { mdiAccountGroup, mdiDumbbell } from '@mdi/js';
import Icon from '@mdi/react';
import Link from 'next/link';

import { ReactNode } from 'react';

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

export const Sidebar = ({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) => {
  const hideSidebar = () => {
    const checkbox = document.getElementById(id) as HTMLInputElement;
    checkbox.checked = false;
  };

  return (
    <aside className='drawer'>
      <input id={id} type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col items-center justify-center'>
        {children}
      </div>
      <div className='drawer-side'>
        <label htmlFor='drawer' className='drawer-overlay'></label>
        <ul className='menu p-4 w-80 bg-base-100 text-base-content'>
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
};
