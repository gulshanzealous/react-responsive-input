import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import InputRoot from './InputRoot'


const RootContainer = styled.div.attrs(props => {
  let ht = '40px'
  if(props.height){
    ht = props.height + 'px'
  }
  if(props.height === 'parent'){
    ht = '100%'
  }
  let wd = '40px'
  if(props.width){
    wd = props.width + 'px'
  }
  if(props.width === 'parent'){
    wd = '100%'
  }
  return{
    'height': ht,
    'width': wd
  }
})`
    height: ${props => props.height};
    width: ${props => props.width};
    display:flex;
    justify-content:center;
    align-items:center;
`

class MainComponent extends Component {
  
    render() {
        const { 
            value, isFocused, isError, isFocusedByDefault,
            height, width, fontSize, maxLength,
            onChange, onBlur, onFocus, inputRef
        } = this.props

        // console.log(this.props)
         
        return (
            <RootContainer 
                height={height}
                width={width}
            >
                <InputRoot
                    value={value}
                    onChange={onChange}

                    isFocused={isFocused}
                    onBlur={onBlur}
                    onFocus={onFocus}

                    isFocusedByDefault={isFocusedByDefault}

                    isError={isError}

                    inputRef={inputRef}

                    fontSize={fontSize}
                    maxLength={maxLength}
                    
                />
            </RootContainer>
        )
    }
}

export default MainComponent


MainComponent.propTypes = {

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

MainComponent.defaultProps = {
    fontSize:'1.1em',
    height:40,
    width:300
}