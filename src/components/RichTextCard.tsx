import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import CardUI from './CardUI'

export interface RichTextCardProps {
  content: string
  title: string
  className?: string
}

const RichTextCard: React.FC<RichTextCardProps> = ({
  content,
  title,
  className
}): JSX.Element => {
  return (
    <CardUI title={title} className={className}>
      <ReactQuill value={content} readOnly={false} theme={'snow'} />
    </CardUI>
  )
}

export default RichTextCard
