import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
// import youtube from '../apis/youtube'; Tfis is if we use class component
import VideosList from './VideosList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
    const [selectVideo, setSelectVideo] = useState(null);
    const [videos, search] = useVideos('react js');

    useEffect(() => {
        setSelectVideo(videos[0]);
    }, [videos]);
    
    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectVideo} />
                    </div>
                    <div className="five wide column">
                        <VideosList 
                        //  THIS IS SAME AS BELLOW! onVideoSelect={(video) => setSelectVideo(video)}
                        onVideoSelect={setSelectVideo} 
                        videos={videos} />
                    </div>
                </div>
            </div>
        </div>
    )    
}

//==============Same with class app=============
// class App extends React.Component {
//     state = { videos: [], selectVideo: null };

//     componentDidMount() {
//         this.onSearchTermSubmit('react js');
//     }
//     onSearchTermSubmit = async searchTerm => {
//         const response = await youtube.get('/search', {
//             params: {
//                 q: searchTerm
//             }
//         });

//         this.setState({ 
//             videos: response.data.items,
//             selectVideo: response.data.items[0]
//         })
//     };

//     onVideoSelect = video => {
//         this.setState({ selectVideo: video });
//     }

//     render(){
//         return(
//             <div className="ui container">
//                 <SearchBar onFormSubmit={this.onSearchTermSubmit} />
//                 <div className="ui grid">
//                     <div className="ui row">
//                         <div className="eleven wide column">
//                             <VideoDetail video={this.state.selectVideo} />
//                         </div>
//                         <div className="five wide column">
//                             <VideosList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         ) 
//     }
// }

export default App;