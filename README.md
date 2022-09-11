# statusW-serverless

This project aims to display the online status of a selected subset of Twitch streamers

[View App](http://statusw.taco.fyi/)

[Original implementation](https://github.com/kianga722/statusw) with webhooks, WebSockets, and Node server hosted on free Heroku dyno

![screenshot](https://github.com/kianga722/statusw-serverless/blob/master/screenshot.png)

## Summary

- Removed webhook / WebSockets functionality to deal with Heroku plan change
- App checks for the online status of streamers
- Motivation was to develop skills in React, Express, and CSS Grid

## Future Improvements

- Figure out more efficient way of dealing with iframe loading
