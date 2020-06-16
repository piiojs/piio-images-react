import React from 'react'
import styles from './styles.module.css'

function selectTag(tagName, path, content) {
  if ((tagName === 'img') || (tagName === 'source')) {
    return <data-piio class={styles.source} data-piio={path} src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
  } else {
    return <data-piio-bck class={styles.background} data-piio-bck={path}>{content}</data-piio-bck>
  }

}
export const PiioElement = ({ tag, path, content }) => {
  return selectTag(tag, path, content)
}
