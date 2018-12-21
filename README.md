# Droptumble

A Dropbox-powered image firehose

A crude answer to [a question posed on Twitter by Mark Hurrell](https://twitter.com/markhurrell/status/1076086981124345856):

```
"I've been thinking about self-hosting my photo tumblr, but I have it set up with dropbox so I when I drop a photo into a dropbox folder it publishes it automatically... ideas how I could recreate that workflow?"
```

[My response](https://twitter.com/pgchamberlin/status/1076089700383948801)

```
You can run Dropbox on Linux. So you could run it on a server like a Linode instance, sync'ing a folder exposed by a web server. You'd then need to write a web page which displayed whatever images are in that directory.
```

Which is what this code helps to do.
