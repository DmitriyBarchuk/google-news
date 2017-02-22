import React, { Component } from 'react'
import './PagesStyle.css'

import News from '../components/news/News'
// import RightMenu from '../components/rightmenu/RightMenu'

class NewsSourcesPage extends Component {
    render() {
        return (
            <div className="news-source-page">
              <News />
            </div>
        )
    }
}

export default NewsSourcesPage
