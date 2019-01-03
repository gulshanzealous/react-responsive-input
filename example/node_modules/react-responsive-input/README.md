# react-responsive-input

> customizable react text input


Use simple props to change the styles and functionality.

Themes and labels coming soon.

This is an alpha version. Please don't use it in production.


[![NPM](https://img.shields.io/npm/v/react-responsive-input.svg)](https://www.npmjs.com/package/react-responsive-input) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-responsive-input
```

## Usage

```jsx
import React, { Component } from 'react'
import styled from 'styled-components'
import InputComponent from 'react-responsive-input'

const TestPage = styled.div`
    height:100vh;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`
const ParentStyle = styled.div`
    height:35px;
    width:450px;
`

class Test extends Component {

    state = {
        value:'',
        isFocused:false,
        isError:false
    }
    
    componentDidMount(){

    }

    handleChangeUser = (e) => {
        const value = e.target.value
        
        this.setState({
            value,
            isError: value.length === this.props.maxLength ? true : false
        })
    }

    handleInputFocus = () => {
        this.setState({ isFocused: true })
    }

    handleInputBlur = () => {
        this.setState({ isFocused: false })
    }

    getInputRef = (ref) => {
        console.log(ref)
    }
  
    render() {
        const { value, isFocused, isError } = this.state

        return (
            <TestPage>
                <ParentStyle>
                    <InputComponent 
                        value={value}
                        onChange={this.handleChangeUser}

                        fontSize={'1em'}
                        maxLength={60}
                        height={'parent'} // takes parent's height
                        width={'parent'} // takes parent's width
                        // height={45}
                        // width={500}

                        isFocused={isFocused}
                        onBlur={this.handleInputBlur}
                        onFocus={this.handleInputFocus}

                        isFocusedByDefault={false}

                        isError={isError}

                        inputRef={this.getInputRef}

                    />
                </ParentStyle>
            </TestPage>
        )
    }
}

export default Test

```

## Props Overview

```jsx
Input.propTypes = {

    value:PropTypes.string,
    isFocused:PropTypes.bool,
    isError:PropTypes.bool,
    isFocusedByDefault:PropTypes.bool,

    height:PropTypes.node,
    width:PropTypes.node,
    maxLength:PropTypes.number,
    fontSize:PropTypes.string,

    onChange:PropTypes.func,
    onBlur:PropTypes.func,
    onFocus:PropTypes.func,
    inputRef:PropTypes.func,

}

```

## Props Configuration

* If you pass no props, the default props take over.
  The input component maintains default state to store your input.

* The event handler functions you pass as props are passed the synthetic event object of React as parameter.

* The width and height can be set to a positive integer (treated in pixels). 
  However, for a responsive behavior, just set the height and width to 'parent'. 
  This will set the height and width of the input to 100% of the container's dimensions which wraps the input component.
  From there on, just control the parent's dimensions to control the input component's dimensions.


## License

MIT © [gulshanzealous](https://github.com/gulshanzealous)
