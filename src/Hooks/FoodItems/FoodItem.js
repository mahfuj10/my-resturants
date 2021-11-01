import { useEffect, useState } from "react"



const useFoodEffect = () => {

const [ items, setItems ] = useState([]);

const MatchFoodDetails = () => {

    useEffect(()=> {
        
        fetch("https://mahfuj10.github.io/data/data.json")
           .then(result => result.json())
           .then(data => setItems(data))
    },[])
}

return {
    items,
    MatchFoodDetails
}

}
export default useFoodEffect;