import React, {Component} from 'react';
import FlipMove from 'react-flip-move';

class TodoItems extends Component {

    delete = (key) => {
        return this.props.delete(key);
    };
    
    createList = (item) => {
        return <li key={item.key}
                onClick={() => this.delete(item.key)}
                >{item.text}</li>
    };

    render() {
        const items = this.props.items
        const listItems = items.map(this.createList);

        return (
            <ul>
                <FlipMove duration={500} easing='ease-in-out'>
                    {listItems}
                </FlipMove>
            </ul>
        );
    }
}

export default TodoItems;