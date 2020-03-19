# Piio component for React
---

Fully optimized images for each visitor, device and browser.

- Piio isn’t an image compressor. We deliver pixel-perfect images for each visitor based on their browser and device, in real time.
- Piio is plug and play.
- You get faster page load times without the hassle of running batch processing scripts

More info at https://piio.co/
Register at https://app.piio.co/register

## Getting started
---

#### NPM Installation
```
npm install piio-image-react
```
#### Manual Installation

- Download the directory Piio-image cotaining `piioElement.js`
- Load `piioElement.js` in your code

### Import component

Add the following line to import the component:
```html
import PiioElement from '../components/piioElement'
```

### Set up Piio on your code

You need to insert Piio's script at the end of your html and before all the other JS files:
```html
<script src="//pcdn.piiojs.com/[domain key]/image.min.js"></script>
```
Replace `domain key` with the Piio Domain Key you get from your dashboard at https://app.piio.co/

#### Preload and Preconnect

In order to improve connection times you can include inside your HTML Head section a link to preconnect to `pcdn.piiojs.com` and preload of Piio’s JS script.

With this step you can **optimize delivery time** of Piio’s script, **deliver content faster** and give a **better user experience**.

```html
<link rel="preconnect"
  href="//pcdn.piiojs.com">

<link rel="preload"
  as="script"
  href="//pcdn.piiojs.com/[domain key]/image.min.js">
  ```

### Usage


#### Image tag

Add the PiioElement with the `tag` attribute set as `img` and your image as `path`

```html
   <PiioElement tag="img" path="https://piio.co/img/whypiio-hero@3x.png" alt="Piio Element" class="example-class"></PiioElement>
```

#### Background image

Add the Piio element with the `tag` attribute set as the element you want to have the background applied. You can add any other attributes and content to the element as it will be added.

Here is an example using an anchor tag:
```html
<PiioElement tag="a" path="https://piio.co/img/whypiio-hero@3x.png" href="https://www.piio.co">
     Example content
</PiioElement>
```
---
For more settings check our Docs at https://docs.piio.co/
