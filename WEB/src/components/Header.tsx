import { SquareCheckBig, UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './UI/Logo';

function Header() {
  return (
    <header className="border-b border-(--border) px-4 py-3">
      <div className='flex justify-between items-center max-w-5xl mx-auto'>
        <Link to="/" className='group focus:outline-none focus:ring-2 focus:ring-(--ring)/30'>
          <Logo />
        </Link>
        <button className="flex items-center gap-2 border border-(--border) rounded-lg px-3 py-2 bg-(--card) text-sm cursor-pointer hover:bg-(--secondary) transition duration-200 focus:outline-none focus:ring-2 focus:ring-(--ring)/30">
          <UserRound className='w-4 h-4' />
          <span className='hidden sm:inline'>
            Профиль
          </span>
        </button>
      </div>
    </header>
  )
}

export default Header;