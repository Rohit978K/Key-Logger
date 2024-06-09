let keyLoggerOn = false;

function startKeyLogger() {
  keyLoggerOn = true;

  const startBtn = document.getElementById('start')
  startBtn.disabled = true;

  const stopBtn = document.getElementById('stop')
  stopBtn.disabled = false;

}

function stopKeyLogger() {
  keyLoggerOn = false;

  const startBtn = document.getElementById('start')
  startBtn.disabled = false;

  const stopBtn = document.getElementById('stop')
  stopBtn.disabled = true;
}


document.addEventListener('keydown', (event) => {
  if (keyLoggerOn)
    onKeyboardActivity(event, handleKeyDown)
})


document.addEventListener('keyup', (event) => {
  if (keyLoggerOn)
    onKeyboardActivity(event, handleKeyUp)
})

function onKeyboardActivity(keyboardEvent, callback) {
  const keyNameElem = document.getElementById('key-name');

  const keyStatusElem = document.getElementById('key-status');

  const keyVal = keyboardEvent.key == " " ? "Spacebar" : keyboardEvent.key; 

  callback(keyNameElem, keyStatusElem, keyVal)
}

function handleKeyDown(keyNameElem, keyStatusElem, keyVal) {
  keyNameElem.textContent = `Key ${keyVal} is pressed.`
  keyStatusElem.textContent = 'Key is down.'
}

function handleKeyUp(keyNameElem, keyStatusElem, keyVal) {
  keyNameElem.textContent = `Key ${keyVal} is released.`
  keyStatusElem.textContent = 'Key is up.'
}