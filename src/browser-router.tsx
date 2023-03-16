import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import { JoinRoom } from './JoinRoom'
import { PlanningRoom } from './Room'
import { About } from './About'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<JoinRoom />} />
      <Route path='room/:roomId' element={<PlanningRoom />} />
      <Route path='about' element={<About />} />
    </Route>
  )
)
