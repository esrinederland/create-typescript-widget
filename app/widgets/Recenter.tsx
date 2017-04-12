/// Triple-slash directives
/// <amd-dependency path='esri/core/tsSupport/declareExtendsHelper' name='__extends' />
/// <amd-dependency path='esri/core/tsSupport/decorateHelper' name='__decorate' />

// Import the modules
import Widget = require('esri/widgets/Widget');
import watchUtils = require('esri/core/watchUtils')

import { subclass, declared, property } from 'esri/core/accessorSupport/decorators';
import { renderable, jsxFactory } from 'esri/widgets/support/widget';

import Geometry = require('esri/geometry/Geometry');
import Point = require('esri/geometry/Point');
import MapView = require('esri/views/MapView');

// Define interfaces and type aliases 
// to structure the code
type Coordinates = Point | number[];

interface Center {
  x: number;
  y: number;
}

interface State extends Center {
  interacting: boolean;
  scale: number;
}

interface Style {
  textShadow: string;
}

// CSS constant that contains all the CSS classes that are used
// in the widget
const CSS = {
  base: 'esri-widget esri-component recenter-tool',
  button: 'btn btn-block btn-primary'
};

// Creation of the Recenter Widget
@subclass('esri.widgets.Recenter')
export class Recenter extends declared(Widget) {

  @property()
  view: MapView;

  @property()
  initialCenter: Coordinates;

  @property()
  initialZoom: number;

  @property()
  @renderable()
  state: State;

  postInitialize() {
    watchUtils.init(this, 'view.center, view.interacting, view.scale', this._onViewChange.bind(this));
  }

  render() {
    const { x, y, scale, interacting } = this.state;

    const styles: Style = {
      textShadow: interacting ? '-1px 0 red, 0 1px red, 1px 0 red, 0 -1px red' : ''
    }

    return (
      <div class={CSS.base} >
        <table styles={styles}>
          <tr><td>X</td><td>{Number(x).toFixed(2)}</td></tr>
          <tr><td>Y</td><td>{Number(y).toFixed(2)}</td></tr>
          <tr><td>Scale</td><td>{Number(scale).toFixed(0)}</td></tr>
        </table>
        <div
          class={CSS.button}
          bind={this}
          onclick={this._defaultCenter}
        >
          Recenter
        </div>
      </div>
    );
  }

  private _onViewChange() {
    // object destructuring
    let { interacting, center, scale } = this.view;
    
    this.state = {
      x: center.x,
      y: center.y,
      interacting,
      scale
    };
  }

  private _defaultCenter() {
    this.view.goTo({
      center: this.initialCenter,
      zoom: this.initialZoom
    });
  }
}