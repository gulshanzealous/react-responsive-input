
import React from 'react'
import styled, {css} from 'styled-components'

const InputContainer = styled.div.attrs(props => ({

}))`
    flex:1 1 100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#fff;
    border-radius:3px;
    border-width:1px;
    border-style:solid;
    border-color:#ccc;

    display:flex;

    ${props => props._isHovered && css`
        border-color:#aaa;
    `}
    ${props => props._isFocused && css`
        border-color: rgba(85, 190, 241, 0.9);
    `}
    ${props => props._isError && css`
        border-color: rgba(204, 34, 34,0.5);
    `}
    
`
const Input = styled.input.attrs(props => ({
    'fontSizeCalc': props.fontSize || '1em',

}))`
    flex:1 1 90%;
    max-width: 90%;
    height:80%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: ${props => props.fontSizeCalc};
    
    :focus {
        outline: none;
        box-shadow: none;
    }
    border:none;
`


class InputRoot extends React.Component {
    constructor(props) {
        super(props);
        this._inputRef= React.createRef();
        this.state = {
            _isHovered:false,
            _isFocused:false,
            _isError:false,
            _autoFocus:false,
            _value:''
        }
    }

    componentDidMount(){
        try{
            if(this.props.isFocusedByDefault === true){
                this.setState({
                    _autoFocus : true
                })
            }
            if(this.props.inputRef){
                if(typeof this.props.inputRef !== 'function'){
                    throw Error('inputRef must be a function')
                }
                this.props.inputRef(this._inputRef)
            }
        } catch(e) {
            console.error(e.message)
        }
        // this.checkInputFocus(this.props.isFocused, this.state._isFocused)
    }

    _handleMouseEnter = () => {
        this.setState({ _isHovered: true })
    }

    _handleMouseLeave = () => {
        this.setState({ _isHovered: false })
    }

    _handleInputChange = (e) => {
        try{
            if(this.props.onChange){
                if(typeof this.props.value !== 'string'){
                    throw Error(`Can't change value without passing a value prop`)
                }
                if(typeof this.props.onChange !== 'function'){
                    throw Error('onChange must be a function')
                }
                this.props.onChange(e)
                return
            }
            this.setState({ _value: e.target.value })

        } catch(e) {
            // this.setState({ _isError: true })
            console.error(e.message)
        }
    }

    _handleInputFocus = (e) => {
        try{
            this.setState({ _isFocused: true })
            if(this.props.onFocus){
                if(typeof this.props.onFocus !== 'function'){
                    throw Error('onFocus must be a function')
                }
                this.props.onFocus(e)
            }
        } catch(e){
            // this.setState({ _isError: true })
            console.error(e.message)
        }
    }

    _handleInputBlur = (e) => {
        try{
            this.setState({ _isFocused: false, _autoFocus: false })
            if(this.props.onBlur){
                if(typeof this.props.onBlur !== 'function'){
                    throw Error('onBlur must be a function')
                }
                this.props.onBlur(e)
            }
        } catch(e){
            // this.setState({ _isError: true })
            console.error(e.message)
        }
    }

    checkInputValue = (propValue, internalValue) => {
        try{
            
            if(typeof propValue === 'string'){
                if(typeof this.props.onChange !== 'function'){
                    throw Error(`Can't pass value without passing an onChange function`)
                }
                return propValue
            }
            return internalValue
        } catch(e) {
            // this.setState({ _isError: true })
            console.error(e.message)
        }
    }

    checkInputFocus = (propFocus, internalFocus) => {
        if(typeof propFocus === 'boolean'){
            // if(propFocus === true){
            //     console.log('called')
                           
            // }
            return propFocus
        }
        return internalFocus
    }

    checkInputError = (propError, internalError) => {
        if(typeof propError === 'boolean'){
            return propError
        }
        return internalError
    }    

    render() {
        const { _isHovered, _isFocused, _isError, _value, _autoFocus } = this.state
        const { fontSize, maxLength, value, isFocused, isError, isFocusedByDefault } = this.props

        const valueCalc = this.checkInputValue(value, _value)
        const errorCalc = this.checkInputError(isError, _isError)
        let focusCalc = this.checkInputFocus(isFocused, _isFocused)

        return (
            <InputContainer
                _isHovered={_isHovered}
                _isFocused={focusCalc}
                _isError={errorCalc}
                onMouseEnter={this._handleMouseEnter}
                onMouseLeave={this._handleMouseLeave}
            >
                <Input
                    value={valueCalc ? valueCalc: ''}
                    onChange={this._handleInputChange}
                    onFocus={this._handleInputFocus}
                    onBlur={this._handleInputBlur}
                    fontSize={fontSize}
                    maxLength={maxLength}
                    autoFocus={_autoFocus}
                    ref={this._inputRef}
                    // placeholder={'This is a placeholder'}
                />
            </InputContainer>
            
        )
    }
}

export default InputRoot