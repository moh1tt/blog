const Education = ({ degree, school, range, text1, text2 }) => {
  const bullets = [text1, text2].filter(Boolean)

  return (
    <div className="my-3">
      <div className="flex flex-row flex-wrap font-mono text-lg">
        <span className="text-gray-500 dark:text-gray-400">{degree}</span>
        <span className="text-gray-500 dark:text-gray-400">&nbsp;@&nbsp;</span>
        <span className="text-primary-color-500">{school}</span>
      </div>
      <div>
        <div className="p-1 font-mono text-sm text-gray-400 dark:text-gray-600">{range}</div>
        <div className="p-2">
          {bullets.map((text, i) => (
            <div key={i} className="flex flex-row">
              <div className="mr-2 text-lg text-primary-color-500"> &#8227;</div>
              <div className="text-gray-500 dark:text-gray-400">{text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="justify-center text-center text-2xl font-medium text-gray-200 dark:text-gray-600">
        &#126;&#126;&#126;
      </div>
    </div>
  )
}

export default Education
