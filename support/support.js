var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Support = /** @class */ (function (_super) {
    __extends(Support, _super);
    function Support() {
        var _this = _super.call(this) || this;
        _this.attachShadow({ mode: 'open' });
        _this.render();
        return _this;
    }
    Support.prototype.render = function () {
        this.shadowRoot.innerHTML = "\n        <div style=\"border: darkkhaki 2px dashed; padding: 20px\">\n            <p>\n                <img src=\"assets/js.png\" height=50px\">\n            </p>\n            <h1>support works!</h1>\n        </div>\n        ";
    };
    Support.prototype.attributeChangedCallback = function (name, oldValue, newValue) {
        this.render();
    };
    return Support;
}(HTMLElement));
customElements.define('support-element', Support);
