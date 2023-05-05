export default function WorkoutCardRow({
  title,
  text,
}: {
  title: string;
  text: any;
}) {
  return (
    <div className='mt-0 grid grid-cols-3 gap-4 border-t border-gray-600 px-6 py-5'>
      <dt className='text-sm leading-5 font-medium'> {title}</dt>
      <dd className='text-sm leading-5 mt-0 col-span-2'>{text}</dd>
    </div>
  );
}
