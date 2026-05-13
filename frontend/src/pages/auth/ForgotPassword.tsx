import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

export default function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0B1120] flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#111827] shadow-2xl p-8 md:p-10">

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-3">
            Recuperar Senha
          </h1>

          <p className="text-gray-400 text-sm leading-relaxed">
            Digite seu email para receber o link de recuperação.
          </p>
        </div>

        {success ? (
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-4 text-emerald-300 text-sm">
            Link enviado com sucesso para seu email.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">

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

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:opacity-90 transition-all rounded-2xl py-3.5 text-white font-semibold"
            >
              {loading ? 'Enviando...' : 'Enviar link'}
            </button>

          </form>
        )}

        <div className="mt-8 text-center text-sm text-gray-400">
          <Link
            to="/login"
            className="text-violet-400 hover:text-violet-300"
          >
            Voltar para login
          </Link>
        </div>

      </div>
    </div>
  );
}