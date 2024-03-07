export interface Cliente {
    readonly _id: number;
    nombre: string;
    direccion: string;
    telefono: string;
    email: string;
    tDocumento: string;
    nDocumento: string;
    estado: boolean;
}