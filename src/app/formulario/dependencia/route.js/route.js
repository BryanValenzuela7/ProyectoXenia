import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function POST(request){
    const {nombre_dependencia, domicilio, telefono, nombre_titular, cargo_puesto, departamento_area} = await request.json
    const nuevaDependencia = await prisma.dependencia.create({
        data:{
            nombre_dependencia,
            domicilio,
            telefono,
            nombre_titular,
            cargo_puesto,
            departamento_area
        }
    })
    return NextResponse.json(nuevaDependencia)
}
