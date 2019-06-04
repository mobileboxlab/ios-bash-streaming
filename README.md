![Bryan](http://open.mobileboxlab.com/img/ios-screen.gif)

___
iOS screen mirroring through a socket interface for streaming real time screen capture data out of iOS devices.

![Alt Text](https://github.com/mobileboxlab/ios-bash-streaming/blob/master/smile.gif?raw=true)



## Requirements

1. bash, any recent version should work
2. Install [imagemagick](http://macappstore.org/imagemagick/)
3. Install [websocketd](https://github.com/joewalnes/websocketd)
4. Install [libimobiledevice](http://macappstore.org/libimobiledevice/)
5. [Lightning cable](https://en.wikipedia.org/wiki/Lightning_(connector))

## Getting started

```bash
chmod +x smile.sh
```

Check all available devices:

```bash
instruments -s devices
```

Run the below command to start the service (you need to provide the device id):

```bash
websocketd --port=9231 --staticdir=web sh smile.sh DEVICE-ID
```

Go to [http://127.0.0.1:9231/](http://127.0.0.1:9231/) You will see the connected device.

## Share Your Screen with Others

Optionally you can share your screen with others through [Serveo](https://serveo.net) that expose the local server to the internet without installation, no signup and free!

Try it! Copy and paste this into your terminal:

```bash
ssh -R 80:localhost:9231 serveo.net
```

The **-R** option instructs your SSH client to request port forwarding from the server and proxy requests to the specified host and port (usually localhost). A subdomain of serveo.net will be assigned to forward HTTP traffic.

## Frequently Asked Questions

**Is this for real?**

Yes. It’s not big, and it’s not clever but this is a real iOS screen mirroring in five lines of bash.

**How do I install it?**

You don't install it.

**Does it support websockets?**

Yes.

**Limitations?**

Does not do a high framerate.

**Does it work on Windows?**

Mmm... maybe.


## Contribution

Any ideas are welcome. Feel free to submit any issues or pull requests.

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

---
**ios-bash-streaming** is developed and maintained by [Mobilebox](http://mobileboxlab.com) team.
