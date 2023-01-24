import { useState } from "react";

function QuizCategory(props){
    const {startQuiz} = props;
    const [categoryChosen , setCategoryChosen] = useState(-1);
    const [difficultyChosen , setDifficultyChosen] = useState(-1);
    const [selectionText , setSelectionText] = useState("Category");
    const category = ["General Knowledge" , "Books" , "Film" , "Music" , "Musicals & Theatres" , "Television" , "Video Games" , "Board Games" , "Science & Nature" , "Computers" , "Mathematics" , "Mythology" , "Sports" , "Geography" , "History" , "Politics" , "Art" , "Celebrities" , "Animals" , "Vehicles" , "Comics" , "Gadgets" , "Anime & Manga" , "Animations & Cartoons"];
    const difficulty = ["Easy" , "Medium" , "Hard"];

    const handleClick = async () => {
        await(startQuiz(categoryChosen + 9 , difficulty[difficultyChosen].toLowerCase())).then(() => {
            setCategoryChosen(-1);
            setDifficultyChosen(-1);
            setSelectionText("Category");
        });
        
    }
    return(
        <div>
            {(categoryChosen==-1 || difficultyChosen==-1) && <h3 className="quiz-number">Please Pick a {selectionText}</h3>}
            {categoryChosen == -1?
                <div>
                    {category.map((value , index) => {
                        return(
                            <div key={"category-"+index}>
                                <button className="quiz-button" onClick={() =>  {
                                    setCategoryChosen(index); 
                                    setSelectionText("Difficulty")
                                    }} 
                                    style={{width: "100%" , textAlign: "left"}}>{category[index]}</button>
                            </div>
                        )
                    })}
                </div> :
             difficultyChosen == -1?
                <div>
                    {difficulty.map((value , index) => {
                        return(
                            <div key={"difficulty-" + index}>
                                
                                <button className="quiz-button" onClick={() => {setDifficultyChosen(index)}} style={{width: "100%" , textAlign: "left"}}>{value}</button>
                            </div>
                        )
                    })}
                    <button className="quiz-button back-button" onClick={() => {setCategoryChosen(-1)}}>Back</button>
                </div>: 
                <div>
                    <h3 className="quiz-number" style={{borderBottom: "none"}} >{difficulty[difficultyChosen]} {category[categoryChosen]} Quiz</h3>
                    <button onClick={() => setDifficultyChosen(-1)} className="quiz-button back-button">Back</button>
                    <button onClick={handleClick} className="quiz-button">Start Quiz</button>
                </div>
                
            }
        </div>
    )
}

export default QuizCategory;