/// Triple-slash directives
/// <amd-dependency path='esri/core/tsSupport/declareExtendsHelper' name='__extends' />
/// <amd-dependency path='esri/core/tsSupport/decorateHelper' name='__decorate' />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "esri/core/tsSupport/declareExtendsHelper", "esri/core/tsSupport/decorateHelper", "esri/widgets/Widget", "esri/core/watchUtils", "esri/core/accessorSupport/decorators", "esri/widgets/support/widget"], function (require, exports, __extends, __decorate, Widget, watchUtils, decorators_1, widget_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // CSS constant that contains all the CSS classes that are used
    // in the widget
    var CSS = {
        base: 'esri-widget esri-component recenter-tool',
        button: 'btn btn-block btn-primary'
    };
    // Creation of the Recenter Widget
    var Recenter = (function (_super) {
        __extends(Recenter, _super);
        function Recenter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Recenter.prototype.postInitialize = function () {
            watchUtils.init(this, 'view.center, view.interacting, view.scale', this._onViewChange.bind(this));
        };
        Recenter.prototype.render = function () {
            var _a = this.state, x = _a.x, y = _a.y, scale = _a.scale, interacting = _a.interacting;
            var styles = {
                textShadow: interacting ? '-1px 0 red, 0 1px red, 1px 0 red, 0 -1px red' : ''
            };
            return (widget_1.jsxFactory.createElement("div", { class: CSS.base },
                widget_1.jsxFactory.createElement("table", { styles: styles },
                    widget_1.jsxFactory.createElement("tr", null,
                        widget_1.jsxFactory.createElement("td", null, "X"),
                        widget_1.jsxFactory.createElement("td", null, Number(x).toFixed(2))),
                    widget_1.jsxFactory.createElement("tr", null,
                        widget_1.jsxFactory.createElement("td", null, "Y"),
                        widget_1.jsxFactory.createElement("td", null, Number(y).toFixed(2))),
                    widget_1.jsxFactory.createElement("tr", null,
                        widget_1.jsxFactory.createElement("td", null, "Scale"),
                        widget_1.jsxFactory.createElement("td", null, Number(scale).toFixed(0)))),
                widget_1.jsxFactory.createElement("div", { class: CSS.button, bind: this, onclick: this._defaultCenter }, "Recenter")));
        };
        Recenter.prototype._onViewChange = function () {
            // object destructuring
            var _a = this.view, interacting = _a.interacting, center = _a.center, scale = _a.scale;
            this.state = {
                x: center.x,
                y: center.y,
                interacting: interacting,
                scale: scale
            };
        };
        Recenter.prototype._defaultCenter = function () {
            this.view.goTo({
                center: this.initialCenter,
                zoom: this.initialZoom
            });
        };
        return Recenter;
    }(decorators_1.declared(Widget)));
    __decorate([
        decorators_1.property()
    ], Recenter.prototype, "view", void 0);
    __decorate([
        decorators_1.property()
    ], Recenter.prototype, "initialCenter", void 0);
    __decorate([
        decorators_1.property()
    ], Recenter.prototype, "initialZoom", void 0);
    __decorate([
        decorators_1.property(),
        widget_1.renderable()
    ], Recenter.prototype, "state", void 0);
    Recenter = __decorate([
        decorators_1.subclass('esri.widgets.Recenter')
    ], Recenter);
    exports.Recenter = Recenter;
});
//# sourceMappingURL=Recenter.js.map