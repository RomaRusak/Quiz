import { useState, useEffect } from "react"

const useCheckboxesState = (checkboxes) => {

    const [checkboxesState, setCheckboxesState] = useState(checkboxes)

    const checkboxHandler = (id) => {
        
        if (id === 'all' && !checkboxesState.find(item => item.id === 'all').checked) {
            return (
                setCheckboxesState(prevState => (
                    [...prevState.map(item => {
                        return {...item, checked: !prevState.find(item => item.id === 'all').checked}
                    })]
                ))
            )  
        }
        
        setCheckboxesState(prevState => (
            [...prevState.map(item => {
                if (item.id === id) return {...item, checked: !item.checked}
                return item
            })]
        ))
    }
    
    useEffect(() => {
        if (checkboxesState.find(item => item.id === 'all').checked && checkboxesState.filter(item => item.id !== 'all').some(item => !item.checked)) {
           setCheckboxesState(prevState => (
            [...prevState.map(item => {
                if (item.id === 'all') return {...item, checked: !item.checked}
                return item
            })]
           ))
        }
    }, [checkboxesState])

    return [checkboxesState, checkboxHandler]

}

export default useCheckboxesState