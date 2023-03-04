export const Save = (name: string, value:any) => 
{
    if (value == "" || value==null || value==undefined)
    {
        return; 
    }
    
    const jsonValue: string = JSON.stringify(value);
    localStorage.setItem(name,jsonValue);

}

export const Get = (name:string) : any =>{
    const data:string | null =localStorage.getItem(name);

    if (data==null) {
        
        return [];
    }
    
    
    try
    {

        return JSON.parse(data);
    }
    catch {
        return [];
    }
    

}