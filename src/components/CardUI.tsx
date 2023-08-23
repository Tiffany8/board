export interface CardUIProps {
  children: React.ReactNode
  title: string
  className?: string
}

const CardUI: React.FC<CardUIProps> = ({
  children,
  title,
  className
}): JSX.Element => {
  return (
    <div className={`${className} card h-full w-full shadow-xl`}>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {children}
      </div>
    </div>
  )
}

export default CardUI
