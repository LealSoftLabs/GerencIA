import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Building2
} from 'lucide-react';

export default function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0B1120] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl rounded-3xl overflow-hidden border border-white/10 bg-[#111827] shadow-2xl">

        <div className="p-8 md:p-12">
          
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-white mb-3">
              Criar Conta
            </h1>

            <p className="text-gray-400">
              Comece agora sua experiência com o GerencIA.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">

              {/* NAME */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Nome
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full bg-[#1F2937] border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-white outline-none focus:border-violet-500"
                    required
                  />
                </div>
              </div>

              {/* COMPANY */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Empresa
                </label>

                <div className="relative">
                  <Building2
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                  <input
                    type="text"
                    placeholder="Nome da empresa"
                    className="w-full bg-[#1F2937] border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-white outline-none focus:border-violet-500"
                    required
                  />
                </div>
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Email
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type="email"
                  placeholder="Digite seu email"
                  className="w-full bg-[#1F2937] border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-white outline-none focus:border-violet-500"
                  required
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Senha
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Crie sua senha"
                  className="w-full bg-[#1F2937] border border-white/10 rounded-2xl py-3.5 pl-12 pr-14 text-white outline-none focus:border-violet-500"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:opacity-90 transition-all rounded-2xl py-3.5 text-white font-semibold shadow-lg shadow-violet-900/40"
            >
              {loading ? 'Criando conta...' : 'Criar conta'}
            </button>
          </form>

          {/* LOGIN */}
          <div className="mt-8 text-center text-gray-400 text-sm">
            Já possui conta?{' '}

            <Link
              to="/login"
              className="text-violet-400 hover:text-violet-300 font-medium"
            >
              Entrar
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}