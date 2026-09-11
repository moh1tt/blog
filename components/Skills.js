const Skills = ({ category, skills }) => {
  return (
    <div className="my-3">
      <div className="flex flex-row flex-wrap font-mono text-lg">
        <span className="text-primary-color-500">{category}</span>
      </div>
      <div className="flex flex-wrap gap-2 p-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md bg-gray-100 px-2 py-1 font-mono text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-400"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="justify-center text-center text-2xl font-medium text-gray-200 dark:text-gray-600">
        &#126;&#126;&#126;
      </div>
    </div>
  )
}

export default Skills
