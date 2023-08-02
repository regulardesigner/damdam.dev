---
title: First note for myself.
description: A small note for myself. Maybe this material end up has an article 🤷🏻‍♂️.
category: note
---

## A good note taking can make your life easier!

I use a notebook every day to take notes. I can't remember what I did the day before, so I write it down. All day long I am gathering informations that is useless and impossible to remember. So I write it down in my notebook and you should do the same.

```js{1,3-5}[server.js]
const http = require('http')
const bodyParser = require('body-parser')

http.createServer((req, res) => {
  bodyParser.parse(req, (error, body) => {
    res.end(body)
  })
}).listen(3000)
```
