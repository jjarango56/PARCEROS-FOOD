
export const Input = ({query,handleSearch,className,holder,type})=>{
    return<><input type={type} value={query} className={className} onChange={handleSearch} placeholder={holder}/></>
}