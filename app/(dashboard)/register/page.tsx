import RegisterForm from './RegisterForm';

export default function Register() {
  return (
    <main className='min-w-full p-12'>
      <h1 className='text-4xl mb-4'>Registrar administrador</h1>
      <div className='flex justify-center items-center'>
        <RegisterForm />
      </div>
    </main>
  );
}
