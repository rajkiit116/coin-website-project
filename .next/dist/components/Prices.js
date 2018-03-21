'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'H:\\coin-website-project\\components\\Prices.js';


var Prices = function (_React$Component) {
    (0, _inherits3.default)(Prices, _React$Component);

    function Prices() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Prices);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Prices.__proto__ || (0, _getPrototypeOf2.default)(Prices)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Prices, [{
        key: 'render',
        value: function render() {

            var listOfCurrency = this.props.details.map(function (name) {
                return _react2.default.createElement('tr', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 8
                    }
                }, _react2.default.createElement('td', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 9
                    }
                }, name.rank, '  '), _react2.default.createElement('td', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 10
                    }
                }, name.id, ' '), _react2.default.createElement('td', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 11
                    }
                }, '$', new Intl.NumberFormat('en-US', {
                    currency: 'USD',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 6
                }).format(name.market_cap_usd)), _react2.default.createElement('td', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 16
                    }
                }, '$', new Intl.NumberFormat('en-US', {
                    style: 'decimal',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 6
                }).format(name.price_usd), ' '), _react2.default.createElement('td', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                    }
                }, ' ', new Intl.NumberFormat('en-DE', {
                    style: 'decimal',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2
                }).format(name.total_supply), ' '), _react2.default.createElement('td', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                    }
                }, new Intl.NumberFormat('en-US', {
                    style: 'decimal',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2
                }).format(name.percent_change_24h)));
            });
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement('table', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement('thead', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement('tr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, 'Rank'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, 'Name'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, 'Market Cap'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, 'Price'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, 'Volume'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, 'Change'))), _react2.default.createElement('tbody', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, listOfCurrency)), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }));
        }
    }]);

    return Prices;
}(_react2.default.Component);

exports.default = Prices;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFByaWNlcy5qcyJdLCJuYW1lcyI6WyJQcmljZXMiLCJzdGF0ZSIsImxpc3RPZkN1cnJlbmN5IiwicHJvcHMiLCJkZXRhaWxzIiwibWFwIiwibmFtZSIsInJhbmsiLCJpZCIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJjdXJyZW5jeSIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsIm1heGltdW1GcmFjdGlvbkRpZ2l0cyIsImZvcm1hdCIsIm1hcmtldF9jYXBfdXNkIiwic3R5bGUiLCJwcmljZV91c2QiLCJ0b3RhbF9zdXBwbHkiLCJwZXJjZW50X2NoYW5nZV8yNGgiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTSxBOzs7Ozs7Ozs7Ozs7OztnTixBQUNOLFFBQU8sQTs7Ozs7aUNBR0MsQUFFUjs7Z0JBQUksc0JBQWlCLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsSUFBSSxVQUFBLEFBQVMsTUFBSyxBQUMxQzt1Q0FBTyxjQUFBOztrQ0FBQTtvQ0FBQSxBQUNQO0FBRE87QUFBQSxpQkFBQSxrQkFDUCxjQUFBOztrQ0FBQTtvQ0FBQSxBQUFLO0FBQUw7QUFBQSx3QkFBQSxBQUFVLE1BREgsQUFDUCxBQUNBLHVCQUFBLGNBQUE7O2tDQUFBO29DQUFBLEFBQUs7QUFBTDtBQUFBLHdCQUFBLEFBQVUsSUFGSCxBQUVQLEFBQ0Esc0JBQUEsY0FBQTs7a0NBQUE7b0NBQUE7QUFBQTtBQUFBLG1CQUFNLFNBQUksS0FBSixBQUFTLGFBQVQsQUFBc0I7OEJBQVMsQUFDdkIsQUFDVjsyQ0FGaUMsQUFFVixBQUN2QjsyQ0FIRSxBQUErQixBQUdWO0FBSFUsQUFDakMsbUJBREUsQUFJQyxPQUFPLEtBUFAsQUFHUCxBQUFNLEFBSWEsQUFDbkIsa0NBQUEsY0FBQTs7a0NBQUE7b0NBQUE7QUFBQTtBQUFBLG1CQUFNLFNBQUksS0FBSixBQUFTLGFBQVQsQUFBc0I7MkJBQVMsQUFDMUIsQUFDUDsyQ0FGaUMsQUFFVixBQUN2QjsyQ0FIRSxBQUErQixBQUdWO0FBSFUsQUFDakMsbUJBREUsQUFJQyxPQUFPLEtBSmQsQUFBTSxBQUlhLFlBWlosQUFRUCxBQUtELHNCQUFBLGNBQUE7O2tDQUFBO29DQUFBO0FBQUE7QUFBQSxtQkFBTSxTQUFJLEtBQUosQUFBUyxhQUFULEFBQXNCOzJCQUFTLEFBQzFCLEFBQ047MkNBRmdDLEFBRVQsQUFDdkI7MkNBSEMsQUFBK0IsQUFHVDtBQUhTLEFBQ2pDLG1CQURFLEFBSUUsT0FBTyxLQUpmLEFBQU0sQUFJYyxlQWpCWixBQWFSLEFBS0Esc0JBQUEsY0FBQTs7a0NBQUE7b0NBQUEsQUFBSztBQUFMO0FBQUEsdUJBQVMsS0FBSixBQUFTLGFBQVQsQUFBc0I7MkJBQVMsQUFDekIsQUFDTjsyQ0FGK0IsQUFFUixBQUN2QjsyQ0FIQSxBQUErQixBQUdSO0FBSFEsQUFDaEMsbUJBREMsQUFJRyxPQUFPLEtBdEJkLEFBQU8sQUFrQlIsQUFBSyxBQUllLEFBRXBCO0FBekJmLEFBQXFCLEFBMEJqQixhQTFCaUI7bUNBMkJiLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0U7QUFERjtBQUFBLGFBQUEsa0JBQ0UsY0FBQTs7OEJBQUE7Z0NBQUEsQUFDTTtBQUROO0FBQUEsK0JBQ00sY0FBQTs7OEJBQUE7Z0NBQUEsQUFDQTtBQURBO0FBQUEsK0JBQ0EsY0FBQTs7OEJBQUE7Z0NBQUEsQUFDQTtBQURBO0FBQUEsK0JBQ0EsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREEsQUFDQSxBQUNBLHlCQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUZBLEFBRUEsQUFDQSx5QkFBQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFIQSxBQUdBLEFBQ0EsK0JBQUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBSkEsQUFJQSxBQUNBLDBCQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUxBLEFBS0EsQUFDQSwyQkFBQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFSTixBQUNNLEFBQ0EsQUFNQSxBQUdILDZCQUFBLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ1E7QUFEUjtBQUFBLGVBWkwsQUFDRSxBQVdHLEFBSUQ7OzhCQUFBO2dDQWpCUixBQUNJLEFBZ0JJLEFBR1g7QUFIVztBQUFBOzs7OztFQWpEUyxnQkFBTSxBLEFBd0QzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJQcmljZXMuanMiLCJzb3VyY2VSb290IjoiSDovY29pbi13ZWJzaXRlLXByb2plY3QifQ==