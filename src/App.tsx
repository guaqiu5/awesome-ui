
import './App.css'
import Button ,{ButtonType,ButtonSize} from './components/Button'
function App() {


  return (
    <div className="App">
      <div>
        Button
        <Button>哈哈哈哈</Button>
        <Button btnType={ButtonType.Primary}>呃呃呃</Button>
      </div>
    </div>
  )
}

export default App
