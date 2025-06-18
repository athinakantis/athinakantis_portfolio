import { RouterProvider } from 'react-router-dom'
import { router } from './utils/routes'
import { ContentProvider } from './context/ContentProvider'

function App() {
  return (
    <ContentProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </ContentProvider>
  )
}

export default App
