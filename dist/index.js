'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var PropTypes = _interopDefault(require('prop-types'));

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var _templateObject = taggedTemplateLiteral(['\n    flex:1 1 100%;\n    height:100%;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    background-color:#fff;\n    border-radius:3px;\n    border-width:1px;\n    border-style:solid;\n    border-color:#ccc;\n\n    display:flex;\n\n    ', '\n    ', '\n    ', '\n    \n'], ['\n    flex:1 1 100%;\n    height:100%;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    background-color:#fff;\n    border-radius:3px;\n    border-width:1px;\n    border-style:solid;\n    border-color:#ccc;\n\n    display:flex;\n\n    ', '\n    ', '\n    ', '\n    \n']),
    _templateObject2 = taggedTemplateLiteral(['\n        border-color:#aaa;\n    '], ['\n        border-color:#aaa;\n    ']),
    _templateObject3 = taggedTemplateLiteral(['\n        border-color: rgba(85, 190, 241, 0.9);\n    '], ['\n        border-color: rgba(85, 190, 241, 0.9);\n    ']),
    _templateObject4 = taggedTemplateLiteral(['\n        border-color: rgba(204, 34, 34,0.5);\n    '], ['\n        border-color: rgba(204, 34, 34,0.5);\n    ']),
    _templateObject5 = taggedTemplateLiteral(['\n    flex:1 1 90%;\n    max-width: 90%;\n    height:80%;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    font-size: ', ';\n    \n    :focus {\n        outline: none;\n        box-shadow: none;\n    }\n    border:none;\n'], ['\n    flex:1 1 90%;\n    max-width: 90%;\n    height:80%;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    font-size: ', ';\n    \n    :focus {\n        outline: none;\n        box-shadow: none;\n    }\n    border:none;\n']);

var InputContainer = styled__default.div.attrs(function (props) {
    return {};
})(_templateObject, function (props) {
    return props._isHovered && styled.css(_templateObject2);
}, function (props) {
    return props._isFocused && styled.css(_templateObject3);
}, function (props) {
    return props._isError && styled.css(_templateObject4);
});
var Input = styled__default.input.attrs(function (props) {
    return {
        'fontSizeCalc': props.fontSize || '1em'

    };
})(_templateObject5, function (props) {
    return props.fontSizeCalc;
});

var InputRoot = function (_React$Component) {
    inherits(InputRoot, _React$Component);

    function InputRoot(props) {
        classCallCheck(this, InputRoot);

        var _this = possibleConstructorReturn(this, (InputRoot.__proto__ || Object.getPrototypeOf(InputRoot)).call(this, props));

        _this._handleMouseEnter = function () {
            _this.setState({ _isHovered: true });
        };

        _this._handleMouseLeave = function () {
            _this.setState({ _isHovered: false });
        };

        _this._handleInputChange = function (e) {
            try {
                if (_this.props.onChange) {
                    if (typeof _this.props.value !== 'string') {
                        throw Error('Can\'t change value without passing a value prop');
                    }
                    if (typeof _this.props.onChange !== 'function') {
                        throw Error('onChange must be a function');
                    }
                    _this.props.onChange(e);
                    return;
                }
                _this.setState({ _value: e.target.value });
            } catch (e) {
                // this.setState({ _isError: true })
                console.error(e.message);
            }
        };

        _this._handleInputFocus = function (e) {
            try {
                _this.setState({ _isFocused: true });
                if (_this.props.onFocus) {
                    if (typeof _this.props.onFocus !== 'function') {
                        throw Error('onFocus must be a function');
                    }
                    _this.props.onFocus(e);
                }
            } catch (e) {
                // this.setState({ _isError: true })
                console.error(e.message);
            }
        };

        _this._handleInputBlur = function (e) {
            try {
                _this.setState({ _isFocused: false, _autoFocus: false });
                if (_this.props.onBlur) {
                    if (typeof _this.props.onBlur !== 'function') {
                        throw Error('onBlur must be a function');
                    }
                    _this.props.onBlur(e);
                }
            } catch (e) {
                // this.setState({ _isError: true })
                console.error(e.message);
            }
        };

        _this.checkInputValue = function (propValue, internalValue) {
            try {

                if (typeof propValue === 'string') {
                    if (typeof _this.props.onChange !== 'function') {
                        throw Error('Can\'t pass value without passing an onChange function');
                    }
                    return propValue;
                }
                return internalValue;
            } catch (e) {
                // this.setState({ _isError: true })
                console.error(e.message);
            }
        };

        _this.checkInputFocus = function (propFocus, internalFocus) {
            if (typeof propFocus === 'boolean') {
                // if(propFocus === true){
                //     console.log('called')

                // }
                return propFocus;
            }
            return internalFocus;
        };

        _this.checkInputError = function (propError, internalError) {
            if (typeof propError === 'boolean') {
                return propError;
            }
            return internalError;
        };

        _this._inputRef = React__default.createRef();
        _this.state = {
            _isHovered: false,
            _isFocused: false,
            _isError: false,
            _autoFocus: false,
            _value: ''
        };
        return _this;
    }

    createClass(InputRoot, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                if (this.props.isFocusedByDefault === true) {
                    this.setState({
                        _autoFocus: true
                    });
                }
                if (this.props.inputRef) {
                    if (typeof this.props.inputRef !== 'function') {
                        throw Error('inputRef must be a function');
                    }
                    this.props.inputRef(this._inputRef);
                }
            } catch (e) {
                console.error(e.message);
            }
            // this.checkInputFocus(this.props.isFocused, this.state._isFocused)
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                _isHovered = _state._isHovered,
                _isFocused = _state._isFocused,
                _isError = _state._isError,
                _value = _state._value,
                _autoFocus = _state._autoFocus;
            var _props = this.props,
                fontSize = _props.fontSize,
                maxLength = _props.maxLength,
                value = _props.value,
                isFocused = _props.isFocused,
                isError = _props.isError,
                isFocusedByDefault = _props.isFocusedByDefault;


            var valueCalc = this.checkInputValue(value, _value);
            var errorCalc = this.checkInputError(isError, _isError);
            var focusCalc = this.checkInputFocus(isFocused, _isFocused);

            return React__default.createElement(
                InputContainer,
                {
                    _isHovered: _isHovered,
                    _isFocused: focusCalc,
                    _isError: errorCalc,
                    onMouseEnter: this._handleMouseEnter,
                    onMouseLeave: this._handleMouseLeave
                },
                React__default.createElement(Input, {
                    value: valueCalc ? valueCalc : '',
                    onChange: this._handleInputChange,
                    onFocus: this._handleInputFocus,
                    onBlur: this._handleInputBlur,
                    fontSize: fontSize,
                    maxLength: maxLength,
                    autoFocus: _autoFocus,
                    ref: this._inputRef
                    // placeholder={'This is a placeholder'}
                })
            );
        }
    }]);
    return InputRoot;
}(React__default.Component);

var _templateObject$1 = taggedTemplateLiteral(['\n    height: ', ';\n    width: ', ';\n    display:flex;\n    justify-content:center;\n    align-items:center;\n'], ['\n    height: ', ';\n    width: ', ';\n    display:flex;\n    justify-content:center;\n    align-items:center;\n']);

var RootContainer = styled__default.div.attrs(function (props) {
    var ht = '40px';
    if (props.height) {
        ht = props.height + 'px';
    }
    if (props.height === 'parent') {
        ht = '100%';
    }
    var wd = '40px';
    if (props.width) {
        wd = props.width + 'px';
    }
    if (props.width === 'parent') {
        wd = '100%';
    }
    return {
        'height': ht,
        'width': wd
    };
})(_templateObject$1, function (props) {
    return props.height;
}, function (props) {
    return props.width;
});

var MainComponent = function (_Component) {
    inherits(MainComponent, _Component);

    function MainComponent() {
        classCallCheck(this, MainComponent);
        return possibleConstructorReturn(this, (MainComponent.__proto__ || Object.getPrototypeOf(MainComponent)).apply(this, arguments));
    }

    createClass(MainComponent, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                value = _props.value,
                isFocused = _props.isFocused,
                isError = _props.isError,
                isFocusedByDefault = _props.isFocusedByDefault,
                height = _props.height,
                width = _props.width,
                fontSize = _props.fontSize,
                maxLength = _props.maxLength,
                onChange = _props.onChange,
                onBlur = _props.onBlur,
                onFocus = _props.onFocus,
                inputRef = _props.inputRef;

            // console.log(this.props)

            return React__default.createElement(
                RootContainer,
                {
                    height: height,
                    width: width
                },
                React__default.createElement(InputRoot, {
                    value: value,
                    onChange: onChange,

                    isFocused: isFocused,
                    onBlur: onBlur,
                    onFocus: onFocus,

                    isFocusedByDefault: isFocusedByDefault,

                    isError: isError,

                    inputRef: inputRef,

                    fontSize: fontSize,
                    maxLength: maxLength

                })
            );
        }
    }]);
    return MainComponent;
}(React.Component);

MainComponent.propTypes = {

    value: PropTypes.string,
    isFocused: PropTypes.bool,
    isError: PropTypes.bool,
    isFocusedByDefault: PropTypes.bool,

    height: PropTypes.node,
    width: PropTypes.node,
    maxLength: PropTypes.number,
    fontSize: PropTypes.string,

    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    inputRef: PropTypes.func

};

MainComponent.defaultProps = {
    fontSize: '1.1em',
    height: 40,
    width: 300
};

module.exports = MainComponent;
//# sourceMappingURL=index.js.map
