import { useSelector } from "react-redux";


const SimpleApp = () =>{
    let count = useSelector((state) => state.value)

    return(
        <>
        count : {count}
        </>
    )

}

export default SimpleApp;