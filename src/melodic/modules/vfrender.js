import $ from 'jquery'
import { VF, renderer, context } from './vfinit.js'


export default function (meter,start,dur,acc,dot){
  // clear svg contents
  $('svg').empty();
  var stave = new VF.Stave(0,0,200);
  stave.addClef('treble').addTimeSignature(meter);
  stave.setContext(context).draw();

  var note = new VF.StaveNote({clef: "treble",
                 keys: [`${start}`],
                 duration: `${dur}`});
  if (acc == "#"){
      note.addAccidental(0, new VF.Accidental("#"));
  } else if (acc == "b"){
      note.addAccidental(0, new VF.Accidental("b"));
  }
  if (dot){
    note.addDotToAll();
  }

  var note = [note];

  if (dur == 'q'){
    var beats = 1;
  } else if (dur == 'h'){
    var beats = 2;
  } else if (dur == '8'){
    var beats = 0.5;
  } else if (dur == 'qd'){
    var beats = 1.5;
  } else if (dur == '8d'){
    var beats = 0.75;
  }
  var voice = new VF.Voice({num_beats: beats, beat_value: 4});
  voice.addTickables(note);
  var formatter = new VF.Formatter().joinVoices([voice]).format([voice],200);
  voice.draw(context,stave);
}
