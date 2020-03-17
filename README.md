 # Piio component for React

 Fully optimized images for each visitor, device and browser.

 - Piio isn’t an image compressor. We deliver pixel-perfect images for each visitor based on their browser and device, in real time.
 - Piio is plug and play.
 - You get faster page load times without the hassle of running batch processing scripts.

 ## Getting started

 ### Installation

 #### NPM Install
 ```
 npm install piio-image-react
 ```
 #### Manual Install

 - Download the directory Piio-image cotaining `piioElement.js`
 - Load `piioElement.js` in your code

 ### Import component

 Add the following line to import the component:
 ```
 import PiioElement from '../components/piioElement'
 ```
 ### Usage

 #### Image tag

 Add the PiioElement with the `tag` attribute set as `img` and your image as `path`

 ```
     <PiioElement tag="img" path="https://www.publitas.com/blog/holiday-inspiration-great-examples-of-guides-and-christmas-catalogs/header.jpg" alt="hola" class="clase"></PiioElement>
 ```

 #### Background image

 Add the Piio element with the `tag` attribute set as the element you want to have the background applied. You can add any other attributes and content to the element as it will be added.

 Here is an example using an anchor tag:
 ```
 <PiioElement tag="a" path="https://www.publitas.com/blog/holiday-inspiration-great-examples-of-guides-and-christmas-catalogs/header.jpg">
       Example content
  </PiioElement>
 ```
