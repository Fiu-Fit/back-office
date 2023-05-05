'use client';

import { Button } from '@mui/material';
import Link from 'next/link';

export default function ExerciseList({
  headers,
  className,
}: {
  headers: string[];
  className?: string;
}) {
  return (
    <div className={`h-full rounded-md overflow-hidden ${className}`}>
      <div className='h-full dark:bg-gray-950 overflow-y-scroll'>
        <table className='w-full divide-y divide-gray-200 dark:divide-black'>
          <thead>
            <tr className='sticky top-0 bg-gray-50 dark:bg-zinc-900 z-50'>
              {headers.map(header => (
                <th
                  key={header}
                  className='px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider'
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='bg-white dark:bg-zinc-950 divide-y divide-gray-700'>
            {Array.from(Array(105).keys()).map(i => (
              <tr key={i}>
                {headers.map(
                  header =>
                    header != '' && <td className='px-6 py-4'> {header} </td>
                )}
                <td className='px-6 py-4'>
                  <Button href='#' LinkComponent={Link}> Detalles </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='bg-gray-50 dark:bg-zinc-900 px-4 py-3'>
        <div className='flex justify-between'>
          <button className='px-3 py-2 font-medium rounded-md dark:bg-zinc-950 text-gray-700 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-black active:text-gray-800 transition ease-in-out duration-150'>
            Anterior
          </button>
          <button className='px-3 py-2 font-medium rounded-md dark:bg-zinc-950 text-gray-700 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-black active:text-gray-800 transition ease-in-out duration-150'>
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}
