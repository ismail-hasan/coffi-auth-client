import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import UpdateCoffi from './Components/UpdateCoffi.jsx'
import AddCoffi from './Components/AddCoffi.jsx'
import Login from './Components/Login.jsx'
import SignIn from './Components/SignIn.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import Users from './Components/Users.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    loader: () => fetch('http://localhost:3000/coffi')

  },
  {
    path: '/addcoffi',
    element: <AddCoffi></AddCoffi>
  },
  {
    path: '/updatecoffi/:id',
    element: <UpdateCoffi></UpdateCoffi>,
    loader: ({ params }) => fetch(`http://localhost:3000/coffi/${params.id}`)
  },
  {
    path: "login",
    element: <Login></Login>
  },
  {
    path: "signup",
    element: <SignIn></SignIn>
  },
  {
    path: "users",
    element: <Users></Users>,
    loader: () => fetch("http://localhost:3000/users")
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
)
