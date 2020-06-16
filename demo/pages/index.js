import Head from 'next/head'
import PiioElement from '../components/piioElement'

export default ()=>(
  <div>
    <Head>
      <link rel="preconnect" href="https://piio.co" />
      <link rel="preconnect" href="//pcdn.piiojs.com" />
      <link rel="preconnect" href="//piio.co" />
      <link rel="preconnect" href="//www.googletagmanager.com" />
      <link rel="preload" as="script" href="//js.piio.co/piio/piio.min.js" />
    </Head>
    <script language="javascript">
      (function(i,m,a,g,e) {
          e = i.getElementsByTagName(m)[0], (g = i.createElement(m)).src = "//pcdn.piiojs.com/"+a+"/image.min.js",
          g.onerror = function() {
              (g = i.createElement(m)).src = "https://fs.piio.co/image-failover.min.js",
              e.parentNode.insertBefore(g, e);
          }, e.parentNode.insertBefore(g, e);
      }(document, "script", "demo"));
    </script>
    <PiioElement tag="img" path="https://www.publitas.com/blog/holiday-inspiration-great-examples-of-guides-and-christmas-catalogs/header.jpg" alt="hola" class="clase"></PiioElement>
    <PiioElement tag="a" path="https://www.publitas.com/blog/holiday-inspiration-great-examples-of-guides-and-christmas-catalogs/header.jpg">
      hola
    </PiioElement>
    <script src="/app.min.js" async></script>
  </div>
)
