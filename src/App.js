import React from 'react';
import './App.css';
import { Button } from 'reactstrap';
import { ListGroupItem } from 'reactstrap';
import { Progress } from 'reactstrap';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          question: 'Câu 1: Việt Nam có bao nhiêu tỉnh thành?',
          answer: ['A: 64', 'B: 63', 'C: 62', 'D: 61'],
          correct: 'B: 63'
        },
        {
          question: 'Câu 2: Cậu Vàng có mấy chân?',
          answer: ['A: 4', 'B: 3', 'C: 2', 'D: 1'],
          correct: 'A: 4'
        },
        {
          question: 'Câu 3: 2 con vịt đi trước 2 con vịt, 2 con vịt đi sau 2 con vịt, 2 con vịt đi giữa 2 con vịt. Hỏi có mấy con vịt?',
          answer: ['A: 3', 'B: 4', 'C: 5', 'D: 6'],
          correct: 'B: 4'
        },
        {
          question: 'Câu 4: 9 – 6 - 1; 27 – 1 - 2; 6 - 3 - ... ?',
          answer: ['A: 3', 'B: 4', 'C: 5', 'D: 6'],
          correct: 'A: 3'
        },
        {
          question: 'Câu 5: 1 + 2 + 3 + ..... + 99 = ?',
          answer: ['A: 4850', 'B: 4580', 'C: 4950', 'D: 4590'],
          correct: 'C: 4950'
        }

      ],
      numberquestion: '',
      totalcorrect: 0,
      status: ['exit', 'exit', 'exit', 'exit'],
      isAnswered: false,
      listCorect: ['Câu 1: 63 Tỉnh', 'Câu 2: 4 Chân', 'Câu 3: 4 Con vịt', 'Câu 4: Số 3', 'Câu 5: Tổng = 4950'],
      showAnswer: false,
      progress: 0,
      timeout:null,
      interval:null,
      minute: 0,
      second: 15
    }
  }

  checkAnswer(answer, numberQuestion, numberCorrect, isAnswered, index) {
    if (isAnswered) {
      return;
    }
    const newCorrect = this.state.list[numberQuestion].correct;
    let newStatus = this.state.status.slice();
    newStatus = ['exit', 'exit', 'exit', 'exit'];
    if (newCorrect === answer) {
      numberCorrect += 1;
      newStatus[index] += ' exit1';
    } else {
      numberQuestion += 1;
      newStatus[index] += ' exit2';
    }
    this.setState({
      isAnswered: true,
      totalcorrect: numberCorrect,
      status: newStatus
    })
  }
  nextQuestion(numberQuestion, isAnswered) {
    let newStatus = this.state.status.slice();
    newStatus = ['exit', 'exit', 'exit', 'exit'];
    if (numberQuestion <= 4) {
      numberQuestion += 1;
    } else {
      numberQuestion = 5
    }
    this.setState({
      isAnswered: false,
      numberquestion: numberQuestion,
      status: newStatus
    });
  }
  showAnswer() {
    this.setState({
      showAnswer: true
    })
  }
  backHome(numberQuestion) {
    numberQuestion = '';
    clearTimeout(this.state.timeout);
    clearInterval(this.state.interval)
    this.setState({
      numberquestion: numberQuestion,
      showAnswer: false
    });
    console.log(this.state.second)
  }
  // start quiz
  startQuiz(numberQuestion,newMinute,newSecond,timeOut,newInterval) {
    newMinute = 0;
    newSecond = 15;
    numberQuestion = 0;
    newInterval = setInterval(() => {
      if (newSecond === 0) {
        newMinute -= 1;
        newSecond = 0;
      } else if (newSecond > 0) {
        newSecond -= 1;
      }
      this.setState({
        minute: newMinute,
        second: newSecond
      });
    }, 1000);
  timeOut = setTimeout(() => {
      this.setState({
        numberquestion: 5,
        status: ['exit', 'exit', 'exit', 'exit'],
      })
      clearInterval(newInterval)
    }, 15000);
    this.setState({
      numberquestion: numberQuestion,
      minute: newMinute,
      second: newSecond,
      timeout:timeOut,
      interval:newInterval
    })
    console.log(this.state.timeout,timeOut)
  }
  // reset quiz
  resetQuiz(numberQuestion, numberCorrect, newStatus, newMinute, newSecond,timeOut,newInterval) {
    numberQuestion = 0;
    numberCorrect = 0;
    newStatus = ['exit', 'exit', 'exit', 'exit'];
    clearTimeout(this.state.timeout);
    clearInterval(this.state.interval)
    newMinute = 0;
    newSecond = 15;
    newInterval = setInterval(() => {
      if (newSecond === 0) {
        newMinute -= 1;
        newSecond = 0;
      } else if (newSecond > 0) {
        newSecond -= 1;
      }
      this.setState({
        minute: newMinute,
        second: newSecond
      });
    }, 1000);
    timeOut=setTimeout(() => {
      this.setState({
        numberquestion: numberQuestion = 5,
        status: ['exit', 'exit', 'exit', 'exit'],
      })
      clearInterval(newInterval)
    }, 15000);
    this.setState({
      numberquestion: numberQuestion,
      totalcorrect: numberCorrect,
      status: newStatus,
      showAnswer: false,
      minute: newMinute,
      second: newSecond,
      isAnswered: false,
      timeout:timeOut,
      interval:newInterval
    })
    console.log(this.state.timeout,newInterval)
  }
  render() {
    const numberQuestion = this.state.numberquestion;
    const numberCorrect = this.state.totalcorrect;
    const newStatus = this.state.status;
    const isAnswered = this.state.isAnswered;
    const showAnswer = this.state.showAnswer;
    const newMinute = this.state.minute;
    const newSecond = this.state.second;
    const timeOut=this.state.timeout;
    const newInterval=this.state.interval;
    if (numberQuestion === '') {
      return (
        <div className="start">
          <h1>Welcome to My Quiz ?!</h1>
          <h4>In 15 seconds</h4>
          <Button color="primary" size="lg" onClick={() => this.startQuiz(numberQuestion,timeOut,newInterval)}>Let's Go</Button>

        </div>
      )
    } else if (numberQuestion <= 4 && numberQuestion >= 0) {
      const printQuestion = this.state.list[numberQuestion].question;
      const listAnwers = this.state.list[numberQuestion].answer;
      const printAnswer = listAnwers.map((answer, index) =>
        <li key={index}>
          <h3 className={newStatus[index]} onClick={() => this.checkAnswer(answer, numberQuestion, numberCorrect, isAnswered, index)}>
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
            <p className='countdown'>{newMinute < 10 ? "0" + newMinute : newMinute}:{newSecond < 10 ? "0" + newSecond : newSecond}</p>
            {isAnswered &&
              <Button className='btn' color="success" onClick={() => this.nextQuestion(numberQuestion, isAnswered)}>Tiếp theo</Button>
            }
          </div>
        </div>
      );
    } else {
      const listCorect = this.state.listCorect;
      const printCorrect = listCorect.map((show, index) =>

        <ListGroupItem key={index}>{show}</ListGroupItem>

      )
      return (
        <div className="finish">
          <h1>Hoàn Thành !!!</h1>
          <h6>Bạn đã đúng {numberCorrect} / 5 câu</h6>
          <Button color='success' className='btn' onClick={() => this.resetQuiz(numberQuestion, numberCorrect, newStatus,timeOut,newInterval)}>Làm lại</Button>{' '}
          <Button color='primary' className='btn' onClick={() => this.showAnswer()}>Xem đáp án</Button>{' '}
          <Button color="danger" onClick={() => this.backHome(numberQuestion, newMinute, newSecond)}>Homepage</Button>
          {showAnswer &&
            <div>
              {printCorrect}
            </div>
          }
        </div>
      )
    }
  }
}

export default App;
    // const progress=this.state.progress;
    // const interval = setInterval(() => {
    //   this.setState({
    //     progress: this.state.progress + 10
    //   })
    // }, 100);

    // // Sau 2 giây tự chuyển câu
    // setTimeout(() => {
    //   this.setState({
    //     numberquestion: numberQuestion + 1,
    //     isAnswered: false,
    //     status: ['exit', 'exit', 'exit', 'exit'],
    //     progress: 0
    //   })

    //   clearInterval(interval)
    // }, 1600)
    // newSecond = 15;
    // newInterval = setInterval(() => {
    //   if (newSecond === 0) {
    //     newMinute -= 1;
    //     newSecond = 0;
    //   } else if (newSecond > 0) {
    //     newSecond -= 1;
    //   }
    //   this.setState({
    //     minute: newMinute,
    //     second: newSecond
    //   });
    // }, 1000);
    // timeOut=setTimeout(() => {
    //   this.setState({
    //     numberquestion: numberQuestion = 5,
    //     status: ['exit', 'exit', 'exit', 'exit'],
    //   })
    //   clearInterval(newInterval)
    // }, 15000);