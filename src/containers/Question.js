import React from 'react';
import Questions from '../components/Question';
import { connect } from 'react-redux';
import {getRemainTime} from '../common/time';
import {withRouter} from 'react-router-dom';
import {commit_a_test} from '../actions/actions'


class Question extends React.Component {
    state = {
        answers_id : []
    }
    handleCommit = (e) => {
        const {answers_id} = this.state;
        const len = this.props.test.questions.length
        if(answers_id.length<len){
           const indexs = [];
            answers_id.forEach((v)=>{
                indexs.push(v.seque)
            });
           for(let i = 0;i < len;i ++){
               if(!indexs.indexOf(i)){
                   answers_id.push({answer:null,seque:i})
               }
            }
        }
        console.log('commit')
        this.setState({answers_id})
        this.handClick();

    }
    handClick = (e) => {
        const len = this.props.test.questions.length || 0;
        const info = this.props.test.questions.slice(len-1)[0];
        const id = info["id"];
        const end_time = Date.now();
        const {answers_id} = this.state;
        const result = answers_id.sort((a,b)=>{
           return  b.seq - a.seq;
        })
        const ids = []
        result.forEach((v)=>{
            ids.push(v.answer);
        })
        console.log(ids);
        if(len-1>ids.length){
            alert("请全部填完再提交")
        }else{
            this.props.dispatch(commit_a_test(id,ids.toString(),end_time));
            this.props.history.push('./success')
        }
      
    }
    hanleChange = (e) => {
       const {seq,value} = e.target;
       const {answers_id} = this.state;
       const answers = [];
       answers_id.forEach((v)=>{
           answers.push(v.seque);
       })
       let index = answers.indexOf(seq);
       if(index>0){
           answers_id[index]["answer"] = value+1;
       }else{
            answers_id.push({answer:value+1,seque:seq});
       }
       console.log(answers_id)
       this.setState({answers_id});
    }
    
    render() {
        // const questions = [
        //     {
        //         id:0,
        //         content:"你的名字",
        //         options:[
        //             "guan",
        //             "yun",
        //             "feng"
        //         ]
        //     }
        // ];
        // const title = "你的考试";
        // const remain_time = "43:00";
        const len = this.props.test.questions.length;
        const questions = this.props.test.questions.slice(0,len-1);
        questions.map(element => {
            element.options = [element.choice1,element.choice2,element.choice3];
            return element;
        });
        const info = this.props.test.questions.slice(len-1)[0];
        const start_time = info["start_time"]["time"];
        const end_time = start_time  + 2700;
        const remain_time = getRemainTime(end_time).minutes;
        //  const startRemain = ((endTime) =>{
        //     let intervalTimer = setInterval(()=>{
        //         let remainTime = getRemainTime(endTime);
        //         if(remainTime.total <= 0){clearInterval(intervalTimer);}
        //     },1000)
            
        //  })
        const title = "测试";
        
        
        return (
            <Questions handleClick={this.handClick} handleChange={this.hanleChange} questions={questions} title={title} handleCommit={this.handleCommit} />
        )
    }
}
export default withRouter(connect((store)=>{
    console.log(store)
   return {test:store.tests}
})(Question));