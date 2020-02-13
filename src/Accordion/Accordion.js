import React, { Component } from 'react'
import './Accordion.css'

export default class Accordion extends Component {
    static defaultProps = { sections: [] };

    state = { activeSectionIndex: null, }

    handleSetActiveSecion = (sectionIndex) => {
        this.setState({ activeSectionIndex: sectionIndex })
    }

    renderItem(section, index, activeSectionIndex) {
        return (
            <li className='Accordion__item' key={index}>
                <button
                    type='button'
                    onClick={() => this.handleSetActiveSecion(index)}
                >
                    {section.title}
                </button>
                {(activeSectionIndex === index) && <p>{section.content}</p>}
            </li>
        )
    }

    render() {
        const { activeSectionIndex } = this.state
        const { sections } = this.props
        return (
            <ul className='Accordion'>
                {sections.map((section, idx) =>
                    this.renderItem(section, idx, activeSectionIndex)
                )}
            </ul>
        )
    }
}