module.exports = {
  pwa: {
    name: 'app name',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    workboxOptions: {
      //제외하고 싶은 파일명 추가
      exclude: [/\.map$/,/manifest\.json$/, 'index.html']
    }
  }
}