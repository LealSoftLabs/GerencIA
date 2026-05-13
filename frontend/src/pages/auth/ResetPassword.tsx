import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Lock } from 'lucide-react';

export default function ResetPassword() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate('/login');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0B1120] flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#111827] shadow-2xl p-8 md:p-10">

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-3">
            Nova Senha
          </h1>

          <p className="text-gray-400 text-sm leading-relaxed">
            Crie uma nova senha para sua conta.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Nova senha
            </label>

            <div className="relative">
              <Lock
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Digite sua nova senha"
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

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:opacity-90 transition-all rounded-2xl py-3.5 text-white font-semibold"
          >
            {loading ? 'Salvando...' : 'Salvar nova senha'}
          </button>

        </form>

      </div>
    </div>
  );
}