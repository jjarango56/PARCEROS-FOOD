import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {router} from './routes/AppRoutes.tsx'
import { RouterProvider } from 'react-router-dom'
import { DesignProvider } from './provider/DesignProvider'
import { ThemeProvider } from './provider/ThemeProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <DesignProvider>
     <RouterProvider router={router} />
    </DesignProvider>
    </ThemeProvider>
 
  </StrictMode>,
)
