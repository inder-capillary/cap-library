// NPM package: https://www.npmjs.com/package/react-mobile-datepicker (v4.0.2)
// minor modification made to add a "selected" class to list items for marking selected dates

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('react-dom'))
    : typeof define === 'function' && define.amd ? define(['react', 'react-dom'], factory)
      : (global.reactMobileDatePicker = factory(global.React, global.ReactDOM));
}(this, ((React, ReactDOM) => {
  function __$styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    const insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    const head = document.head || document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  const React__default = 'default' in React ? React.default : React;
  ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM.default : ReactDOM;

  __$styleInject(".datepicker-modal {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, .6);\n    z-index: 999;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\n.datepicker {\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    z-index: 1;\n    font-size: 16px;\n    text-align: center;\n    font-family: arial,verdana,sans-serif;\n    -webkit-box-sizing: content-box;\n            box-sizing: content-box;\n    -webkit-font-smoothing: antialiased;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n\n.datepicker .datepicker-header {\n        padding: 0 .5em;\n        min-height: 2em;\n        line-height: 2em;\n        font-size: 1.125em;\n    }\n\n.datepicker .datepicker-navbar {\n        padding: 0 .5em .5em .5em;\n        overflow: hidden;\n    }\n\n.datepicker .datepicker-navbar-btn {\n        height: 2.5em;\n        line-height: 2.5em;\n        float: right;\n        padding: 0 1em;\n        cursor: pointer;\n    }\n\n.datepicker .datepicker-caption {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        padding: .5em .25em;\n    }\n\n.datepicker .datepicker-caption-item {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n        margin: 0 .25em;\n        height: 40px;\n        line-height: 40px;\n        font-size: 1.2em;\n    }\n\n.datepicker .datepicker-content {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        padding: .5em .25em;\n    }\n\n.datepicker .datepicker-col-1 {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n        margin: 0 .25em;\n margin: 0;\n    }\n\n.datepicker .datepicker-viewport {\n        height: 200px;\n        position: relative;\n        overflow: hidden\n    }\n\n.datepicker .datepicker-viewport::after {\n    content: '';\n    position: absolute;\n    z-index: 2;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    pointer-events: none;\n}\n\n.datepicker .datepicker-wheel {\n        position: absolute;\n        height: 40px;\n        top: 50%;\n        margin-top: -20px;\n        width: 100%;\n    }\n\n.datepicker .datepicker-scroll {\n        list-style-type: none;\n        padding: 0\n    }\n\n.datepicker .datepicker-scroll>li {\n    height: 40px;\n    line-height: 40px;\n    font-size: 1.375em;\n    cursor: pointer;\n}\n\n.datepicker .datepicker-scroll>li.selected {\n    font-weight: 500;\n}\n\n.datepicker {\n\n    /* default */\n}\n\n.datepicker.default {\n    background-color: #f7f7f7;\n}\n\n.datepicker.default .datepicker-header {\n            color: #4eccc4;\n}\n\n.datepicker.default .datepicker-wheel {\n            border-top: 1px solid #4eccc4;\n            border-bottom: 1px solid #4eccc4;\n}\n\n.datepicker.default .datepicker-caption-item {\n            color: rgb(59, 59, 59);\n}\n\n.datepicker.default .datepicker-scroll li {\n                color: rgb(59, 59, 59);\n            }\n\n.datepicker.default .datepicker-scroll li.disabled {\n                color: rgb(191, 191, 191);\n            }\n\n.datepicker.default .datepicker-navbar-btn {\n            color: #4eccc4;\n}\n\n.datepicker {\n\n    /* dark */\n}\n\n.datepicker.dark {\n    background-color: #263238;\n}\n\n.datepicker.dark .datepicker-header {\n            color: #50ccc4;\n}\n\n.datepicker.dark .datepicker-wheel {\n            border-top: 1px solid #50ccc4;\n            border-bottom: 1px solid #50ccc4;\n}\n\n.datepicker.dark .datepicker-caption-item {\n            color: rgb(201, 203, 204);\n}\n\n.datepicker.dark .datepicker-scroll li {\n                color: rgb(201, 203, 204);\n            }\n\n.datepicker.dark .datepicker-scroll li.disabled {\n                color: rgb(87, 96, 100);\n            }\n\n.datepicker.dark .datepicker-navbar-btn {\n            color: #50ccc4;\n}\n\n.datepicker {\n\n    /* ios */\n}\n\n.datepicker.ios {\n    background-color: #f7f7f7;\n}\n\n.datepicker.ios .datepicker-col-1 {margin: 0;\n}\n\n.datepicker.ios .datepicker-header {\n            color: rgb(59, 59, 59);\n            padding: 0 3.5em;\n}\n\n.datepicker.ios .datepicker-viewport::after {\n    background: -webkit-gradient(linear,left top, left bottom,from(#f7f7f7),color-stop(52%, rgba(245, 245, 245, 0)),color-stop(48%, rgba(245, 245, 245, 0)),to(#f7f7f7));\n    background: linear-gradient(#f7f7f7,rgba(245, 245, 245, 0)52%,rgba(245, 245, 245, 0)48%,#f7f7f7);\n}\n\n.datepicker.ios .datepicker-wheel {\n            border-top: 1px solid #dbdbdb;\n            border-bottom: 1px solid #dbdbdb;\n}\n\n.datepicker.ios .datepicker-caption-item {\n            color: rgb(59, 59, 59);\n}\n\n.datepicker.ios .datepicker-scroll li {\n                color: rgb(59, 59, 59);\n            }\n\n.datepicker.ios .datepicker-scroll li.disabled {\n                color: rgb(191, 191, 191);\n            }\n\n.datepicker.ios .datepicker-navbar {\n            position: absolute;\n            z-index: 2;\n            top: 0;\n            left: 0;\n            width: 100%;\n            padding: 0;\n            border-bottom: 1px solid #acacac;\n}\n\n.datepicker.ios .datepicker-navbar-btn {\n            color: #007aff;\n}\n\n.datepicker.ios .datepicker-navbar-btn:nth-child(2) {\n    float: left;\n}\n\n.datepicker.ios .datepicker-content {\n            padding-top: 48px;\n}\n\n.datepicker.ios .datepicker-header + .datepicker-content {\n          padding-top: 0;\n}\n\n.datepicker.ios .datepicker-caption + .datepicker-content {\n          padding-top: 0;\n}\n\n.datepicker {\n\n    /* android */\n}\n\n.datepicker.android, .datepicker.android-dark {\n    background-color: #f5f5f5;\n}\n\n.datepicker.android .datepicker-header, .datepicker.android-dark .datepicker-header {\n            color: #31b6e7;\n            border-bottom: 2px solid #31b6e7;\n}\n\n.datepicker.android .datepicker-col-1, .datepicker.android-dark .datepicker-col-1 {margin: 0 .625em;\n}\n\n.datepicker.android .datepicker-viewport::after, .datepicker.android-dark .datepicker-viewport::after {\n    background-image: -webkit-gradient(linear,left top, left bottom,from(#f5f5f5),color-stop(52%, rgba(245, 245, 245, 0)),color-stop(48%, rgba(245, 245, 245, 0)),to(#f5f5f5));\n    background-image: linear-gradient(#f5f5f5,rgba(245, 245, 245, 0)52%,rgba(245, 245, 245, 0)48%,#f5f5f5);\n}\n\n.datepicker.android .datepicker-wheel, .datepicker.android-dark .datepicker-wheel {\n            border-top: 2px solid #31b6e7;\n            border-bottom: 2px solid #31b6e7;\n}\n\n.datepicker.android .datepicker-caption-item, .datepicker.android-dark .datepicker-caption-item {\n            color: rgb(56, 56, 56);\n}\n\n.datepicker.android .datepicker-scroll li, .datepicker.android-dark .datepicker-scroll li {\n                font-size: 1.125em;\n                color: rgb(56, 56, 56);\n            }\n\n.datepicker.android .datepicker-scroll li.disabled, .datepicker.android-dark .datepicker-scroll li.disabled {\n                color: rgb(188, 188, 188);\n            }\n\n.datepicker.android .datepicker-navbar, .datepicker.android-dark .datepicker-navbar {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            border-top: 1px solid #d9d4d4;\n            padding: 0;\n}\n\n.datepicker.android .datepicker-navbar-btn, .datepicker.android-dark .datepicker-navbar-btn {\n            padding: 0;\n            color: #000;\n            -webkit-box-flex: 1;\n                -ms-flex: 1;\n                    flex: 1;\n}\n\n.datepicker.android .datepicker-navbar-btn:nth-child(2), .datepicker.android-dark .datepicker-navbar-btn:nth-child(2) {\n    border-left: 1px solid #d9d4d4;\n}\n\n.datepicker {\n\n    /* android-dark */\n}\n\n.datepicker.android-dark {\n    background-color: #292829;\n}\n\n.datepicker.android-dark .datepicker-viewport::after {\n    background-image: -webkit-gradient(linear,left top, left bottom,from(#282828),color-stop(52%, rgba(40, 40, 40, 0)),color-stop(48%, rgba(40, 40, 40, 0)),to(#282828));\n    background-image: linear-gradient(#282828,rgba(40, 40, 40, 0)52%,rgba(40, 40, 40, 0)48%,#282828);\n}\n\n.datepicker.android-dark .datepicker-caption-item {\n            color: rgb(199, 199, 199);\n}\n\n.datepicker.android-dark .datepicker-scroll li {\n                color: rgb(199, 199, 199);\n            }\n\n.datepicker.android-dark .datepicker-scroll li.disabled {\n                color: rgb(88, 88, 88);\n            }\n\n.datepicker.android-dark .datepicker-navbar { border-color: #424542;\n}\n\n.datepicker.android-dark .datepicker-navbar-btn {\n            color: #fff;\n}\n\n.datepicker.android-dark .datepicker-navbar-btn:nth-child(2) {\n    border-color: #424542;\n}\n", {});

  /**
 * @module time工具
 */

  function throwIfInvalidDate(date) {
    if (Object.prototype.toString.call(date, null) !== '[object Date]') {
      throw new Error('参数类型不对');
    }
  }

  function daysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

  /**
 * 对Date的扩展，将 Date 转化为指定格式的String
 * @param  {Date}       日期
 * @return {String}     字符串格式
 */
  function convertDate(date, format) {
    let str = format;
    const o = {
      'M+': date.getMonth() + 1,
      'D+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
    };
    if (/(Y+)/.test(format)) {
      str = str.replace(RegExp.$1, date.getFullYear().toString().substr(4 - RegExp.$1.length));
    }

    for (const k in o) {
        // eslint-disable-line
      if (new RegExp(`(${k})`).test(format)) {
        str = str.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : (`00${o[k]}`).substr(o[k].toString().length));
      }
    }

    return str;
  }

  /**
 * 获取相对日期的偏移日期
 * @param  {Date}       日期
 * @return {number}     相对的天数
 */
  function nextYear(now) {
    const index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    throwIfInvalidDate(now);
    const date = new Date(now.getFullYear() + index, now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());
    return date;
  }

  function nextMonth(now) {
    const index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    throwIfInvalidDate(now);
    const year = now.getFullYear();
    const month = now.getMonth() + index;
    const dayOfMonth = Math.min(now.getDate(), daysInMonth(year, month));
    const date = new Date(year, month, dayOfMonth, now.getHours(), now.getMinutes(), now.getSeconds());
    return date;
  }

  function nextDate(now) {
    const index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    throwIfInvalidDate(now);
    const date = new Date(now.getTime() + index * 24 * 60 * 60 * 1000);
    return date;
  }

  function nextHour(now) {
    const index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    throwIfInvalidDate(now);
    const date = new Date(now.getTime() + index * 60 * 60 * 1000);
    return date;
  }

  function nextMinute(now) {
    const index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    throwIfInvalidDate(now);
    const date = new Date(now.getTime() + index * 60 * 1000);
    return date;
  }

  function nextSecond(now) {
    const index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    throwIfInvalidDate(now);
    const date = new Date(now.getTime() + index * 1000);
    return date;
  }

  const TimeUtil = Object.freeze({
    convertDate,
    nextYear,
    nextMonth,
    nextDate,
    nextHour,
    nextMinute,
    nextSecond,
  });

  function shallowEqual(prev, next) {
    if (prev === next) return true;
    const prevKeys = Object.keys(prev);
    const nextKeys = Object.keys(next);

    if (prevKeys.length !== nextKeys.length) return false;

    return prevKeys.every((key) => prev.hasOwnProperty(key) && prev[key] === next[key]);
  }

  function PureRender(Component$$1) {
    Component$$1.prototype.shouldComponentUpdate = function (nextProps, nextState) {
      return PureRender.shouldComponentUpdate(nextProps, nextState, this.props, this.state);
    };
  }

  PureRender.shouldComponentUpdate = function (nextProps, nextState, preProps, preState) {
    return !shallowEqual(preProps, nextProps) || !shallowEqual(preState, nextState);
  };

  /**
 * 驼峰写法
 * @param  {String} str 要转化的字符串
 * @return {String}     转化后的字符串
 */
  function camelCase(str) {
    return str.replace(/-([a-z])/g, ($0, $1) => $1.toUpperCase()).replace('-', '');
  }

  /**
 * 格式化css属性对象
 * @param  {Object} props 属性对象
 * @return {Object}       添加前缀的格式化属性对象
 */
  function formatCss(props) {
    const prefixs = ['-webkit-', '-moz-', '-ms-'];

    const result = {};

    const regPrefix = /transform|transition/;

    for (const key in props) {
      if (props.hasOwnProperty(key)) {
        const styleValue = props[key];

        // 如果检测是transform或transition属性
        if (regPrefix.test(key)) {
          for (let i = 0; i < prefixs.length; i++) {
            const styleName = camelCase(prefixs[i] + key);
            result[styleName] = styleValue.replace(regPrefix, `${prefixs[i]}$&`);
          }
        }

        result[key] = styleValue;
      }
    }

    return result;
  }

  /**
 * 为元素添加css样式
 * @param {Object} element 目标元素
 * @param {Object} props   css属性对象
 */
  function addPrefixCss(element, props) {
    const formatedProps = formatCss(props);
    for (const key in formatedProps) {
      if (formatedProps.hasOwnProperty(key)) {
        element.style[key] = formatedProps[key];
      }
    }
  }

  const asyncGenerator = (function () {
    function AwaitValue(value) {
      this.value = value;
    }

    function AsyncGenerator(gen) {
      let front; let
        back;

      function send(key, arg) {
        return new Promise(((resolve, reject) => {
          const request = {
            key,
            arg,
            resolve,
            reject,
            next: null,
          };

          if (back) {
            back = back.next = request;
          } else {
            front = back = request;
            resume(key, arg);
          }
        }));
      }

      function resume(key, arg) {
        try {
          const result = gen[key](arg);
          const value = result.value;

          if (value instanceof AwaitValue) {
            Promise.resolve(value.value).then((arg) => {
              resume("next", arg);
            }, (arg) => {
              resume("throw", arg);
            });
          } else {
            settle(result.done ? "return" : "normal", result.value);
          }
        } catch (err) {
          settle("throw", err);
        }
      }

      function settle(type, value) {
        switch (type) {
          case "return":
            front.resolve({
              value,
              done: true,
            });
            break;

          case "throw":
            front.reject(value);
            break;

          default:
            front.resolve({
              value,
              done: false,
            });
            break;
        }

        front = front.next;

        if (front) {
          resume(front.key, front.arg);
        } else {
          back = null;
        }
      }

      this._invoke = send;

      if (typeof gen.return !== "function") {
        this.return = undefined;
      }
    }

    if (typeof Symbol === "function" && Symbol.asyncIterator) {
      AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
        return this;
      };
    }

    AsyncGenerator.prototype.next = function (arg) {
      return this._invoke("next", arg);
    };

    AsyncGenerator.prototype.throw = function (arg) {
      return this._invoke("throw", arg);
    };

    AsyncGenerator.prototype.return = function (arg) {
      return this._invoke("return", arg);
    };

    return {
      wrap(fn) {
        return function () {
          return new AsyncGenerator(fn.apply(this, arguments));
        };
      },
      await(value) {
        return new AwaitValue(value);
      },
    };
  }());


  const classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  const createClass = (function () {
    function defineProperties(target, props) {
      for (let i = 0; i < props.length; i++) {
        const descriptor = props[i];
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
  }());


  const _extends = Object.assign || function (target) {
    for (let i = 1; i < arguments.length; i++) {
      const source = arguments[i];

      for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };


  const inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError(`Super expression must either be null or a function, not ${typeof superClass}`);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };


  const objectWithoutProperties = function (obj, keys) {
    const target = {};

    for (const i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  };

  const possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };


  const toArray = function (arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  };

  const toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
    return Array.from(arr);
  };

  /**
 * @module Date组件
 */
  const DATE_HEIGHT = 40; // 每个日期的高度
  const DATE_LENGTH = 10; // 日期的个数
  const MIDDLE_INDEX = Math.floor(DATE_LENGTH / 2); // 日期数组中间值的索引
  const MIDDLE_Y = -DATE_HEIGHT * MIDDLE_INDEX; // translateY值

  const isUndefined = function isUndefined(val) {
    return typeof val === 'undefined';
  };
  const isFunction = function isFunction(val) {
    return Object.prototype.toString.apply(val) === '[object Function]';
  };

  /**
 * Class Date组件类
 * @extends Component
 */
  const DatePickerItem = (function (_Component) {
    inherits(DatePickerItem, _Component);

    function DatePickerItem(props) {
      classCallCheck(this, DatePickerItem);

      const _this = possibleConstructorReturn(this, (DatePickerItem.__proto__ || Object.getPrototypeOf(DatePickerItem)).call(this, props));

      _this.animating = false; // 判断是否在transition过渡动画之中
      _this.touchY = 0; // 保存touchstart的pageY
      _this.translateY = 0; // 容器偏移的距离
      _this.currentIndex = MIDDLE_INDEX; // 滑动中当前日期的索引
      _this.moveDateCount = 0; // 一次滑动移动了多少个时间

      _this.state = {
        translateY: MIDDLE_Y,
        marginTop: (_this.currentIndex - MIDDLE_INDEX) * DATE_HEIGHT,
      };

      _this.renderDatepickerItem = _this.renderDatepickerItem.bind(_this);
      _this.handleContentTouch = _this.handleContentTouch.bind(_this);
      _this.handleContentMouseDown = _this.handleContentMouseDown.bind(_this);
      _this.handleContentMouseMove = _this.handleContentMouseMove.bind(_this);
      _this.handleContentMouseUp = _this.handleContentMouseUp.bind(_this);
      return _this;
    }

    createClass(DatePickerItem, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._iniDates(this.props.value);
      },
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        const viewport = this.viewport;
        viewport.addEventListener('touchstart', this.handleContentTouch, false);
        viewport.addEventListener('touchmove', this.handleContentTouch, false);
        viewport.addEventListener('touchend', this.handleContentTouch, false);
        viewport.addEventListener('mousedown', this.handleContentMouseDown, false);
      },
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.value.getTime() === this.props.value.getTime()) {
          return;
        }
        this._iniDates(nextProps.value);
        this.currentIndex = MIDDLE_INDEX;
        this.setState({
          translateY: MIDDLE_Y,
          marginTop: (this.currentIndex - MIDDLE_INDEX) * DATE_HEIGHT,
        });
      },

      /**
         * Optimization component, Prevents unnecessary rendering
         * Only value or state change should re-rendering
         *
         * @param  {Object} nextProps next props
         * @param  {Object} nextState next state
         * @return {Boolean}          Whether re-rendering
         */

    }, {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps, nextState) {
        return nextProps.value.getTime() !== this.props.value.getTime() || !shallowEqual(nextState, this.state);
      },
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        const viewport = this.viewport;
        viewport.removeEventListener('touchstart', this.handleContentTouch, false);
        viewport.removeEventListener('touchmove', this.handleContentTouch, false);
        viewport.removeEventListener('touchend', this.handleContentTouch, false);
        viewport.removeEventListener('mousedown', this.handleContentMouseDown, false);
      },
    }, {
      key: '_iniDates',
      value: function _iniDates(date) {
        const _this2 = this;

        const typeName = this.props.type;
        const dates = Array(...toConsumableArray(Array(DATE_LENGTH))).map((value, index) => TimeUtil[`next${typeName}`](date, (index - MIDDLE_INDEX) * _this2.props.step));
        this.setState({ dates });
      },
    }, {
      key: '_updateDates',
      value: function _updateDates(direction) {
        const typeName = this.props.type;
        const dates = this.state.dates;

        if (direction === 1) {
          this.currentIndex++;
          this.setState({
            dates: [].concat(toConsumableArray(dates.slice(1)), [TimeUtil[`next${typeName}`](dates[dates.length - 1], this.props.step)]),
            marginTop: (this.currentIndex - MIDDLE_INDEX) * DATE_HEIGHT,
          });
        } else {
          this.currentIndex--;
          this.setState({
            dates: [TimeUtil[`next${typeName}`](dates[0], -this.props.step)].concat(toConsumableArray(dates.slice(0, dates.length - 1))),
            marginTop: (this.currentIndex - MIDDLE_INDEX) * DATE_HEIGHT,
          });
        }
      },
    }, {
      key: '_checkIsUpdateDates',
      value: function _checkIsUpdateDates(direction, translateY) {
        return direction === 1 ? this.currentIndex * DATE_HEIGHT + DATE_HEIGHT / 2 < -translateY : this.currentIndex * DATE_HEIGHT - DATE_HEIGHT / 2 > -translateY;
      },

      /**
         * 清除对象的transition样式
         * @param  {Dom}     obj     指定的对象
         * @return {undefined}
         */

    }, {
      key: '_clearTransition',
      value: function _clearTransition(obj) {
        addPrefixCss(obj, { transition: '' });
      },

      /**
         * 滑动到下一日期
         * @param  {number} direction 滑动方向
         * @return {undefined}
         */

    }, {
      key: '_moveToNext',
      value: function _moveToNext(direction) {
        const date = this.state.dates[MIDDLE_INDEX];
        const _props = this.props;


        const max = _props.max;


        const min = _props.min;

        if (direction === -1 && date.getTime() < min.getTime() && this.moveDateCount) {
          this._updateDates(1);
        } else if (direction === 1 && date.getTime() > max.getTime() && this.moveDateCount) {
          this._updateDates(-1);
        }

        this._moveTo(this.refs.scroll, this.currentIndex);
      },

      /**
         * 添加滑动动画
         * @param  {DOM} obj   DOM对象
         * @param  {number} angle 角度
         * @return {undefined}
         */

    }, {
      key: '_moveTo',
      value: function _moveTo(obj, currentIndex) {
        const _this3 = this;

        this.animating = true;

        addPrefixCss(obj, { transition: 'transform .2s ease-out' });

        this.setState({
          translateY: -currentIndex * DATE_HEIGHT,
        });

        // NOTE: There is no transitionend, setTimeout is used instead.
        setTimeout(() => {
          _this3.animating = false;
          _this3.props.onSelect(_this3.state.dates[MIDDLE_INDEX]);
          _this3._clearTransition(_this3.refs.scroll);
        }, 200);
      },
    }, {
      key: 'handleStart',
      value: function handleStart(event) {
        this.touchY = !isUndefined(event.targetTouches) && !isUndefined(event.targetTouches[0]) ? event.targetTouches[0].pageY : event.pageY;

        this.translateY = this.state.translateY;
        this.moveDateCount = 0;
      },
    }, {
      key: 'handleMove',
      value: function handleMove(event) {
        const touchY = !isUndefined(event.targetTouches) && !isUndefined(event.targetTouches[0]) ? event.targetTouches[0].pageY : event.pageY;

        const dir = touchY - this.touchY;
        const translateY = this.translateY + dir;
        const direction = dir > 0 ? -1 : 1;

        // 日期最小值，最大值限制
        const date = this.state.dates[MIDDLE_INDEX];
        const _props2 = this.props;


        const max = _props2.max;


        const min = _props2.min;

        if (date.getTime() < min.getTime() || date.getTime() > max.getTime()) {
          return;
        }

        // 检测是否更新日期列表
        if (this._checkIsUpdateDates(direction, translateY)) {
          this.moveDateCount = direction > 0 ? this.moveDateCount + 1 : this.moveDateCount - 1;
          this._updateDates(direction);
        }

        this.setState({ translateY });
      },
    }, {
      key: 'handleEnd',
      value: function handleEnd(event) {
        const touchY = event.pageY || event.changedTouches[0].pageY;
        const dir = touchY - this.touchY;
        const direction = dir > 0 ? -1 : 1;
        this._moveToNext(direction);
      },

      /**
         * 滑动日期选择器触屏事件
         * @param  {Object} event 事件对象
         * @return {undefined}
         */

    }, {
      key: 'handleContentTouch',
      value: function handleContentTouch(event) {
        event.preventDefault();
        if (this.animating) return;
        if (event.type === 'touchstart') {
          this.handleStart(event);
        } else if (event.type === 'touchmove') {
          this.handleMove(event);
        } else if (event.type === 'touchend') {
          this.handleEnd(event);
        }
      },

      /**
         * 滑动日期选择器鼠标事件
         * @param  {Object} event 事件对象
         * @return {undefined}
         */

    }, {
      key: 'handleContentMouseDown',
      value: function handleContentMouseDown(event) {
        if (this.animating) return;
        this.handleStart(event);
        document.addEventListener('mousemove', this.handleContentMouseMove);
        document.addEventListener('mouseup', this.handleContentMouseUp);
      },
    }, {
      key: 'handleContentMouseMove',
      value: function handleContentMouseMove(event) {
        if (this.animating) return;
        this.handleMove(event);
      },
    }, {
      key: 'handleContentMouseUp',
      value: function handleContentMouseUp(event) {
        if (this.animating) return;
        this.handleEnd(event);
        document.removeEventListener('mousemove', this.handleContentMouseMove);
        document.removeEventListener('mouseup', this.handleContentMouseUp);
      },

      /**
         * 渲染一个日期DOM对象
         * @param  {Object} date date数据
         * @return {Object}      JSX对象
         */

    }, {
      key: 'renderDatepickerItem',
      value: function renderDatepickerItem(date, index) {
        let className = date < this.props.min || date > this.props.max ? 'disabled' : '';
        // mark selected date with specific class
        if (date.getTime() === this.props.value.getTime()) {
          className += ' selected';
        }
        let formatDate = void 0;
        if (isFunction(this.props.format)) {
          formatDate = this.props.format(date);
        } else {
          formatDate = convertDate(date, this.props.format);
        }

        return React__default.createElement(
          'li',
          {
            key: index,
            className },
          formatDate
        );
      },
    }, {
      key: 'render',
      value: function render() {
        const _this4 = this;

        const scrollStyle = formatCss({
          transform: `translateY(${this.state.translateY}px)`,
          marginTop: this.state.marginTop,
        });

        return React__default.createElement(
          'div',
          { className: 'datepicker-col-1' },
          React__default.createElement(
            'div',
            {
              ref: function ref(viewport) {
                return _this4.viewport = viewport;
                        }, // eslint-disable-line
              className: 'datepicker-viewport' },
            React__default.createElement(
              'div',
              { className: 'datepicker-wheel' },
              React__default.createElement(
                'ul',
                {
                  ref: 'scroll',
                  className: 'datepicker-scroll',
                  style: scrollStyle },
                this.state.dates.map(this.renderDatepickerItem)
              )
            )
          )
        );
      },
    }]);
    return DatePickerItem;
  }(React.Component));

  /**
 * 默认属性
 */
  const defaultProps = {
    isPopup: true,
    isOpen: false,
    theme: 'default',
    value: new Date(),
    min: new Date(1970, 0, 1),
    max: new Date(2050, 0, 1),
    showFooter: true,
    showHeader: true,
    showCaption: false,
    dateConfig: {
      year: {
        format: 'YYYY',
        caption: 'Year',
        step: 1,
      },
      month: {
        format: 'M',
        caption: 'Mon',
        step: 1,
      },
      date: {
        format: 'D',
        caption: 'Day',
        step: 1,
      },
    },
    headerFormat: 'YYYY/MM/DD',
    confirmText: '完成',
    cancelText: '取消',
    onChange: function onChange() {},
    onSelect: function onSelect() {},
    onCancel: function onCancel() {},
  };

  /**
 * 日期配置
 */
  const dateConfigMap = {
    year: {
      format: 'YYYY',
      caption: 'Year',
      step: 1,
    },
    month: {
      format: 'M',
      caption: 'Mon',
      step: 1,
    },
    date: {
      format: 'D',
      caption: 'Day',
      step: 1,
    },
    hour: {
      format: 'hh',
      caption: 'Hour',
      step: 1,
    },
    minute: {
      format: 'mm',
      caption: 'Min',
      step: 1,
    },
    second: {
      format: 'hh',
      caption: 'Sec',
      step: 1,
    },
  };

  /**
 * @module DatePicker Component
 */

  /**
 * 大写首字母
 * @param {String} 字符串
 */
  const capitalize = function capitalize(_ref) {
    const _ref2 = toArray(_ref);


    const first = _ref2[0];


    const rest = _ref2.slice(1);

    return first.toUpperCase() + rest.join('');
  };

  /**
 * 判断数组
 * @param {any} val
 */
  const isArray = function isArray(val) {
    return Object.prototype.toString.apply(val) === '[object Array]';
  };

  /**
 * Class DatePicker Component Class
 * @extends Component
 */

  const DatePicker = (function (_Component) {
    inherits(DatePicker, _Component);

    function DatePicker(props) {
      classCallCheck(this, DatePicker);

      const _this = possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, props));

      _this.state = {
        value: nextDate(_this.props.value),
      };

      if ('dateFormat' in props) {
        console.warn('dateFormat已经被弃用, 请使用dateConfig属性配置');
      }

      if ('dateSteps' in props) {
        console.warn('dateSteps已经被弃用, 请使用dateConfig属性配置');
      }

      if ('showFormat' in props) {
        console.warn('headerFormat, 请使用dateConfig属性');
      }

      _this.handleFinishBtnClick = _this.handleFinishBtnClick.bind(_this);
      _this.handleDateSelect = _this.handleDateSelect.bind(_this);
      return _this;
    }

    createClass(DatePicker, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        // update value of state
        const date = nextDate(nextProps.value);
        if (date.getTime() !== this.state.value.getTime()) {
          this.setState({ value: date });
        }
      },

      /**
         * When you swipe two datepickeritems at the same time.
         * Prevent dates from going out.
         */

    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        const value = this.state.value;
        const _props = this.props;


        const min = _props.min;


        const max = _props.max;

        if (value.getTime() > max.getTime()) {
          this.setState({ value: max });
        }

        if (value.getTime() < min.getTime()) {
          this.setState({ value: min });
        }
      },

      /**
         * Optimization component, Prevents unnecessary rendering
         * Only props or state change or value before re-rendering
         *
         * @param  {Object} nextProps next props
         * @param  {Object} nextState next state
         * @return {Boolean}          Whether re-rendering
         */

    }, {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps, nextState) {
        const date = nextDate(nextState.value);
        return date.getTime() !== this.state.value.getTime() || PureRender.shouldComponentUpdate(nextProps, nextState, this.props, this.state);
      },

      /**
         * 点击完成按钮事件
         * @return {undefined}
         */

    }, {
      key: 'handleFinishBtnClick',
      value: function handleFinishBtnClick() {
        this.props.onSelect(this.state.value);
      },

      /**
         * 选择下一个日期
         * @return {undefined}
         */

    }, {
      key: 'handleDateSelect',
      value: function handleDateSelect(value) {
        const _this2 = this;

        this.setState({ value }, () => {
          _this2.props.onChange(value);
        });
      },

      /**
         * 格式化dateConfig
         * @param {*} dataConfig dateConfig属性
         */

    }, {
      key: 'normalizeDateConfig',
      value: function normalizeDateConfig(dataConfig) {
        const configList = [];
        if (isArray(dataConfig)) {
          for (let i = 0; i < dataConfig.length; i++) {
            const _value = dataConfig[i];
            if (typeof _value === 'string') {
              const lowerCaseKey = _value.toLocaleLowerCase();
              configList.push(_extends({}, dateConfigMap[lowerCaseKey], {
                type: capitalize(lowerCaseKey),
              }));
            }
          }
        } else {
          for (const key in dataConfig) {
            if (dataConfig.hasOwnProperty(key)) {
              const _lowerCaseKey = key.toLocaleLowerCase();
              if (dateConfigMap.hasOwnProperty(_lowerCaseKey)) {
                configList.push(_extends({}, dateConfigMap[_lowerCaseKey], dataConfig[key], {
                  type: capitalize(_lowerCaseKey),
                }));
              }
            }
          }
        }

        return configList;
      },

      /**
         * render函数
         * @return {Object} JSX对象
         */

    }, {
      key: 'render',
      value: function render() {
        const _this3 = this;

        const _props2 = this.props;


        const min = _props2.min;


        const max = _props2.max;


        const theme = _props2.theme;


        const dateConfig = _props2.dateConfig;


        const confirmText = _props2.confirmText;


        const cancelText = _props2.cancelText;


        const headerFormat = _props2.headerFormat;


        const showHeader = _props2.showHeader;


        const showFooter = _props2.showFooter;


        const customHeader = _props2.customHeader;


        const showCaption = _props2.showCaption;

        const value = this.state.value;
        const themeClassName = ['default', 'dark', 'ios', 'android', 'android-dark'].indexOf(theme) === -1 ? 'default' : theme;

        const dataConfigList = this.normalizeDateConfig(dateConfig);

        return React__default.createElement(
          'div',
          {
            className: `datepicker ${themeClassName}` },
          showHeader && React__default.createElement(
            'div',
            { className: 'datepicker-header' },
            customHeader || convertDate(value, headerFormat)
          ),
          showCaption && React__default.createElement(
            'div',
            { className: 'datepicker-caption' },
            dataConfigList.map((item, index) => React__default.createElement(
              'div',
              { key: index, className: 'datepicker-caption-item' },
              item.caption
            ))
          ),
          React__default.createElement(
            'div',
            { className: 'datepicker-content' },
            dataConfigList.map((item, index) => React__default.createElement(DatePickerItem, {
              key: index,
              value,
              min,
              max,
              step: item.step,
              type: item.type,
              format: item.format,
              onSelect: _this3.handleDateSelect }))
          ),
          showFooter && React__default.createElement(
            'div',
            { className: 'datepicker-navbar' },
            React__default.createElement(
              'a',
              {
                className: 'datepicker-navbar-btn',
                onClick: this.handleFinishBtnClick },
              confirmText
            ),
            React__default.createElement(
              'a',
              {
                className: 'datepicker-navbar-btn',
                onClick: this.props.onCancel },
              cancelText
            )
          )
        );
      },
    }]);
    return DatePicker;
  }(React.Component));

  const renderSubtreeIntoContainer = ReactDOM.unstable_renderSubtreeIntoContainer;

  const Modal = (function (_Component) {
    inherits(Modal, _Component);

    function Modal() {
      classCallCheck(this, Modal);
      return possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
    }

    createClass(Modal, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._div = document.createElement('div');
        this._div.classList.add('Modal-Portal');
        document.body.appendChild(this._div);
        this.renderPortal(this.props);
      },
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(newProps) {
        this.renderPortal(newProps);
      },
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(this._div);
        this._div.parentNode.removeChild(this._div);
      },
    }, {
      key: 'renderPortal',
      value: function renderPortal(props) {
        const portal = React__default.cloneElement(this.props.children, _extends({}, props, { key: 'portal' }), null);

        this.portal = renderSubtreeIntoContainer(this, portal, this._div);
      },
    }, {
      key: 'render',
      value: function render() {
        return React__default.createElement('noscript', null);
      },
    }]);
    return Modal;
  }(React.Component));

  Modal.defaultProps = {
    isOpen: false,
  };

  function EnhanceDatePicker(_ref) {
    const isOpen = _ref.isOpen;


    const props = objectWithoutProperties(_ref, ['isOpen']);

    function onModalClose(event) {
      if (event.target === event.currentTarget) {
        props.onCancel();
      }
    }

    return React__default.createElement(
      'div',
      {
        style: { display: isOpen ? '' : 'none' },
        onClick: onModalClose,
        className: 'datepicker-modal' },
      React__default.createElement(DatePicker, props)
    );
  }

  function ModalDatePicker(_ref2) {
    const isPopup = _ref2.isPopup;


    const props = objectWithoutProperties(_ref2, ['isPopup']);

    if (!isPopup) {
      return React__default.createElement(DatePicker, props);
    }

    return React__default.createElement(
      Modal,
      props,
      React__default.createElement(EnhanceDatePicker, null)
    );
  }

  ModalDatePicker.displayName = 'MobileDatePicker';
  ModalDatePicker.defaultProps = defaultProps;

  return ModalDatePicker;
})));
//# sourceMappingURL=react-mobile-datepicker.js.map
