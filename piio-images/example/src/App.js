import React from 'react'

import { PiioElement, PiioHeader } from 'piio-images'
import 'piio-images/dist/index.css'

const App = () => {
  return <div>
  <PiioHeader domainKey="demo"/>
  <PiioElement tag="img" path="https://secureservercdn.net/198.71.233.106/w4y.80f.myftpupload.com/wp-content/uploads/2020/02/backpack-desktop.jpg" />
  <PiioElement tag="div" path="https://secureservercdn.net/198.71.233.106/w4y.80f.myftpupload.com/wp-content/uploads/2020/02/backpack-desktop.jpg" content="hola" />
  </div>
}

export default App
