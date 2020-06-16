import Head from 'next/head'
import PiioElement from '../components/piio/piioElement'
import Piio from '../components/piio/piio'
export default ()=>(

  <div>
    <h1>Piio images for Vue.js</h1>
    <h2>Image tag example</h2>
    <PiioElement path="https://secureservercdn.net/198.71.233.106/w4y.80f.myftpupload.com/wp-content/uploads/2020/02/backpack-desktop.jpg" tag="img">
    </PiioElement>
    <PiioElement path="https://secureservercdn.net/198.71.233.106/w4y.80f.myftpupload.com/wp-content/uploads/2020/02/backpack-desktop.jpg" tag="IMG">
    </PiioElement>
    <h2>Background example</h2>
    <PiioElement path="https://secureservercdn.net/198.71.233.106/w4y.80f.myftpupload.com/wp-content/uploads/2020/02/backpack-desktop.jpg" tag="div">
      <h1>Your website faster,your images sharper.</h1>
    </PiioElement>

    <h2>Picture tag with multiple sources example</h2>
    <picture>
      <PiioElement path="https://secureservercdn.net/198.71.233.106/w4y.80f.myftpupload.com/wp-content/uploads/2020/02/backpack-desktop.jpg" tag="source" media="(min-width:969px)">
      </PiioElement>
      <PiioElement path="https://secureservercdn.net/198.71.233.106/w4y.80f.myftpupload.com/wp-content/uploads/2020/02/backpack-mobile.jpg" tag="source" media="(max-width:969px)">
      </PiioElement>
      <PiioElement path="https://secureservercdn.net/198.71.233.106/w4y.80f.myftpupload.com/wp-content/uploads/2020/02/backpack-mobile.jpg" tag="img">
      </PiioElement>
    </picture>
    <Piio domainKey="demo"></Piio>

  </div>
)
