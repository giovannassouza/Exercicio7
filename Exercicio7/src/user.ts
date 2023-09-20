import * as bcrypt from 'bcrypt';

export class User {
    constructor(
        public name: string,
        public email: string,
        private password: string, 
        public id?: string
    ) {}

    setPassword(password: string): void {
        const saltRounds = 10
        const salt = bcrypt.genSaltSync(saltRounds)
        this.password = bcrypt.hashSync(password, salt)
    }

    // Verificando a senha do usuário
    checkPassword(password: string): boolean {
        return bcrypt.compareSync(password, this.password)
    }
}