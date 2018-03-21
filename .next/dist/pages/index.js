'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Prices = require('../components/Prices');

var _Prices2 = _interopRequireDefault(_Prices);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'H:\\coin-website-project\\pages\\index.js?entry';


var Index = function Index(props) {
    return _react2.default.createElement(_Layout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, _react2.default.createElement('h1', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, 'Welcome to CryptoCurrency Coin Details'), _react2.default.createElement(_Prices2.default, { details: props.bpi, __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    })));
};
Index.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var res, data;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return fetch('https://api.coinmarketcap.com/v1/ticker/');

                case 2:
                    res = _context.sent;
                    _context.next = 5;
                    return res.json();

                case 5:
                    data = _context.sent;
                    return _context.abrupt('return', {
                        bpi: data

                    });

                case 7:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}));

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJGZXRjaCIsIkxheW91dCIsIlByaWNlcyIsIkluZGV4IiwicHJvcHMiLCJicGkiLCJnZXRJbml0aWFsUHJvcHMiLCJmZXRjaCIsInJlcyIsImpzb24iLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBWTs7Ozs7Ozs7O0FBRW5CLElBQU0sUUFBTyxTQUFQLEFBQU8sTUFBQSxBQUFDLE9BQUQ7MkJBQ1QsQUFBQzs7c0JBQUQ7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxjQUFBOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FESixBQUNJLEFBRUEsMkRBQUEsQUFBQyxrQ0FBTyxTQUFTLE1BQWpCLEFBQXVCO3NCQUF2Qjt3QkFMQyxBQUNULEFBQ0ksQUFHSTtBQUFBOztBQUxaO0FBWUEsTUFBQSxBQUFNLDJGQUFnQixtQkFBQTthQUFBO2tFQUFBO2tCQUFBOzZDQUFBO3FCQUFBO29DQUFBOzJCQUNGLE1BREUsQUFDRixBQUFNOztxQkFBaEI7QUFEWSxtQ0FBQTtvQ0FBQTsyQkFFRCxJQUZDLEFBRUQsQUFBSTs7cUJBQWY7QUFGWSxvQ0FBQTs7NkJBQUEsQUFHWCxBQUNHOztBQURILEFBQ0g7O3FCQUpjO3FCQUFBO29DQUFBOztBQUFBO2dCQUFBO0FBQXRCLEFBU0E7O2tCQUFBLEFBQWdCIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ikg6L2NvaW4td2Vic2l0ZS1wcm9qZWN0In0=