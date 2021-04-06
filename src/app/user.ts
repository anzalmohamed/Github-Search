 
export class User {
    
    
    constructor(public id: number, public login: string, public avatar_url: string, 
        public html_url: string, public repos_url:string, public public_repos:number, 
        public followers:number, public following:number, public created_at:string, public updated_at: String){}
    
}
