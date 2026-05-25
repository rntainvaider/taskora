import { SquareCheckBig } from 'lucide-react';

function Footer() {
  return (
    <footer className='border-t border-(--border) px-4 py-5'>
      <div className='flex flex-col gap-3 items-center justify-between max-w-5xl mx-auto sm:flex-row'>
        <div className='flex items-center gap-1 text-sm'>
          <SquareCheckBig className='w-4 h-4 text-(--primary) mr-1' />
          <span className='font-semibold text-(--foreground)'>
            Taskora
          </span>
          <span className='text-(--muted-foreground)'>
            — твои задачи под контролем
          </span>
        </div>
        <p className='text-xs text-(--muted-foreground)'>
          © 2026 Taskora. Все права защищены.
        </p>
      </div>
    </footer>
  )
}

export default Footer;