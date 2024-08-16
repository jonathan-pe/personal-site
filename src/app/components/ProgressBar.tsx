export default function ProgressBar(progress: number) {
  return (
    <div className="overflow-hidden rounded-full bg-gray-200">
      <div style={{ width: `${progress}` }} className="h-2 rounded-full bg-primary" />
    </div>
  )
}
