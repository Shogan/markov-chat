# markov-chat

A simple Typescript project that takes a list of input chat messages and generates new messages using markov chains.

An input order (length of the n-gram) is used as part of the generation. By default this is set to the length of the input word + 1.

## Build

* yarn build

## Run example

Run **index.js** with one argument as the 'input word'. This should be some input that exists in the example-chat.txt messages.

* `node dist/tsc/index.js 'coffee'`

Example outputs using input 'coffee':

```
take coffee with no milk
I really love coffee while its still hot.
take coffee while its still hot.
take the coffee?
why put sugar in coffee when it keeps me awake.
why put sugar in coffee in the morning.
more coffee should arrive soon
```
