export const value = (colors) => {
  let build = []

  for (let i = 0; i < colors.length; i++) {
    for (let j = 0; j < COLORS.length; j++) {
      if (colors[i] === COLORS[j]) {
        build.push(j)
      }
    }
  }

  return build.reduce((a, b) => {
    return Number(a + '' + b)
  })
}

export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
