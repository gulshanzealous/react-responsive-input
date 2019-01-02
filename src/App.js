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
                        // width={200}

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

