import React from "react";
import { Button, Form, Input } from "reactstrap";

class Controls extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  moveForward = () => {
    const { updateStage } = this.props;
    const { value } = this.state;
    updateStage(value, "forward");
  };
  moveBackward = () => {
    const { updateStage } = this.props;
    const { value } = this.state;

    updateStage(value, "backward");
  };
  render() {
    console.log("props", this.props);
    return (
      <div style={{ padding: "1rem", background: "#D6F3FF" }}>
        <h1>Controls</h1>
        <div style={{ display: "flex", marginTop: "1rem" }}>
          <Form>
            <Input
              placeholder="Selected task name"
              style={{ fontSize: "1rem" }}
              onChange={e => {
                this.setState({
                  value: e.target.value
                });
                console.log("value", e.target.value);
              }}
              data-testid="selected-task-field"
            />
          </Form>
          <Button
            color="primary"
            style={{ marginLeft: "1rem" }}
            onClick={this.moveBackward}
            data-testid="move-back-btn"
          >
            Move Backward
          </Button>
          <Button
            color="success"
            style={{ marginLeft: "1rem" }}
            onClick={this.moveForward}
            data-testid="move-forward-btn"
          >
            Move Forward
          </Button>
        </div>
      </div>
    );
  }
}

export default Controls;
