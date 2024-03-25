import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryclient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 60 * 5 } },
})

import {
  About,
  HomeLayout,
  Landing,
  NewsLetter,
  Error,
  SingleError,
  Drink,
} from './pages/index.js'
import { loader as landingLoader } from './pages/Landing.jsx'
import { loader as drinkLoader } from './pages/Drink.jsx'

import { action as newsletterAction } from './pages/NewsLetter.jsx'
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<HomeLayout />}
        errorElement={<Error />}
        children={[
          <Route
            index={true}
            element={<Landing />}
            loader={landingLoader(queryclient)}
            key={1}
            errorElement={<SingleError />}
          />,
          <Route
            path="drink/:yardsId"
            element={<Drink />}
            loader={drinkLoader(queryclient)}
            key={4}
            errorElement={<SingleError />}
          />,
          <Route path="about" element={<About />} key={2} />,
          <Route
            path="newsletter"
            element={<NewsLetter />}
            action={newsletterAction}
            key={3}
          />,
        ]}
      />
    )
  )
  // {
  //   path: '/',
  //   element: <HomeLayout />,
  //   errorElement: <Error />,
  //   children: [
  //     {
  //       index: true,
  //       element: <Landing />,
  //     },
  //     {
  //       path: 'about',
  //       element: <About />,
  //     },
  //     {
  //       path: 'newsletter',
  //       element: <NewsLetter />,
  //     },
  //   ],
  // }

  return (
    <>
      <QueryClientProvider client={queryclient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}
export default App
