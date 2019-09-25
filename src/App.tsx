import React from 'react';
import './App.css';
import Lectures from "./components/Lectures/Lectures";
import DateHandler from "./components/DateHandler/DateHandler";
import {ILecture} from "./components/Lectures/Lecture/Lecture";

interface IDataProps{
  data: Idata[]
}

interface Idata {
  date: string,
  lessons: ILecture[]
}
interface IState {
  all_dates: Idata[],
  lectures: ILecture[],
  props: Iprops
}

interface Iprops {
  selected_date: string,
  next_date: string,
  prev_date: string
}

class App extends React.Component<{},IState>{

  constructor(props: any){
    super(props);
    this.state = {
      all_dates: [],
      lectures: [],
      props: {
        selected_date: "",
        next_date: "",
        prev_date: ""
      }
    };

  }
  componentDidMount(): void {
    this.load_data();
  }

  load_data = () => {
    let put_data = this.put_data;
    fetch("sch.json")
        .then(function (response) {
          return response.json();
        })
        .then(function (response) {
          put_data(response);
        });
  }

  put_data = ( data: Idata[]) => {
    console.log(data);
    let dates: string[] = data.map((item: Idata, index: number) => {
      return item.date
    });

    let i: number = 0;
    while (new Date(parseInt(dates[i].split("-")[0]),parseInt( dates[i].split("-")[1]) - 1, parseInt(dates[i].split("-")[2]), 19, 30).getTime() < new Date().getTime() && i < dates.length - 1){
      i++;
    }

    let prev_date: string = "";
    if(i >= 1)
      prev_date = dates[i-1];
    let next_date: string = "";
    if(dates.length >= i+2)
      next_date = dates[i+1];

    this.setState({
      all_dates: data,
      props: {
        selected_date: dates[i],
        prev_date: prev_date,
        next_date: next_date
      },
      lectures: data.filter((item: Idata) => item.date === dates[i])[0].lessons
    });
  }

  changeDate = (date: string) => {
    let index: number = this.state.all_dates.findIndex((item: Idata) => item.date === date);
    let all: Idata[] = this.state.all_dates;
    this.setState({
      all_dates: all,
      props: {
        selected_date: all[index].date,
        prev_date: index > 0 ? all[index - 1].date : "",
        next_date: index <= all.length - 2 ? all[index + 1].date : ""
      },
      lectures: all[index].lessons,
    });
  }

  render(){
    if(this.state.all_dates.length !== 0)
    {
      return (
          <div>
            <header>
              <DateHandler position={"left"} date={this.state.props.prev_date} click={() => this.changeDate(this.state.props.prev_date)}/>
              <DateHandler date={this.state.props.selected_date} now/>
              <DateHandler position={"right"} date={this.state.props.next_date} click={() => this.changeDate(this.state.props.next_date)}/>
            </header>
            <Lectures lectures={this.state.lectures} />
          </div>
      )
    }
    else{
      return (
          null
      )
    }

  }


}

export default App;
