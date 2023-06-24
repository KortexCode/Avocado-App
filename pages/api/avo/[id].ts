//Crearemos las rutas para la Api de Next.js

import type { NextApiRequest, NextApiResponse } from 'next'
import Database from "@database";
//Obtenemos una instancias del manejador de la lógica de negocios
const db = new Database();
//Obtenemos el avocado que se desea según el parámetro id de la ruta
const oneAvos = async (req: NextApiRequest, res: NextApiResponse)=> {

    const {id} = req.query;
    const entry = await db.getById(id as string);
    res.setHeader('Content-type', 'application/json')
    res.status(200).json(entry);
}

export default oneAvos;