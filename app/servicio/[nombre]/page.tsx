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
  <div className="max-w-6xl mx-auto px-6 py-10">
    <Link
      href="/"
      className="bg-blue-600 font-bold text-white inline-flex items-center gap-2 border border-blue-600 px-4 py-2 rounded-full"
    >
      ← Volver
    </Link>

    <div className="mt-8 grid grid-cols-2 gap-10 bg-gray-400 p-8 rounded-2xl">
      <img
        src={servicio.imagen}
        alt={servicio.nombre}
        className="w-full h-96 object-cover shadow-xl rounded-lg"
      />
      <div className="flex flex-col justify-center">
        <p className={`${servicio.color} inline-block px-3 py-1 rounded-lg w-fit`}>
          {servicio.categoria}
        </p>

        <h1 className="text-4xl font-bold mt-3">
          {servicio.nombre}
        </h1>

        <p className="text-2xl font-semibold mt-4">
          ${servicio.precio}
        </p>

        <p className="text-gray-600 mt-6">
          {servicio.descripcion}
        </p>

        <p className="mt-6">
          Telefono: {servicio.telefono}
        </p>
      </div>
    </div>
  </div>
);
}
