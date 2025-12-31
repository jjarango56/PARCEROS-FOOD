type ButtonProps = {
    content: React.ReactNode,
    change:() => void
}
export const Buttons = ({content, change}:ButtonProps) =>{
    return<button onClick={change}>{content}</button>
}