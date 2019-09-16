import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          question: 'Câu 1: Việt Nam có bao nhiêu tỉnh thành?',
          answer: ['A:64', 'B:63', 'C:62', 'D:61'],
          correct: 'B:63'
        },
        {
          question: 'Câu 2: Cậu Vàng có mấy chân?',
          answer: ['A:4', 'B:3', 'C:2', 'D:1'],
          correct: 'A:4'
        },
        {
          question: 'Câu 3: 2 con vịt đi trước 2 con vịt, 2 con vịt đi sau 2 con vịt, 2 con vịt đi giữa 2 con vịt. Hỏi có mấy con vịt?',
          answer: ['A:3', 'B:4', 'C:5', 'D:6'],
          correct: 'B:4'
        },
        {
          question: 'Câu 4: 9 – 6 - 1; 27 – 1 - 2; 6 - 3 - ?',
          answer: ['A:3', 'B:4', 'C:5', 'D:6'],
          correct: 'A:3'
        },
        {
          question: 'Câu 5: 1 + 2 + 3 + ..... + 99 = ?',
          answer: ['A:4850', 'B:4580', 'C:4950', 'D:4590'],
          correct: 'C:4950'
        }

      ],
      numberquestion: 0,
      numbercorrect: 1,
      status: ['', '', '', ''],
      result: 0
    }
  }
  checkAnswer(answer, numberQuestion, numberCorrect, index) {
    const newCorrect = this.state.list[numberQuestion].correct;
    if (numberQuestion <= 4) {
      if (newCorrect === answer) {
        numberQuestion += 1;
        numberCorrect += 1;
      } else {
        numberQuestion += 1
      }
    } else {
      numberQuestion = 5
    }
    this.setState({
      numberquestion: numberQuestion,
      numbercorrect: numberCorrect
    })
    console.log(index)
  }
  resetQuiz(numberQuestion, numberCorrect) {
    numberQuestion = 0;
    numberCorrect = 0;
    this.setState({
      numberquestion: numberQuestion,
      numbercorrect: numberCorrect
    })
  }
  render() {
    // const list = this.state.list;
    const numberQuestion = this.state.numberquestion;
    const numberCorrect = this.state.numbercorrect;
    if (numberQuestion <= 4) {
      const printQuestion = this.state.list[numberQuestion].question;
      const listAnwers = this.state.list[numberQuestion].answer;
      const printAnswer = listAnwers.map((answer, index) =>
        <li key={index}>
          <h3 className="exit" onClick={() => this.checkAnswer(answer, numberQuestion, numberCorrect, index)}>
            <p>{answer}</p>
          </h3>
        </li>
      )
      return (
        <div className="App">
          <div>
            <h1>Quiz</h1>
            <ul>
              <h2>{printQuestion}</h2>
            </ul>
            {printAnswer}
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <h1>Chúc Mừng</h1>
          <p>Bạn đã đúng {numberCorrect} /5 câu</p>
          <button onClick={() => this.resetQuiz(numberQuestion, numberCorrect)}>Làm lại</button>
        </div>
      )
    }
  }
}

export default App;
