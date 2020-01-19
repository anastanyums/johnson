import React, { Component, Fragment } from 'react'
import Pic from './pic'
import {questions} from "./questions"
import {answers} from './answers'



export default class Main extends Component {
  constructor(props) {

    super(props);
    this.state = {
        start: false,
        questions,
        answers,
        current: 0,
        points: 0,
        time: 20,
        choices: [],
        finsih: true,
    }

  }

  startTimer() {
      
    let time = setInterval(() => {
      this.setState({
        time: this.state.time - 1
      }, () => {
        if(this.state.time === 0 || !this.state.start){
            clearInterval(time)
            this.setState({
                start: false,
                finish: true
            })
        }
      });
    }, 1000);
  };

  startGame () {
   
      this.setState({
          start: true,
          current: 0,
          points: 0,
          time: 20
      }, () => {
          this.setState({
            choices: this.getChoices()
          })
          this.startTimer()
      })
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

answerClick (ans) {
    if (this.state.questions[this.state.current].answer === ans) {
        this.setState({
            points: this.state.points + 5
        })
    }

    this.next()

}

next () {
    if (this.state.current+1 < this.state.questions.length) {
        this.setState({
            current: this.state.current + 1
        },() => {
            this.setState({
                choices: this.getChoices()
            })
        })
    } else {
        this.setState({
            start: false,
            finish: true
        })
    }
    
}

  getChoices () {

    let answers = this.state.answers

    let choices = [
        answers[this.state.questions[this.state.current].answer]      
    ]

    choices.push(this.randPick(answers, choices))
    choices.push(this.randPick(answers, choices))   

    return this.shuffle(choices)

  }


  randPick (arr,excludeArr){
    var rand = Math.floor(Math.random()*arr.length);
    if(!excludeArr.indexOf(arr[rand])){
        return this.randPick(arr,excludeArr);
    }else{
        return arr[rand];
    }
}
  
  render() {
    
      return (
       <div className='main-window'>
           {
               !this.state.start ?
               <Fragment>
                 
                    {
                        this.state.finsih ?
                        <Fragment>
                            <h5 className="score">Your score is : {this.state.points} / {this.state.questions.length*5}</h5>
                            <h7 className="heading">Invention and Inventors ! </h7>
                            </Fragment>
                            
                        :
                        null
                    }
                    
                   <button 
                className='start-btn'
                onClick={() => this.startGame()}
                >Start</button>
               </Fragment>

                :

                <div className='container'>
                    <div >
                        <h3 className='hedding'> { this.state.questions[this.state.current].name } </h3>
                        <h4 className='question'>Invented by whom ?</h4>
                        <h4 className='question-number'> {this.state.current + 1} </h4>
                    </div>

                    <div>
                        <div className='question-con'>
                            <img 
                            src={require(`./q-img/${this.state.questions[this.state.current].img}`)} 
                            alt='question' 
                            className='question-img' 
                            style={{width:'8rem', height:'10rem'}}/>
                        </div>
                        <div className='info-con'>
                            <h4>Your points : {this.state.points}</h4>
                            <h5>Time remaining : {this.state.time}</h5>
                        </div>
                    </div>


                    <div className='answer-con'>
                        {
                            this.state.choices.map((item, key) => {
                                return <Pic
                                onClick={ () => this.answerClick(item.num) }
                                name ={item.name}
                                img={item.img}
                                key={key}/>
                            })
                        }
              
                    </div>
                       
                    
                    
                </div>

           }
           
       </div>
      )
    }

}



