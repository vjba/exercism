export const colorCode = (colorString) => {

  let color = colorString.toLowerCase()

  for (let i = 0; i < COLORS.length; i++) {
    if (COLORS[i] === color) {
      return i
    }
  }
}

export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
