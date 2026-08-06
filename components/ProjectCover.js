const GRADIENTS = [
  'from-primary-500 via-fuchsia-500 to-purple-600',
  'from-indigo-500 via-blue-500 to-cyan-400',
  'from-emerald-400 via-teal-500 to-cyan-600',
  'from-amber-400 via-orange-500 to-primary-500',
  'from-purple-600 via-fuchsia-500 to-pink-500',
  'from-blue-600 via-indigo-500 to-purple-600',
]

const ProjectCover = ({ title, index = 0 }) => {
  const gradient = GRADIENTS[index % GRADIENTS.length]
  const initial = title?.trim().charAt(0).toUpperCase() || '•'
  const patternId = `cover-dots-${index}`

  return (
    <div className={`relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br ${gradient}`}>
      <svg className="absolute inset-0 h-full w-full opacity-25" aria-hidden="true">
        <defs>
          <pattern id={patternId} width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      <span className="absolute -bottom-8 -right-3 select-none text-[8rem] font-black leading-none text-white/10">
        {initial}
      </span>
    </div>
  )
}

export default ProjectCover
