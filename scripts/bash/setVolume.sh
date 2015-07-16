#!/bin/bash

amixer sset -D default 'Master' "$1\%"
#pactl "set-sink-volume" 0 "$1%"
