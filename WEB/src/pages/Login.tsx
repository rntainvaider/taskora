import { useState } from "react";
import Logo from "../components/UI/Logo";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6 rounded-2xl border border-(--border) bg-(--card) p-8">
        <Logo />
        <div className="text-center">
          <h1 className="text-2xl font-bold">
            С возвращением!
          </h1>
          <p className="mt-1 text-sm text-(--muted-foreground)">
            Войдите в свой аккаунт
          </p>
        </div>
        <button className="flex w-full items-center justify-center gap-2 rounded-lg cursor-pointer border border-(--input) bg-(--background) px-4 py-2.5 text-sm transition-colors hover:bg-(--secondary) focus:outline-none focus:ring-2 focus:ring-(--ring)/30">
          <svg className="h-4 w-4" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"></path>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"></path>
          </svg>
          Продолжить с Google
        </button>
        <div className="relative flex items-center justify-center text-xs uppercase">
          <div className="flex-1 border-t border-(--border)" />
          <span className="bg-(--card) px-2 text-(--muted-foreground)">
            или
          </span>
          <div className="flex-1 border-t border-(--border)" />
        </div>
        <form onSubmit={handleLogin} className="space-y-3">
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com" className="w-full rounded-lg border border-(--input) bg-(--background) px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-(--ring)/30" />
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} minLength={6} placeholder="Пароль (минимум 6 символов)" className="w-full rounded-lg border border-(--input) bg-(--background) px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-(--ring)/30" />
          <button className="w-full rounded-lg bg-(--primary) px-4 py-2.5 text-sm cursor-pointer font-medium text-(--primary-foreground) transition-opacity hover:opacity-90">
            Войти
          </button>
        </form>
        <p className="text-center text-sm text-(--muted-foreground)">
          Нет аккаунта?
          <Link to="/register" className="font-medium text-(--primary) ml-1 hover:underline cursor-pointer">
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login;