export const setClasses = {
  '012': '012',
  '013': '023',
  '014': '034',
  '015': '045',
  '016': '056',
  '024': '024',
  '025': '035',
  '026': '046',
  '027': '057',
  '036': '036',
  '037': '047',
  '048': '048'
}

const audio = {}

for (var i = 0; i < 33; i++) {
  audio[53+i] = `/theme/dist/harmonic/audio/${53+i}.mp3`
}

export { audio }
