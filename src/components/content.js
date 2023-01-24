import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import QuizContent from "./quizcontent";
import QuizResult from "./quizresult";
import Axios from "axios";
import QuizCategory from "./quizcategory";
/* question template = {
    index: 
    question: 
    options: 
    buttonState: 
    answer: 
}
*/

const initialQuestionList = [];

const randomArray = (arr) => {
    let arrSize = arr.length;
    for(let i=0;i<5;i++){
        let idx1 = Math.floor(Math.random() * arrSize);
        let idx2 = Math.floor(Math.random()*arrSize);
        [arr[idx1] , arr[idx2]] = [arr[idx2] , arr[idx1]];
    }
    return arr;
}

const createButtonState = (size) => {
    const newArr = [];
    for(let i=0;i<size;i++)newArr.push(0);
    return newArr;
}
function Content(){
    const [quizStarted , setQuizStarted] = useState(false);
    const [currentNumber, setCurrentNumber] = useState(0);
    const [questionList, setQuestionList] = useState([]);
    const [quizEnded, setQuizEnded] = useState(false);

    const startQuiz = (category , difficulty) => {
        const quizUrl = `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`;
        Axios.get(quizUrl).then((res) => {
            const {results} = res.data;
            
            for(let i=0;i<results.length;i++){
                const questionData = {
                    index: i,
                    question: results[i].question,
                    options: randomArray([...results[i].incorrect_answers , results[i].correct_answer]),
                    buttonState: createButtonState(1 + results[i].incorrect_answers.length),
                    answer: results[i].correct_answer,
                    difficulty: difficulty,
                    category: results[i].category,
                }
                initialQuestionList.push(questionData);
            }
        }).then(()=> {
            setQuestionList(initialQuestionList);
            setQuizStarted(true);
        });
    }
    const changeNumber = (inc) => {
        if(currentNumber + inc >= 0 && currentNumber + inc < questionList.length) setCurrentNumber(currentNumber+inc);
    }
    const changeButtonState = (questionIndex , buttonIndex) => {
        const tempList = [...questionList];
        tempList[questionIndex].buttonState = createButtonState(questionList[questionIndex].options.length);
        tempList[questionIndex].buttonState[buttonIndex] = 1;
        setQuestionList(tempList);
    }

    const endQuiz = () => {
        setQuizEnded(true);
        setQuizStarted(false);
    }

    const closeQuiz = () => {
        setQuizEnded(false);
        setCurrentNumber(0);
        while(initialQuestionList.length)initialQuestionList.pop();
        setQuestionList(initialQuestionList);
    }
    return(
        <div className="content-container" style={{marginTop: "20px"}}>
            {
                (quizEnded)?
                    <QuizResult quizData={questionList} closeQuiz={closeQuiz}/>: 
                    (quizStarted)? 
                        <QuizContent questionList = {questionList[currentNumber]} totalQuestion = {questionList.length} changeNumber = {changeNumber} changeButtonState = {changeButtonState} endQuiz={endQuiz}/> 
                        :(
                            <div className="quiz-container">
                                <QuizCategory startQuiz={startQuiz}/>
                            </div>                            
                        )
            }
        </div>
    )
}

export default Content;