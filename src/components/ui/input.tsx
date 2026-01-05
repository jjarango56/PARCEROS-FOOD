export type Props ={
    query:string
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Input = ({query,handleSearch}:Props)=>{
    return<><input type="text" value={query} onChange={handleSearch} placeholder="Buscar Productos"/></>
}