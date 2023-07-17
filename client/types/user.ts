export default interface IUser {
    _id?: string,
    firstname: string,
    lastname: string,
    password: string,
    mail: string,
    image: string,
    age: number,
    phone: number,
    address: string,
    github: string,
    linkedin: string,
    portafolio?: string | null
    role?: string
}

export type RequestUser = {
    user: IUser
}