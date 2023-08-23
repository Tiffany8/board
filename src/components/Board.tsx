import { useState } from 'react'
import RichTextCard from './RichTextCard'

export interface BoardProps {
  rows: number
  columns: number
}

const Board: React.FC<BoardProps> = ({ rows, columns }): JSX.Element => {
  const emptyBoard: string[][] = Array.from({ length: rows }, () =>
    Array(columns).fill('')
  )

  const [board, setBoard] = useState(emptyBoard)

  const handleClick = (rowIndex: number, columnIndex: number) => {
    console.log(`Cell clicked at row: ${rowIndex}, column: ${columnIndex}`)
    if (board[rowIndex][columnIndex] === '') {
      const newBoard = [...board]
      newBoard[rowIndex][columnIndex] = 'New Card'
      setBoard(newBoard)
    }
  }

  return (
    <div className="grid h-full w-full grid-flow-row-dense grid-cols-4 gap-4 rounded-md p-4 shadow-xl">
      {board.map((row, rowIndex) =>
        row.map((cell, columnIndex) => (
          <div
            onClick={() => handleClick(rowIndex, columnIndex)}
            key={`${rowIndex}-${columnIndex}`}
            className="m-2 h-80 w-80"
          >
            {cell && (
              <RichTextCard content={cell} title={''} className="bg-white" />
            )}
          </div>
        ))
      )}
    </div>
  )
}

export default Board
