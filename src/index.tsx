import 'bulmaswatch/superhero/bulmaswatch.min.css'
import { createRoot } from 'react-dom/client'
import TextEditor from './components/text-editor'
import { Provider } from 'react-redux'
import { store } from './state'

const App = () => {
  return (
    <div>
      <TextEditor />
    </div>
  )
}

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
