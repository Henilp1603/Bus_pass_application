
import './App.css'
import FinalResultSection from './components/FinalResultSection/FinalResultSection'
import HomeSection from './components/HomeSection/HomeSection'
import LoginSection from './components/LoginSection/LoginSection'
import NavB from './components/NavB'
import PassFileForm from './components/PassFrom/PassFileForm'
import PassFrom from './components/PassFrom/PassFrom'
import PaymentSuccessPage from './components/PaymentSuccessPage/PaymentSuccessPage'
import SignupSection from './components/SignupSection/SignupSection'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  

  return (
    <>
      <Router>
        <NavB/>
        <Routes>
          <Route path="/" element={<HomeSection/>} />
          <Route path='/signin' element={<LoginSection/>} />
          <Route path='/signup' element={<SignupSection/>} />
          <Route path='/application' element={<PassFrom/>} />
          <Route path='/application-result' element={<FinalResultSection/>} />
          <Route path='/payment-success' element={<PaymentSuccessPage/>} />
          <Route path='/pass-from' element={<PassFileForm/>} />
        </Routes>
          {/* <FinalResultSection/> */}
          {/* <PaymentSuccessPage/> */}
      </Router>
    </>
  )
}

export default App
