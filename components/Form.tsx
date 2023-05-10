export default function Form({
  children,
  onSubmit,
  className,
}: {
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
}) {
  return (
    <form
      className={`p-5 border-base-content/5 border bg-base-200 rounded-box ${className}`}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}
