export type Props ={
    query:string
    style:string
    holder:string
    type:string
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Input = ({query,handleSearch,style,holder,type}:Props)=>{
    return<><input type={type} value={query} className={style} onChange={handleSearch} placeholder={holder}/></>
}