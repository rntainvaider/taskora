interface InputProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function Input({ value, onChange }: InputProps) {
  return (
    <input
      value={value}
      onChange={onChange}
      type="text"
      placeholder='Добавить задачу...'
      className='flex-1 rounded-lg bg-(--card) text-sm text-(--foreground) border border-(--input) px-4 py-2.5 placeholder:text-(--muted-foreground) focus:outline-none focus:ring-2 focus:ring-(--ring)/30'
    />
  )
}

export default Input;