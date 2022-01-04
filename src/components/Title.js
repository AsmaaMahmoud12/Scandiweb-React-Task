import React, { Component } from 'react'

class Title extends Component {
    render() {
        const { title } = this.props;
        return (
            <div className='title-section'>
                <h2>{title}</h2>
            </div>
        )
    }
}

export default Title