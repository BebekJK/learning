import { useState } from 'react'
import './quizcontent.css'
import {decode} from 'html-entities';

const initialState = [{} , {} , {} , {} , {}];
const clickedStyle = {
    backgroundColor: "rgb(0,160,0)",
    color: "white",
};
const convertIndex = ['A' , 'B' , 'C' , 'D' , 'E'];

function QuizContent(props){

    const [answerStyle , setAnswerStyle] = useState(initialState);
    const {questionList , totalQuestion , changeNumber , changeButtonState , endQuiz} = props;

    const optionClicked = (index) => {
        const tempArr = [...initialState];
        tempArr[index] = clickedStyle;
        setAnswerStyle(tempArr);
    }
    
    const handleNext = () => {
        changeNumber(+1);
    }
    const handlePrevious = () => {
        changeNumber(-1);
    }
    
    return(
        <div className="quiz-container">
            <h3 className="quiz-number">Question {questionList.index + 1} of {totalQuestion}</h3>
            <p style={{color: "white"}}>{decode(questionList.question)}</p>


            {questionList.options.map((value , index) => {
                const keyName = `question-${questionList.index}-option-${index}`;
                return(
                    <div key={keyName} className="option-container" onClick = {() => changeButtonState(questionList.index , index)}>
                        <div className='option-letter' style={(questionList.buttonState[index] == 1)? clickedStyle: {}}>{convertIndex[index]}</div>
                        <div className="answer-option">{decode(value)}</div>

                    </div>
                )
            })}

            <div className='quiz-button-container'>
                {questionList.index > 0 &&<button onClick={handlePrevious} className="quiz-button">Previous</button>}
                {questionList.index + 1 < totalQuestion && <button onClick={handleNext} className="quiz-button">Next</button>}
                {(questionList.index + 1 == totalQuestion) && <button onClick={endQuiz}className='quiz-button' style={{marginLeft: "auto"}}>Submit</button>}
            </div>
        </div>
    )
}

export default QuizContent