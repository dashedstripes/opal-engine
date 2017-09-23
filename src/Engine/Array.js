Array.prototype.contains = function (obj) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].payload === obj.payload) {
      return true
    }
  }
  return false
}