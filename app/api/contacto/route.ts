
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const datos = await request.json();
    const { nombre, telefono, email, servicio, mensaje } = datos;

    // Comprobar que todos los campos sean textos.
    if (
      typeof nombre !== "string" ||
      typeof telefono !== "string" ||
      typeof email !== "string" ||
      typeof servicio !== "string" ||
      typeof mensaje !== "string" ||
      !nombre.trim() ||
      !telefono.trim() ||
      !email.trim() ||
      !servicio.trim() ||
      !mensaje.trim()
    ) {
      return NextResponse.json(
        { error: "Completá todos los campos correctamente." },
        { status: 400 }
      );
    }

    // Validar el teléfono.
    const telefonoLimpio = telefono.trim();
    const digitosTelefono = telefonoLimpio.replace(/\D/g, "");

    const telefonoValido =
      /^[+()\d -]+$/.test(telefonoLimpio) &&
      digitosTelefono.length >= 10 &&
      digitosTelefono.length <= 15;

    if (!telefonoValido) {
      return NextResponse.json(
        { error: "Ingresá un teléfono válido con entre 10 y 15 dígitos." },
        { status: 400 }
      );
    }

    // Validar el correo electrónico.
    const emailLimpio = email.trim();

    const emailValido =
      emailLimpio.length <= 254 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailLimpio);

    if (!emailValido) {
      return NextResponse.json(
        { error: "Ingresá un correo electrónico válido." },
        { status: 400 }
      );
    }

    // Registrar la solicitud recibida.
    console.log("Nueva solicitud de contacto:", {
      nombre: nombre.trim(),
      telefono: telefonoLimpio,
      email: emailLimpio,
      servicio: servicio.trim(),
      mensaje: mensaje.trim(),
    });

    return NextResponse.json(
      { mensaje: "Solicitud recibida correctamente." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "No se pudo procesar la solicitud." },
      { status: 500 }
    );
  }
}
