import React from 'react'
import styles from './styles.module.css'

function selectTag(tagName, path, content,className) {
  if (tagName === 'img') {
    return <img className={className} data-piio={path} src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
  }else if (tagName === 'source'){
    return <source className={className} data-piio={path} src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
  } else {
    return <div tag={tagName} className={className} data-piio-bck={path}>{content}</div>
  }

}
export const Element = ({ tag, path, content, className }) => {
  return selectTag(tag, path, content, className)
}
