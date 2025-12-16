import Navbar from "./components/Navbar"

const App = () => {
  return (
    <main className="w-full min-h-screen py-6 px-4" style={{ backgroundImage: 'var(--color-Light-Gradient)' }}>
      <header>
        <Navbar />
      </header>
    </main>
  )
}

export default App