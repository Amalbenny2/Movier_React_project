import React, { createContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav1 from './Nav1'
import Movies from './Movies';
import Popular from './Popular';
import Comedy from './Comedy';
import Latest from './Latest';
export const FirstContext = createContext();

function Main() {
    const movie=[
        {Id:1,Name:"BEST NEW MOVIES",Image:"https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg"},
        {Id:2,Name:"ROMANTIC MOVIES",Image:"https://cdn.wallpapersafari.com/92/56/O3IDWP.jpg"},
        {Id:3,Name:"HORROR MOVIES",Image:"https://images-geeknative-com.exactdn.com/wp-content/uploads/2020/10/09231518/horror-movie-villians.jpg"},
        {Id:4,Name:"FANTASY MOVIES",Image:"https://wallpapercave.com/wp/wp1945939.jpg"},
        {Id:5,Name:"THRILLER MOVIE",Image:"https://payload.cargocollective.com/1/11/367710/13568488/MOVIECLASSICSerikweb_2500_1340_c.jpg"},
        {Id:6,Name:"ANIME MOVIES",Image:"http://www.heyuguys.com/images/2013/06/Epic.jpg"},
        {Id:7,Name:"ZOMBIE MOVIES",Image:"http://cdn.wallpapersafari.com/42/44/izCfPK.jpg"},
        {Id:8,Name:"BEST MALAYALAM MOVIES",Image:"https://timesofindia.indiatimes.com/photo/msid-105864081,imgsize-129643.cms"},
        {Id:11,Name:"MOVIE SERIES",Image:"https://getwallpapers.com/wallpaper/full/6/8/4/47337.jpg"},
        {Id:12,Name:"HUMOROUS MOVIES",Image:"https://wallpapercave.com/wp/wp1945912.jpg"},
        {Id:13,Name:"PARALLEL UNIVERSE MOVIES",Image:"https://images.hdqwalls.com/download/the-batman-2020-movie-poster-5k-gg-2560x1600.jpg"},
    ]
  return (
    <div>
      <FirstContext.Provider value={{ movie }}>
        <BrowserRouter>
          <Nav1 />
          <Routes>
            <Route path='/movies/' element={<Movies />} />
            <Route path='/popular' element={<Popular />} />
            <Route path='/comedy' element={<Comedy />} />
            <Route path='/latest' element={<Latest />} />
          </Routes>
        </BrowserRouter>
      </FirstContext.Provider>
    </div>
  );
}

export default Main;