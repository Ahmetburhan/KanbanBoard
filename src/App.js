import React, { Component } from "react";
import "./App.css";

import Controls from "./components/Controls";
import Board from "./components/Board";
import _ from "lodash";

const NUM_STAGES = 4;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { name: "task 0", stage: 0 },
        { name: "task 1", stage: 0 },
        { name: "task 2", stage: 0 },
        { name: "task 3", stage: 0 },
        { name: "task 4", stage: 1 },
        { name: "task 5", stage: 1 },
        { name: "task 6", stage: 1 },
        { name: "task 7", stage: 2 },
        { name: "task 8", stage: 2 },
        { name: "task 9", stage: 3 }
      ]
    };
    this.stagesNames = ["Backlog", "To Do", "Ongoing", "Done"];
  }
  updateStage = (stage, position) => {
    const { tasks } = this.state;
    const findIndex = _.findIndex(tasks, ["name", stage]);
    let newState = tasks;
    let futurePosition = tasks[findIndex].stage;

    switch (position) {
      case "forward":
        if (futurePosition + 1 >= this.stagesNames.length) {
          alert("You have successfully completed the task!");
          return;
        } else {
          newState[findIndex] = {
            name: stage,
            stage: tasks[findIndex].stage + 1
          };
          this.setState({
            tasks: newState
          });
        }
        break;
      case "backward":
        if (futurePosition - 1 < 0) {
          alert("You have reached the planning stage!");
          return;
        } else {
          newState[findIndex] = {
            name: stage,
            stage: tasks[findIndex].stage - 1
          };
          this.setState({
            tasks: newState
          });
        }
        break;
      default:
    }
  };
  render() {
    const { tasks } = this.state;

    let stagesTasks = [];
    for (let i = 0; i < NUM_STAGES; ++i) {
      stagesTasks.push([]);
    }
    for (let task of tasks) {
      const stageId = task.stage;
      stagesTasks[stageId].push(task);
    }

    return (
      <div className="App">
        <Controls updateStage={this.updateStage} />
        <Board stagesTasks={stagesTasks} stagesNames={this.stagesNames} />
      </div>
    );
  }
}

export default App;
