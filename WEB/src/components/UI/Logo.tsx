import { SquareCheckBig } from 'lucide-react';

type Props = {
  className?: string;
};

function Logo({ className = "" }: Props) {
  return (
    <div className={`flex items-center gap-2 justify-center ${className}`}>
      <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-(--primary) transition duration-200 group-hover:scale-105'>
        <SquareCheckBig className='w-5 h-5 text-white' />
      </div>
      <span className="text-xl font-bold text-(--foreground)">
        Taskora
      </span>
    </div>
  )
}

export default Logo;