export interface datecount{
    datetime:String,
    count:number
}
export interface url{
    id?:number,
    longURL:string,
    short:string,
    count:number,
    time:Array<datecount>
}
export interface urlChart{
    name:String,
    value:number
}
export interface user{
    username:string,
    passeord:string,
    dob:string
}
export interface LoginUser{
    username:string,
    password:string
}