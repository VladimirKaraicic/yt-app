import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async searchTerm => {
        const response = await youtube.get('/search', {
            params: {
                q: searchTerm
            }
        });

        setVideos(response.data.items);
    };

   return [videos, search]; 
   // return { videos, search };This is more comen in js community, and array is react convenction

};

export default useVideos;