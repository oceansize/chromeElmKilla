# Elm Killa (for Chrome)

TL;DR: This is a super simple Chrome plugin that hides the elm debugger launcher, lest you need to see something underneath it.

[elm](https://elm-lang.org/) is a functional programming language that compiles down to JavaScript. We use it extensively at [carwow](https://carwow.co.uk), and as such, we ran across an issue:

#### elm debugger launcher

![elm debugger launcher](/readme-images/debugger-launcher.png)

In development mode when using elm, this div is overlaid on top of your app in the bottom-right corner; clicking on it launches the elm debugger window:

#### elm debugger window

![elm debugger window](/readme-images/debugger-window.png)

This is great until you need to see underneath it. Then you must dig through the DOM elements in your browser's development tools and find the offending element so you can either delete it, or hide it.

Unfortunately, at the time of writing this element does not ship with an identifiable `class` or `id` attribute, making it rather tricky to track down. Added to the complication is that since it is possible to have multiple instances of an elm app running, the debugger launcher can have multiple instances of itself stacked, so you have to isolate them all before dealing with them.

If this bothers you, then you need to meet **elmKilla:**

![elmKilla logo](/readme-images/elmKilla-logo.png)

**elmKilla** will happily scour your DOM and remove the offending element (it actually just adds `display: none`, so you can have elmKilla resurrect its victims at the touch of a button.

#### elmKilla deactivated:

![elmKilla in-situ — deactivated](/readme-images/in-situ-deactivated.png)


#### elmKilla activated:

![elmKilla in-situ — activated](/readme-images/in-situ-activated.png)

### Installation

Currently elmKilla is available for the following platforms:

- [Link to Chrome Extension (Chrome Web
Store)](https://chrome.google.com/webstore/detail/elm-killa/imncilbiiemenecndahiafoafbiicgpl)
- [Link to Firefox Add-on (Mozilla Add-on store)](https://addons.mozilla.org/en-GB/firefox/addon/elm-killa/)

