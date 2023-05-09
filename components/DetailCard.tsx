export default function DetailCard({
  title,
  fields,
  className,
}: {
  title: string;
  fields: { [key: string]: any };
  className?: string;
}) {
  return (
    <div
      className={`bg-zinc-900 shadow overflow-hidden rounded-md ${className}`}
    >
      <div className='py-5 px-6'>
        <h2 className='font-medium text-lg'>{title}</h2>
      </div>
      <div className='p-0 flex flex-col justify-around'>
        {Object.entries(fields).map(([key, value]) => (
          <div className='mt-0 grid grid-cols-3 gap-4 border-t border-gray-600 px-6 py-5'>
            <dt className='text-sm leading-5 font-medium'> {key}</dt>
            <dd className='text-sm leading-5 mt-0 col-span-2'>{value}</dd>
          </div>
        ))}
      </div>
    </div>
  );
}
