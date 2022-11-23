"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var react_1 = require("react");
var DataStreamer_1 = require("./DataStreamer");
var Graph_1 = require("./Graph");
require("./App.css");
/**
 * The parent element of the react app.
 * It renders title, button and Graph react element.
 */
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            // data saves the server responds.
            // We use this state to parse data down to the child element (Graph) as element property
            data: []
        };
        return _this;
    }
    /**
     * Render Graph react component with state.data parse as property data
     */
    App.prototype.renderGraph = function () {
        return (<Graph_1["default"] data={this.state.data}/>);
    };
    /**
     * Get new data from server and update the state with the new data
     */
    App.prototype.getDataFromServer = function () {
        var _this = this;
        DataStreamer_1["default"].getData(function (serverResponds) {
            // Update the state by creating a new array of data that consists of
            // Previous data in the state and the new data from server
            _this.setState({ data: __spreadArray(__spreadArray([], _this.state.data, true), serverResponds, true) });
        });
    };
    /**
     * Render the App react component
     */
    App.prototype.render = function () {
        var _this = this;
        return (<div className="App">
        <header className="App-header">
          Bank & Merge Co Task 2
        </header>
        <div className="App-content">
          <button className="btn btn-primary Stream-button" 
        // when button is click, our react app tries to request
        // new data from the server.
        // As part of your task, update the getDataFromServer() function
        // to keep requesting the data every 100ms until the app is closed
        // or the server does not return anymore data.
        onClick={function () { _this.getDataFromServer(); }}>
            Start Streaming Data
          </button>
          <div className="Graph">
            {this.renderGraph()}
          </div>
        </div>
      </div>);
    };
    return App;
}(react_1.Component));
exports["default"] = App;
