import React, {Component} from 'react';
import Loader from 'react-loader';
class News extends Component{
    state = {
        loading: true,
        newsItems: []
    }

    componentDidMount() {
        // Simulate async call
        setTimeout(() => {
            this.setState({loading: false});
        },2000);

        fetch('/news')
            .then(res => res.json())
            .then(newsItems => this.setState({ newsItems }));

    }

    render(){
        if (this.state.loading) {
            return(
                <div>
                    <Loader loaded = {!this.state.loading}/>
                </div>
            );
        }
        return(
            <div>
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
