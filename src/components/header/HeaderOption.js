import React from "react"
import { Nav } from "react-bootstrap"

class HeaderOption extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0,
            color: "blue"
        }
    }

    changeColor() {
        console.log(this.state.value + " - Changing color")
        var newColor = null
        if(this.state.previousColor === 'red') {
            newColor = "blue"
        } else {
            newColor = "red"
        }
        this.setState({
            color: newColor,
            previousColor: newColor,
            value: this.state.value + 1
        })
    }

    hoverStart() {
        this.setState({
            previousColor: this.state.color,
            color: "yellow",
        })
    }

    hoverEnd() {
        this.setState({
            color: this.state.previousColor
        })
    }

    render() {
        return(
            <Nav.Item onClick={this.changeColor.bind(this)} onMouseEnter={this.hoverStart.bind(this)} onMouseLeave={this.hoverEnd.bind(this)}>
            <Nav.Link style={{color: this.state.color}} color="{this.state.color}">{this.props.name} - {this.state.value}</Nav.Link>
            </Nav.Item>
        )
    }
}

export default HeaderOption