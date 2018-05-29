import React, {Component} from 'react';
import TodoItems from './TodoItems';
import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            items: []
        };
    }
    changeImage = null;
    
    handleChange = (e) => {
        this.setState({
            input: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.input !== '') {
            let newItem = {
                text: this.state.input,
                key: Date.now()
            };

            this.setState(prevState => {
                return {
                    items: prevState.items.concat(newItem),
                    input: ''
                };
            });
        }
    };

    deleteItem = (key) => {
        let filteredItems = this.state.items    
            .filter(item => item.key !== key);
        
        this.setState({
            items: filteredItems
        });

        this.props.changeImage();
    };

    render() {
        return (
            <div className='app' 
                 style={{backgroundImage: `url(${this.props.image})`}}>
                <div className='header'>
                    <div className='title'>
                        <h1 className='todo'>TO DO</h1>
                    </div>
                        
                        <form onSubmit={this.handleSubmit}>
                            <input 
                                type='text'
                                value={this.state.input}
                                onChange={this.handleChange}
                                placeholder='enter a task...'
                            />
                            <button>add</button>
                        </form>
                </div>
                <TodoItems 
                    items={this.state.items}
                    delete={this.deleteItem}
                />
            </div>
        );
    }
}

export default TodoList;