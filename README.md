# react-responsive-input

> customizable react text input


Use simple props to change the styles and functionality.

Themes and labels coming soon.

This is an alpha version. Please don't use it in production.

Sample inclusion in a project.


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

class Test extends Component {

    state = {
        value:'',
        isFocused:false,
        isError:false
    }

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
                <InputComponent 
                    value={value}
                    onChange={this.handleChangeUser}

                    isFocused={isFocused}
                    onBlur={this.handleInputBlur}
                    onFocus={this.handleInputFocus}

                    isFocusedByDefault={true}

                    isError={isError}

                    inputRef={this.getInputRef}

                    fontSize={'1.1em'}
                    maxLength={10}
                    height={45}
                    width={300}

                />
            </TestPage>
        )
    }
}

export default Test

```

## License

MIT © [gulshanzealous](https://github.com/gulshanzealous)
