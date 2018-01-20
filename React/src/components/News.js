import React, {Component} from 'react';
import Header from './shared/Header';
class News extends Component{
    state = {
        loading: true,
        newsItems: []
    }

    componentDidMount() {
        fetch('/news')
            .then(res => res.json())
            .then(newsItems => this.setState({ newsItems }));
        this.setState({ loading: false })
    }
    render(){
        if (this.state.loading) {
            return   
        }
        return(
            <div>
                <Header signIn={false} />
                    <div>
                    <h2>SC2 News / Homepage</h2>
                    {this.state.newsItems.map(newsItem =>
                        <div key={newsItem.id}>{newsItem.title}</div>
                        )}
                </div>
            </div>
        );
    }
}

export default News;