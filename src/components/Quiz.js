import React from 'react';
import { Button } from 'reactstrap';

function Quiz(props) {
    const { numberCorrect, numberQuestion, isAnswered, newMinute, newSecond, newStatus, list } = props
        const print = list[numberQuestion].question;
        const lista = list[numberQuestion];
        const listAnwers = lista.answer;
        const printAnswer = listAnwers.map((answer, index) =>
            <li key={index}>
                <h3 className={newStatus[index]} onClick={() => props.checkAnswer(answer, numberQuestion, numberCorrect, isAnswered, index)}>
                    <p>{answer}</p>
                </h3>
            </li>
        )
        if (numberQuestion <= 4 && numberQuestion >= 0) {
        return (
            <div className="App">
                <div>
                    <h1>Quiz</h1>
                    <ul>
                        <h2>{print}</h2>
                    </ul>
                    {printAnswer}
                    <p className='countdown'>{newMinute < 10 ? "0" + newMinute : newMinute}:{newSecond < 10 ? "0" + newSecond : newSecond}</p>
                    {isAnswered &&
                        <Button className='btn' color="success" onClick={() => this.nextQuestion(numberQuestion, isAnswered)}>Tiếp theo</Button>
                    }
                </div>
            </div>
        );
    }
}
export default Quiz;