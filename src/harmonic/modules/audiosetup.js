var context = null
try {
  window.AudioContext =
    window.AudioContext||window.webkitAutioContext
  context = new AudioContext()
}
catch(e) {
  alert('Web Audio API is not supported in this browser')
}
export default context
