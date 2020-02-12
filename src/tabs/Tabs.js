import React from 'react'

class Tabs extends React.Component {
    static defaultProps = { fuck: [] };
    state = { currentTabIndex: 0 };

    handleButtonClick(index) {
        this.setState({ currentTabIndex: index })
    }

    displayButtons() {
        return (
            this.props.fuck.map((fuck, index) => (
                <button
                    key={index}
                    onClick={() => this.handleButtonClick(index)}
                >
                    {fuck.name}
                </button>
            ))
        )
    }


    displayContent() {
        const currentTab = this.props.fuck[this.state.currentTabIndex]
        return (
            <div className='content'>
                {currentTab.content}
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.displayButtons()}
                {!!this.props.fuck.length && this.displayContent()}
            </div>
        )
    }
}

export default Tabs