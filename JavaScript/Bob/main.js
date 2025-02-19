export const hey = (message) => {
    let arrayMessage = message.split("")
    if (arrayMessage[message.length-1] === '?') {
      return 'Sure.';
    }
    if (arrayMessage.every(char => char === char.toUpperCase())) {
      if (arrayMessage[message.length-1] !== '?') {
        return 'Whoa, chill out!'
      }
      else {
        return "Calm down, I know what I'm doing!"
      }
    }
    
    return 'Whatever.'
  };
  