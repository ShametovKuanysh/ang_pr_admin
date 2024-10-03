export interface IMain {
    id: number,
    [key: string]: any | undefined
}

export interface Post extends IMain {
    userId: number,
    title: string,
    body: string
}

export interface Comment extends IMain {
    postId: number,
    name: string,
    email: string,
    body: string
}

export interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geo, 
}

export interface User extends IMain {
    name: string,
    username: string,
    email: string,
    phone: string,
    website: string,
    address: Address
    company: Company
}


export interface Geo {
    lat: string,
    lng: string
}

export interface Company {
    name: string,
    catchPhrase: string,
    bs: string
}

export interface Field{
    title: string,
    code: string
}