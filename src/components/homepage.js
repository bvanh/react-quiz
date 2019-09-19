import React from 'react';
import { Button } from 'reactstrap';

function Homepage(props) {
    const { numberQuestion, timeOut, newInterval } = props
    if (numberQuestion === '') {
        return (
            <div className="start">
                <h1>Welcome to My Quiz ?!</h1>
                <h4>In 15 seconds</h4>
                <Button color="primary" size="lg" onClick={() => props.startQuiz(numberQuestion, timeOut, newInterval)}>Let's Go</Button>

            </div>
        )
    }
}
export default Homepage;