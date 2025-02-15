const title = import.meta.env.VITE_APP_TITLE
console.log(title)

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-3xl">{title}</div>
      </div>
    </>
  )
}

export default App
