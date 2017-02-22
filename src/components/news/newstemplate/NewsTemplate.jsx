import React, { Component, PropTypes } from 'react'
import './newstemplate.css'
import ReadMoreButton from './readmore/ReadMoreButton'

class NewsTemplate extends Component {
    render() {
        return (
            <div className="news-template">
                <h1>{this.props.title}</h1>
                Lorem ipsum dolor sit amet, esse definiebas eam ne. Mei eligendi indoctum eu, no iudico sanctus utroque mei. Homero recusabo at qui, quo no iriure eruditi maiestatis, vel malorum menandri intellegebat in. Viderer habemus sententiae ne mea, id rebum tation vituperata nec, ne odio omnis epicuri nam.
                <ReadMoreButton />
            </div>
        )
    }
}

NewsTemplate.propTypes = {
    title: PropTypes.string
}
export default NewsTemplate