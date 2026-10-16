
"use client";

import { useState } from "react";

export default function ContactoPage() {
  const [enviado, setEnviado] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12">
      <div className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Contactanos
        </h1>

        <p className="mt-3 text-slate-600">
          Contanos qué servicio necesitás y te ayudaremos a encontrar
          al profesional indicado.
        </p>

        <form
          className="mt-8 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            setEnviado(true);
          }}
        >
          <div>
            <label htmlFor="nombre" className="text-slate-900 bg-white mb-1 block font-medium">
              Nombre completo
            </label>
            <input
              id="nombre"
              name="nombre"
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label htmlFor="telefono" className="mb-1 block font-medium">
              Teléfono
            </label>
            <input
              id="telefono"
              name="telefono"
              type="tel"
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500"
              placeholder="Tu número de contacto"
            />
          </div>

          <div>
            <label htmlFor="servicio" className="mb-1 block font-medium">
              Servicio que necesitás
            </label>
            <input
              id="servicio"
              name="servicio"
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500"
              placeholder="Ej.: plomería, electricidad..."
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="mb-1 block font-medium">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              required
              rows={4}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500"
              placeholder="Contanos qué necesitás"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Enviar solicitud
          </button>

          {enviado && (
            <p className="rounded-lg bg-green-50 p-3 text-green-700">
              Formulario probado correctamente. Todavía falta conectar el envío.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
