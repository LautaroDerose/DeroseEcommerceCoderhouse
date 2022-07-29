import {useState} from 'react'

export const useItemCount = (stock) => {
   
    const [amount, setAmount] = useState(1)

    const handleValue = (value) => {
        const result = amount + value
        if(result<=stock && result>0){
        setAmount(amount+value)
        }
    }
    
    return {
        handleValue, amount
    }
}
