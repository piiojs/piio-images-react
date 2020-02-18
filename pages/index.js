const Piio = (props)=>(
  <img data-piio={props.path} src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
)

export default ()=>(
  <div>
    <Piio path="./img/homebike02.jpg"/>
  </div>
)
