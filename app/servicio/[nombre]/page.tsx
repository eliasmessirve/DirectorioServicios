import servicios from "../../data/servicios";
import Link from "next/link";

type Props = {
  params: {
    nombre: string;
  };
};

export default function Servicio({ params }: Props) {
  const servicio = servicios.find( 
    servicio => servicio.nombre.toLowerCase() === params.nombre
  );

  if (!servicio) {
    return (<h1>Servicio no encontrado</h1>)
  }

return (
  <div className=" max-w-6xl mx-auto px-6 py-10">
    <Link
      href="/"
      className="bg-blue-600 font-semibold text-white inline-flex items-center gap-2 border border-blue-600 px-4 py-3 rounded-full"
    >
      ← Volver
    </Link>

    <div className="max-w-7xl mx-auto mt-8 bg-white rounded-3xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
      <img
        src={servicio.imagen}
        alt={servicio.nombre}
        className="w-full h-96 object-cover shadow-xl rounded-lg"
      />
      <div className="flex flex-col justify-center gap-5">
        <p className={`${servicio.color} font-bold px-4 py-2 rounded-xl w-fit`}>
          {servicio.categoria}
        </p>

        <h1 className="text-3xl font-bold text-blue-600">
          {servicio.nombre}
        </h1>

        <p className="text-3xl font-bold text-blue-600 ">
          ${servicio.precio}
        </p>

        <p className="text-lg text-slate-600 leading-relaxed">
          {servicio.descripcion}
        </p>
          <div className="border-t border-slate-200 mt-6 pt-5" >
          </div>
          <div className="bg-blue-500 rounded-lg p-5">
            <p className="text-xl font-bold text-white">
              
          Telefono: {servicio.telefono}
        </p>
          </div>
          <a href="{`tel:${servicio.telefono}`}" className="mt-5 bg-blue-500 hover:bg-blue-700 text-white text-center font-bold text-lg py-4 rounded-2xl transition">
            
            Contactar
          </a>
        
      </div>
    </div>
    <footer id="contacto" className="max-w-7xl mx-auto bg-slate-600 text-white mt-16">
  <div className="px-6 py-12">

    <h2 className="text-2xl font-bold">
      DirectorioServicios
    </h2>

    <p className="text-slate-300 mt-3 max-w-md">
      Conectamos vecinos con profesionales locales confiables y de calidad.
    </p>

    <p className="text-slate-300 mt-6">
      Contacto: info@directorioservicios.com
    </p>

    <p className="text-slate-400 text-sm mt-10 border-t border-slate-700 pt-6">
      © 2026 DirectorioServicios. Todos los derechos reservados.
    </p>

  </div>
</footer>
  </div>
);
}
