export const hey = (message) => {
    let arrayMessage = message.split("")
    if (arrayMessage[message.length-1] === '?') {
      return 'Sure.';
    }
    if (message == message.toUpperCase()) {
      return 'Whoa, chill out!'
    }
  };
  