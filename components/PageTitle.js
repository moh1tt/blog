export default function PageTitle({ children }) {
  return (
    <h1 className="font-mono text-2xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-4xl">
      {children}
    </h1>
  )
}
