import React, {Component} from "react";

class ClassExample extends Component {

    constructor() {
        super();
        this.state = {
            buttonText: "zmień tekst w buttonie"
        }
    }


    changeText = () => {
        this.setState({buttonText: "Zmieniłam tekst"})
    }

    componentDidMount(){
        console.log("działa po zamontowaniu")
    }

    componentDidUpdate(){
        console.log("komponent zaktualizowany");
    }

    componentWillUnmount() {
        console.log("znika");
    }
   

    render() {
        return <button onClick={this.changeText}>{this.state.buttonText}</button>;
    }

}

export default ClassExample;