function QuizResult(props){
    const {quizData , closeQuiz} = props;

    const calcResult = () => {
        let correctAnswer = 0;
        quizData.forEach(data => {
            for(let i=0;i<data.buttonState.length;i++){
                if(data.buttonState[i] == 1 && data.options[i] == data.answer){
                    correctAnswer++;
                    break;
                }
            }
        });
        return correctAnswer;
    }

    return(
        <div className="quiz-container">
            <h3 className="quiz-number">Quiz Completed!</h3>
            <p style={{color: "white"}}>You got {calcResult()} out of {quizData.length} correct answers! ({Math.round(calcResult()/quizData.length * 100)}%)</p>
            <button className="quiz-button" onClick={closeQuiz}>Retry?</button>
        </div>
    )
}

export default QuizResult;