import Input from '@/components/Input';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

export default function Auth() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [variant, setVariant] = useState('login');
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === 'login' ? 'register' : 'login',
    );
  }, []);

  const login = useCallback(async () => {
    try {
      await signIn('credentials', {
        email,
        password,
        redirect: false,
        callbackUrl: '/',
      });
      router.push('/profiles');
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);

  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {
        email,
        name,
        password,
      });
      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, login]);

  return (
    <div className="relative h-full w-full bg-[url('/images/login_background.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === 'login' ? 'Incia sesión' : 'Crear cuenta'}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === 'register' && (
                <Input
                  label="Nombre"
                  onChange={(e: any) => setName(e.target.value)}
                  id="name"
                  type="name"
                  value={name}
                />
              )}
              <Input
                label="Email"
                onChange={(e: any) => setEmail(e.target.value)}
                id="email"
                type="email"
                value={email}
              />
              <Input
                label="Contraseña"
                onChange={(e: any) => setPassword(e.target.value)}
                id="password"
                type="password"
                value={password}
              />
            </div>
            <button
              onClick={variant === 'login' ? login : register}
              className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
            >
              {variant === 'login' ? 'Iniciar sesión' : 'Crear'}
            </button>
            <div className="flex flex-row items-center gap-4 mt-8 justify-center">
              <div
                onClick={() => signIn('google', { callbackUrl: '/profiles' })}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
              >
                <FcGoogle size={30} />
              </div>
              <div
                onClick={() => signIn('github', { callbackUrl: '/profiles' })}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
              >
                <FaGithub size={30} />
              </div>
            </div>
            <p className="text-neutral-500 mt-12">
              {variant === 'login'
                ? '¿Primera vez en Netflix?'
                : '¿Ya tienes una cuenta?'}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant === 'login' ? 'Registrate' : 'Incia sesión'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}