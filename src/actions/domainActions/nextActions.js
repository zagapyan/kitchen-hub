export const TRIGGER_NEXT_ACTION = 'NEXT_ACTION'
export function triggerNextAction(){
  return{
    type: TRIGGER_NEXT_ACTION,
    triggerNextAction: true
  }
}

export const HOLD_NEXT_ACTION = 'HOLD_NEXT_ACTION'
export function holdNextAction(){
  return{
    type: HOLD_NEXT_ACTION,
    triggerNextAction: false
  }
}