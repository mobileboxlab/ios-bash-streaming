
## What?

In short: iOS screen mirroring in five lines of bash.

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
websocketd --port=8080 ./smile.sh DEVICE-ID
```

Replace in **smile.html**  with the **IP** and **PORT** where websocketd server is running. 


Open the **smile.html** file. You will see the connected device


## Frequently Asked Questions

**Is this for real?**

Yes. It’s not big, and it’s not clever but this is a real iOS screen mirroring in five lines of bash.

**How do I install it?**

You don't install it. Copy the file *smile.sh* to wherever you want and run it.

**Does it support websockets?**

Yes.

**Limitations?**

Does not do a high framerate (yet?)

**Does it work on Windows?**

Mmm... maybe.


## Contribution

Any ideas are welcome. Feel free to submit any issues or pull requests.

---
**ios-bash-streaming** is developed and maintained by [Mobilebox](http://mobileboxlab.com) team.

