import * as markov from './markov';

export const entryTest = async (inputWord: string): Promise<void> => {

  const order = inputWord.length + 1;
  console.log('order: ' + order);
  const test = new markov.MarkovChat(order, __dirname + '/example-chat.txt', inputWord);
  const result = test.generateChatMsg();
  console.log(result || `no chat message could be generated using your input of '${inputWord}'`);
}