import  Jwt  from "jsonwebtoken"; 
import { Response, Request, NextFunction } from "express";

interface JwtPayload {
    doctorID?: string;
}

function verifyToken(req: Request, res: Response, next: NextFunction){
    const token = req.cookies.auth;
    console.log(req.cookies)
    if(!token){
        res.send(401).json({error: 'Access Deniod!'});
    }
    try {
        const decoded = Jwt.verify(token!, 'you-secret-key') as JwtPayload;
        // @ts-expect-error Código feito em JavaScript, e como estou trazendo ele para o TypeScript, não sei muito bem como lidar com esse erro
        req.doctorID = decoded.doctorID;
        next()
    } catch {
        res.status(401).json({error: 'invalid token!'})
    }
}

export default verifyToken