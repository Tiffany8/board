// Import the Slate editor factory.
import { useCallback, useState } from 'react'
import Board from './Board'

const App = () => {
  return (
    <div className="container m-4 h-screen w-full bg-primary ">
      <Board rows={4} columns={4} />
    </div>
  )
}

export default App
