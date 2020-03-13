# Piio Image component

Para la instalacion es necesario hacer npm install piio

El componente abarca el uso de imagenes por tag img y el uso de imagenes como background

Lo primero es importar el componente
import PiioElement from '../components/piioElement'

Luego usar los componentes, en caso de ser img la tag seria como por ejemplo
<PiioElement tag="img" path="https://www.publitas.com/blog/holiday-inspiration-great-examples-of-guides-and-christmas-catalogs/header.jpg" alt="hola" class="clase"></PiioElement>

Tambien se puede utilizar como background seleccionando la tag y entre tags el contenido que se desea poner
<PiioElement tag="a" path="https://www.publitas.com/blog/holiday-inspiration-great-examples-of-guides-and-christmas-catalogs/header.jpg">
      hola
 </PiioElement>
