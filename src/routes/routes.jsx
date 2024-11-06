import {Route, Routes} from 'react-router-dom'

import Home from '../containers/Home'
import Movies from '../containers/Movies'
import Series from '../containers/Series'
import DefaultLayout from '../layout/DefaultLayout'


function Router(){

    return(
        <Routes>
            <Route element={< DefaultLayout />}>
            <Route path='/' element={<Home />}/>
            <Route path='/filmes' element={<Movies />}/>
            </Route>
            <Route path='/series' element={<Series />}/>
           
        </Routes>

       
    )
}

export default Router