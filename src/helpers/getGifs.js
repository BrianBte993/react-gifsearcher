export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=v72PBNBsYRdmpW1ycEpLlSMtwrS71DfI&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.fixed_height_small.url,
        }
    });

    console.log(data);
    return gifs
    
    }