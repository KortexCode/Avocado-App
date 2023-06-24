//Crearemos las rutas para la Api de Next.js

import type { NextApiRequest, NextApiResponse } from 'next'
import Database from "@database";

//Obtenemos una instancias del manejador de la lógica de negocios
const db = new Database();
//Traer toda la información de avocados en una respuesta http
const allAvos = async (req: NextApiRequest, res: NextApiResponse)=>{
    const allEntries = await db.getAll();
    const size = allEntries.length;
    res.setHeader('Content-type', 'application/json')
    res.statusCode = 200;
    res.end(JSON.stringify({length: size, data: allEntries}));
}

export default allAvos;