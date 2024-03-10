export class ClienteModel{
    constructor(
        public nombre: string,
        public telefono: string,
        public email: string,
        public tDocumento: string,
        public nDocumento: string,
        public estado?: boolean,
        public createdAt?: Date,
        public updatedAt?: Date,
        public direccion?: string,
        public readonly _id?: number,
    )
    {}
}