import Vex from 'vexflow'

// Vexflow setup
var VF = Vex.Flow;

var div = document.getElementById('vexflow');
var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
renderer.resize(130,130);
var context = renderer.getContext();
context.setFont('Arial', 10, "").setBackgroundFillStyle('#eed');

export { VF, renderer, context }
