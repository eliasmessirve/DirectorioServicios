import Link from "next/link";
import servicios from "./data/servicios";
type Props = {
  nombre: string;
  precio: number;
  categoria: string;
  descripcion: string;
  imagen: string;
  ruta: string;
  color: string;
};

function Tarjeta({
  nombre,
  precio,
  categoria,
  descripcion,
  imagen,
  ruta,
  color
}: Props) {
  return (
    <div className="bg-gray-200">
      <div className="p-5 rounded-lg bg-white border shadow mx-2 my-2 flex flex-col">
        <img className="w-full h-48 object-cover rounded-md" src={imagen} alt={nombre}/>
        <p className={`font-medium  w-fit px-1 py-1 mt-3 rounded-full inline-block ${color}`}>{categoria}</p>
        <h2 className="text-xl font-bold mt-1">{nombre}</h2>
        <p className="font-semibold mt-1">${precio}</p>  
        <p className="text-gray-600 text-sm mt-2" flex-1>{descripcion}</p>
         <Link href={ruta} className="mt-4 w-fit items-center gap-2  border border-blue-600 text-blue-600 px-4 py-2 rounded-full "> Ver Más → <span></span>
    </Link>
      </div>
    
    </div>
  );
}


export default function Home() {
  return (
    <div className="bg-white">
      <header className="flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold mb-4 py-1">Directorio Servicio</h1>
        <nav>
          <ul className="flex space-x-4">
            <Link href="/">Inicio</Link>
            <Link href="/servicio">Servicios</Link>
            <Link href="/">Contacto</Link>
          </ul>
        </nav>
      </header>
      <section
        className="relative min-h-[500px] max-w-7xl mx-auto bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/part-male-construction-worker.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent " />

        <div className="relative z-10 px-8 text-white">
          <h2 className="text-4xl font-bold my-8">
            <span className="block">Los servicios que</span>
            <span className="block">necesitás, los encontrás</span>
            <span className="block text-blue-500">acá</span>
          </h2>

          <p className="text-lg my-12">
            Profesionales y servicios para lo que necesitas
          </p>

          <Link
            href="/servicio"
            className="bg-blue-600 text-white font-bold px-6 py-3 rounded-full"
          >
            Ver servicios <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    <div className="bg-gray-200 max-w-7xl mx-auto px-8 pt-5 mt-6">
      <h3 className="text-blue-500 font-medium px-3">NUESTROS SERVICIOS</h3>
      <h2 className="text-3xl font-bold text-start px-3 mt-1
      ">Servicios Destacados</h2>
      <p className="text-gray-600 text-lg mt-2 max-w-2xl px-3">
  Explora algunos de los servicios mas buscados. Hace clic en cada uno para ver mas detalles y contactar al profesional.
</p>
      <div className="grid grid-cols-4">
         {servicios.map(servicio => (<Tarjeta
        key={servicio.nombre} 
       nombre={servicio.nombre} 
       precio={servicio.precio}
        categoria={servicio.categoria}
       descripcion={servicio.descripcion}
        imagen={servicio.imagen}
        ruta={servicio.ruta}
        color={servicio.color}
     />))}
      </div>
      </div>
    </div> 

  );
    
}
