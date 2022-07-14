
import './App.css'
import testImg from './assets/test/test.png'
import AButton ,{ButtonType,ButtonSize} from './components/AButton'
import Aimg from './components/AImg'
function App() {


  return (
    <div className="App">

      <div style={{display:'flex',justifyContent:'space-between'}}>
        Button
        <AButton
        onClick={()=>console.log('Hello AwesomeUI!')}
        disabled={true}
         >被disabled的按钮
         </AButton>
        <AButton 
        // btnType={ButtonType.Primary}
        size={ButtonSize.Huge}
        >
          我是大杯
        </AButton>
      </div>

      <div style={{display:'flex',justifyContent:'space-between'}}>
        <Aimg src={testImg}>

        </Aimg>
      </div>



    </div>
  )
}

export default App
