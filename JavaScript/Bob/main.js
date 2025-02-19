const isMessageQuestion = (message) => message.endsWith("?");
const isMessageUpperCase = (message) =>
  !/[a-z]/.test(message) && /[A-Z]/.test(message);
const isMessageBlank = (message) => message === "";


export const hey = (message) => {
  const messageTrim = message.trim();
  if (isMessageQuestion(messageTrim) && isMessageUpperCase(messageTrim)) {
    return "Calm down, I know what I'm doing!";
  }
  if (isMessageQuestion(messageTrim)) {
    return "Sure.";
  }
  if (isMessageBlank(messageTrim)) {
    return "Fine. Be that way!";
  }
  if (isMessageUpperCase(messageTrim)) {
    return "Whoa, chill out!";
  }
  
  return "Whatever.";
  
};