Title: Euphony
Tags: theory, web
Slug: projects/euphony
Category: Projects
Summary: An online learning platform for music theory that provides real-time feedback on interactive part-writing exercises.

I am currently developing a browser-based music notation editor titled *Euphony*, which is designed for SATB part writing. Users receive real-time feedback on voice-leading errors such as parallel 5ths.

[Try out a demo.](http://www.euphonytheory.com)

<p>What follows is a brief technical description of the app.</p>

<h3 class="mt-5">User interface</h3>
<p>Euphony is built with <a href="https://reactjs.org/">React</a>.</p>
<p>Declarative routing is handled with <a href="https://reacttraining.com/react-router/">React Router</a>.</p>
<p>The editor itself is built with <a href="https://github.com/0xfe/vexflow/wiki/The-VexFlow-Tutorial">Vexflow</a>, which renders notation using <a href="https://developer.mozilla.org/en-US/docs/Web/SVG">Scalable Vector Graphics (SVG)</a>. Vexflow is also responsible for overlaying analytical feedback on the score.</p>



<h3 class="mt-5">State</h3>
<p>Global state is managed by <a href="https://redux.js.org/">Redux</a>.</p>
<p>The most commonly dispatched Redux action types within the editor include <code>ADD_NOTE</code>, <code>CHANGE_EVENT_DURATION</code>, and so on.</p>
<p>As I developed Euphony I had to think about the most concise way to represent chords, keys, notes and other musical objects, as well as their interrelationships.</p>
<p>This led to a <i>minimal state representation</i> for each object. For example, notes in Euphony have the following signature:</p>
<pre><code>
  note = {
    id,
    step,       // Mod 7 scale step
    midi,       // MIDI integer
    duration,   // decimal duration in quarter notes
    onset,      // decimal onset in quarter notes
    voice,      // voice name
    tied        // is tied (boolean)
  }
</code></pre>
<p>Other data are <i>derived</i> from this minimal state, such as a note's accidental, octave, offset, the measure it is located in, and so on.</p>
<p>All musical objects are stored in Redux as plain JavaScript objects, and relationships between musical objects are normalized.</p>

<h3 class="mt-5">Sound</h3>
<p>Sound is loaded and managed via the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API">Web Audio API</a>.</p>


###Screenshots


####Instructor dashboard

#####Instructors can manage their course from this view, including the creation of modules, exercises, and real-time grade statistics.

<img src="/theme/images/instructor_dashboard.jpg"
    alt="instructor dashboard" width="100%" style="margin-bottom:40px" />


####Instructor editor

#####Instructors can create, edit, save, and publish exercises from *Euphony's* interactive music notation editor.

<img src="/theme/images/instructor_editor.jpg"
    alt="instructor dashboard" width="100%" style="margin-bottom:40px" />


####Instructor settings

#####Instructors can fully customize the kind of feedback that students receive.

<img src="/theme/images/settings.jpg"
    alt="instructor dashboard" width="100%" style="margin-bottom:40px" />



####Student editor

#####Students receive instant feedback as they work through an exercise.

<img src="/theme/images/errors.jpg"
    alt="instructor dashboard" width="100%" style="margin-bottom:40px" />
