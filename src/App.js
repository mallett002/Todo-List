import React, {Component} from 'react';
import TodoList from './TodoList';



class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            image: this.props.images[0]
        };
    };

    handleImage = () => {
        let i = this.props.images.indexOf(this.state.image);

        if (i === this.props.images.length - 1) {
            this.setState({
                image: this.props.images[0]
            });
        } else {
            this.setState({
                image: this.props.images[i + 1]
            });
        }
        console.log(this.state.image);
    };

    render() {
        return (
          <div>
              <TodoList 
                image={this.state.image}
                changeImage={this.handleImage}  
              />
          </div>  
        );
    }
}

export default App;