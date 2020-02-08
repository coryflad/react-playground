import React from 'react'

class HelloWorld extends React.Component {
    state = {
        who: 'world',
    };

    render() {
        return (
            <div>
                <p>Hello {this.state.who}!</p>
                <button
                    onClick={() => this.setState({ who: 'world' })}
                >
                    World
                </button>
                <button
                    onClick={() => this.setState({ who: 'freind' })}
                >
                    Friend
                </button>
                <button
                    onClick={() => this.setState({ who: 'React' })}
                >
                    React
                    </button>
            </div>
        )
    }
}

export default HelloWorld