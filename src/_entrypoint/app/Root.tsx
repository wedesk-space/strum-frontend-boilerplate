import { Home } from 'src/pages/Home'
import React, { } from 'react'

/**
 * Root component that cover rendering this application
 *
 * - <RootRoutes/> is the main component roots
 */
export default function Root() {
  return (
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  )
}
