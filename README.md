# **Frost**

Frost is an app for [Cozy Cloud](http://cozy.io) that lets you take snapshots of webpages so you can keep them around forever.

*Introduction en français [ici](https://forum.cozy.io/t/frost-application/2123)*

![Frost screenshot](https://forum.cozy.io/uploads/default/original/1X/94599e30da39e09b29456ae3ca8527de90ee0a83.png)

Link rot is a huge problem on the web, and it's especially painful when one of your favorite pages just vanishes. Services like the [Wayback Machine](https://archive.org/web/) or [Pinboard](https://pinboard.in/) are great, but they rely on someone having money to maintain the service and in the end, you still don't own your data. A personnal cloud is therefor the ideal place to store snapshots of sites you care about, and this is what Frost does.

The [Snowflake icon](https://thenounproject.com/search/?q=freeze&i=214113) is by Mihael Tomic from the Noun Project.
The [header's background](https://unsplash.com/photos/MvftAbKK9Ek) is a photo from [Sergei Akulitch](https://unsplash.com/sakulich).


## What is Cozy?

![Cozy Logo](https://raw.github.com/mycozycloud/cozy-setup/gh-pages/assets/images/happycloud.png)

[Cozy](http://cozy.io) is a platform that brings all your web services in the
same private space.  With it, your web apps and your devices can share data
easily, providing you
with a new experience. You can install Cozy on your own hardware where no one
profiles you.

## Community

You can reach the Cozy Community by:

* Chatting with us on IRC #cozycloud on irc.freenode.net
* Posting on our [Forum](https://forum.cozy.io/)
* Posting issues on the [Github repos](https://github.com/cozy/)
* Mentioning us on [Twitter](http://twitter.com/mycozycloud)

# Contributing

This is a side project and while there are ton of possible features, I'm not sure I'll ever get around creating them all. But outside contributions are very welcome.

I'll update this guide later, but basically:

- The server is a node app. Run `node server` to start it. You need the cozy dev stack installed on your machine.
- The client part is written wth [Aurelia](http://aurelia.io/), because I wanted to try it. The sources are for the js are in the `src` folder. You'll need to run `gulp watch` or `gulp bundle` in the root folder to run the file processing. The main html and css files are in the `client` dir. You also need jspm installed. Like I said, I'll write a proper guide at some point.
