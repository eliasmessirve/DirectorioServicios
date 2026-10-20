
"use client";

import { useState } from "react";

export default function ContactoPage() {
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

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
          onSubmit={async (e) => {
            e.preventDefault();
            setEnviado(false);
            setCargando(true);
            setError("");

            const formulario = e.currentTarget;
            const datos = new FormData(formulario);

            try {
              const respuesta = await fetch("/api/contacto", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json", 
                },
                body: JSON.stringify({
                  nombre: datos.get("nombre"),
                  telefono: datos.get("telefono"),
                  email: datos.get("email"),
                  servicio: datos.get("servicio"),
                  mensaje: datos.get("mensaje"),
                }),
              });
              const resultado = await respuesta.json();

              if (!respuesta.ok) {
                throw new Error(resultado.error || "No se pudo enviar la solicitud");
              }
              setEnviado(true);
              formulario.reset();
            }
            catch (error) {
              setError(
                error instanceof Error
                ? error.message
                :"Ocurrió un error al enviar la Solicitud"
              );
            }
            finally {
              setCargando(false);
            }
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
            <label htmlFor="email" className="mb-1 block font-medium text-slate-900">
              Correo electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              maxLength={254}
              pattern="(?=(?:\D*\d){10,})[0-9+() -]+"
              title="Ingresá un correo válido. Ejemplo: nombre@gmail.com"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500"
              placeholder="Ej.: nombre@gmail.com"
            />
          </div>

          <div>
            <label htmlFor="telefono" className="mb-1 block font-medium text-slate-900">
              Teléfono
            </label>
            <input
              id="telefono"
              name="telefono"
              type="tel"
              required
              minLength={10}
              maxLength={20}
              pattern="(?=(?:\D*\d){8,})[0-9+() -]+"
              title="Ingresá un teléfono válido con al menos 8 dígitos."
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500"
              placeholder="Ej.: +54 264 1234567"
            />
          </div>

          <div>
            <label htmlFor="telefono" className="mb-1 block font-medium text-slate-900">
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
            <label htmlFor="telefono" className="mb-1 block font-medium text-slate-900">
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
              disabled={cargando}
              className="w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
               {cargando ? "Enviando..." : "Enviar solicitud"}
            </button>


          {enviado && (
            <p className="rounded-lg bg-green-50 p-3 text-green-700">
            </p>
          )}
          {error && (
             <p role="alert" className="rounded-lg bg-red-50 p-3 text-red-700">
               {error}
            </p>
          )}

          {enviado && (
           <p role="status" className="rounded-lg bg-green-50 p-3 text-green-700">
            ¡Solicitud recibida correctamente!
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
