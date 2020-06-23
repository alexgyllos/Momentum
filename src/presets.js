import cartographer from './assets/cartographer.png'

export const diveWithin = {
  type: 'circle',
  shapeCoordinates: [
      [ 330, 160, 120 ],
      [ 680, 160, 120 ],
      [ 220, 420, 120 ],
      [ 790, 420, 120 ]
  ],
  colour: 'rgba(255, 95, 109, 0.8)',
  pattern: cartographer
}

export const newPreset = {
  type: 'circle',
  shapeCoordinates: [
      [ 330, 160, 120 ],
      [ 680, 160, 120 ],
      [ 220, 420, 120 ],
      [ 790, 420, 120 ]
  ],
  colour: 'rgba(255, 95, 109, 0.8)',
  pattern: cartographer

}



export const diveWithout = {
  type: 'square',
  shapeCoordinates: [
    [90, 40, 280, 280],
    [620, 40, 280, 280],
    [90, 350, 280, 280],
    [620, 350, 280, 280]
    // [ 330, 160, 120 ],
    // [ 680, 160, 120 ],
    // [ 220, 420, 120 ],
    // [ 790, 420, 120 ]
  ],
  colour: 'rgba(255, 195, 113, 0.8)'
  // pattern: cartographer
}
