import { useMemo, useState, createContext } from 'react'
import {useSelector} from 'react-redux'
import Quiz from '../../components/Quiz/Quiz'
import QuizInitial from '../../components/QuizInitial/QuizInitial'
import useCheckboxesState from '../../hooks/useCheckboxesState'
import DisplayPreloader from '../../components/DisplayPreloader/DisplayPreloader'

const QuizzStartContext = createContext()

const MoviesPage = () => {

    const data = useSelector(data => data.movies)

    const [showPreloader, setShowPreloader] = useState(true)

    const [quizzStart, setQuizzStart] = useState(false)

    const checkboxes = [
        {   
            id: 'all',
            type: 'checkbox',
            checked: true,
            labelValue: 'все'
        },

        {   
            id: 'russianFilms',
            type: 'checkbox',
            checked: true,
            labelValue: 'русские'
        },

        {   
            id: 'americanFilms',
            type: 'checkbox',
            checked: true,
            labelValue: 'американские'
        },

        {   
            id: 'ussrFilms',
            type: 'checkbox',
            checked: true,
            labelValue: 'советские'
        },
    ]

    const [inputRangeValue, setInputRangeValue] = useState(100) 

    const [checkboxesState, checkboxHandler] = useCheckboxesState(checkboxes)

    const filteredAndSortedQuestions = useMemo(() => {

        const addRandomId = (data) => {
        
            const idGenerate = () => {
    
                const id = Math.random()
                return data.find(item => item.id === id) ? idGenerate() : id
    
            }
    
            data.forEach(question => {
                question.randomId = idGenerate()
            })
    
        }


        let questions = [...data.questions]

        addRandomId(questions)

        let sortedQuestions = questions.sort((questionOne, questionTwo) => questionOne.randomId - questionTwo.randomId ) 
        
        const categoryes = checkboxesState.filter(item => item.checked === true)

        if (categoryes.find(item => item.id === 'all')) return sortedQuestions
        else {
            return (
                    sortedQuestions.filter(item => {
                        return categoryes.find(category => category.id === item.category)
                    })
                    
            )
        }
        
    }, [checkboxesState, quizzStart])

    const sliceQustions = useMemo(() => {

        const sliceQuestions = (questions, maxValue) => {

            return questions.slice(0, +maxValue + 1)

        }

        return sliceQuestions(filteredAndSortedQuestions , inputRangeValue)
    
    }, [inputRangeValue, checkboxesState, quizzStart])

    setTimeout(() => {
        setShowPreloader(false)
    },600)

    return (
        <div>
            {
                showPreloader
                ? <DisplayPreloader />
                : <>
                    {
                        quizzStart
                        ? (
                            <QuizzStartContext.Provider value={{quizzStart: setQuizzStart}}>
                                <Quiz 
                                questions = {sliceQustions}
                                bestResult = {data.bestResult}
                                />
                            </QuizzStartContext.Provider>
                        )
                        : (
                            <QuizInitial 
                            category={data.category}
                            setQuizzStart={setQuizzStart}
                            checkboxesState={checkboxesState}
                            bestResult={data.bestResult}
                            checkboxHandler = {checkboxHandler}
                            questionsLength = {sliceQustions.length}
                            maxInputRaveValue = {filteredAndSortedQuestions.length}
                            inputRangeValue={inputRangeValue}
                            setInputRangeValue={setInputRangeValue}
                        />
                        )
                        }
                </>
            }
            
        </div>
    )
}

export { QuizzStartContext }
export default MoviesPage