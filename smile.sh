#!/bin/sh

while [ true ]; do
	idevicescreenshot -u $1 $1.png  > /dev/null 2>&1
	magick convert $1.png -resize 50% $1.jpg
	echo $(cat $1.jpg | base64)
done
