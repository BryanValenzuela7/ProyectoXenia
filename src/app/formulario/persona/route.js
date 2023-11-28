import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function POST(request){
    const {nombre, puesto, correo} = await request.json
    const nuevaPersona = await prisma.persona.create({
        nombre,
        puesto,
        correo,
    })
    return NextResponse(nuevaPersona)

}