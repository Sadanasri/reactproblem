import {Routes, Route} from "react-router-dom"
import Welcome from "./pages/Welcome"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Account from "./pages/Account"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  )
}

export default App