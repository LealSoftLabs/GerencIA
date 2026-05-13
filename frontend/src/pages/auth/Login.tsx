import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, Sparkles } from 'lucide-react';

export default function Login() {
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
    <div className="min-h-screen bg-[#F8FBFF] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
        
        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-[#1165D0] to-[#0D4FA8] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,white,transparent_40%)]" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                <Sparkles size={24} />
              </div>

              <div>
                <h1 className="text-2xl font-bold">GerencIA</h1>
                <p className="text-white/70 text-sm">
                  Gestão inteligente para empresas
                </p>
              </div>
            </div>

            <h2 className="text-5xl font-bold leading-tight mb-6">
              Gerencie sua empresa com inteligência.
            </h2>

            <p className="text-lg text-white/80 leading-relaxed max-w-lg">
              Agenda, financeiro, marketing, relatórios, IA e muito mais
              em uma única plataforma moderna.
            </p>
          </div>

          <div className="relative z-10 flex items-center gap-4 mt-10">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/30 border border-white/20" />
              <div className="w-10 h-10 rounded-full bg-white/20 border border-white/20" />
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20" />
            </div>

            <p className="text-sm text-white/70">
              Empresas utilizando o GerencIA diariamente.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-8 md:p-12 bg-white">
          <div className="max-w-md mx-auto w-full">
            
            <div className="mb-10">
              <h2 className="text-4xl font-bold text-white mb-3">
                Entrar
              </h2>

              <p className="text-gray-400">
                Acesse sua conta para continuar.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

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
                    className="w-full bg-[#F8FAFC] border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-white outline-none focus:border-[#1165D0] transition-all"
                    required
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm text-gray-300">
                    Senha
                  </label>

                  <Link
                    to="/forgot-password"
                    className="text-sm text-[#1165D0] hover:text-violet-300 transition-colors"
                  >
                    Esqueceu a senha?
                  </Link>
                </div>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Digite sua senha"
                    className="w-full bg-[#F8FAFC] border border-white/10 rounded-2xl py-3.5 pl-12 pr-14 text-white outline-none focus:border-[#1165D0] transition-all"
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

              {/* REMEMBER */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded border-white/20"
                  />

                  Lembrar de mim
                </label>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#1165D0] to-[#0D4FA8] hover:opacity-90 transition-all rounded-2xl py-3.5 text-white font-semibold shadow-lg shadow-violet-900/40"
              >
                {loading ? 'Entrando...' : 'Entrar'}
              </button>
            </form>

            {/* REGISTER */}
            <div className="mt-8 text-center text-gray-400 text-sm">
              Não possui conta?{' '}

              <Link
                to="/register"
                className="text-[#1165D0] hover:text-violet-300 font-medium"
              >
                Criar conta
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}