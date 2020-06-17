import React from 'react'
import styles from './styles.module.css'

function selectTag(tagName, path, content) {
  if (tagName === 'img') {
    return <img class={styles.source} data-piio={path} src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
  }else if (tagName === 'source'){
    return <img class={styles.source} data-piio={path} src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
  } else {
    return <div class={styles.background} data-piio-bck={path}>{content}</div>
  }

}
export const Element = ({ tag, path, content }) => {
  return selectTag(tag, path, content)
}
