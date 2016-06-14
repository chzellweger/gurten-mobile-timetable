// turn on swipe-events

// min x delta swipe for horizontal swipe
const MIN_X = 100;
// max y delta for horizontal swipe
const MAX_Y = 50;

const eventObj = {
  startX: 0,
  startY: 0,
  endX: 0,
  endY: 0
};

let callback;

function handleStart(e) {
  // assuming single touch, e.touches is an Array of all touches,
  // but with single touch there is only one element
  const touch = e.touches[0];
  eventObj.startX = touch.screenX;
  eventObj.startY = touch.screenY;
}

function handleMove(e) {
  const touch = e.touches[0];
  eventObj.endX = touch.screenX;
  eventObj.endY = touch.screenY;
}

function handleEnd() {
  let code;
  const xDelta = eventObj.startX - eventObj.endX;
  // check to see if the delta of X is great enough to trigger a swipe gesture
  // also see if the Y delta wasn’t too drastic to be considered horizontal
  if (Math.abs(xDelta) > MIN_X && Math.abs(eventObj.startY - eventObj.endY) < MAX_Y) {
    // acceptable swipe, now if it delta is negative, it’s a left swipe, otherwise right
    code = xDelta < 0 ? 'left' : 'right';
  }
  // trigger callback
  if (callback && code) {
    callback(code);
  }
  // reset eventObj
  eventObj.startX = 0;
  eventObj.startY = 0;
  eventObj.endX = 0;
  eventObj.endY = 0;
}

function swipeInit(el, action) {
  el.addEventListener('touchstart', handleStart, false);
  el.addEventListener('touchmove', handleMove, false);
  el.addEventListener('touchend', handleEnd, false);
  callback = action;
}

function swipeKill(el) {
  el.removeEventListener('touchstart', handleStart);
  el.removeEventListener('touchmove', handleMove);
  el.removeEventListener('touchend', handleEnd);
  callback = undefined;
}

export { swipeInit, swipeKill };