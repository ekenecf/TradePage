import './App.css';
import Question from './components/Faq/Question';
import Contact from './components/Contacts/Contact';
import GetStarted from './components/Steps/GetStarted';
import { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom'
import SignUp from "./components/SignUp";
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import RestPassword from './components/RestPassword';
import Dashboard from './components/Dashboard/Dashboard';
import Private from './components/Private';
import EditProfile from './components/Dashboard/EditProfile';
import AboutCompany from './components/Dashboard/AboutCompany';
import Deposit from './components/Dashboard/Deposit';
import BitcoinDeposit from './components/Dashboard/BitcoinDeposit';
import RequestForm from './components/Dashboard/RequestForm';
import AboutPage from './components/AboutPage/AboutPage';
import AffiliatePage from './components/AffiliatePage/AffiliatePage';
import TradingPage from './components/TradingPage/TradingPage';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import Withdraw from './components/Dashboard/Withdraw';
import RequestWithDrawal from './components/Dashboard/RequestWithDrawal';
import RequestBitcoinWithdraw from './components/Dashboard/RequestBitcoinDeposit';
import DashboardFaq from './components/Dashboard/DashboardFaq';
import DashboardContactUs from './components/Dashboard/DashboardContactUs';
import DashboardPrivacy from './components/Dashboard/DashboardPrivacy';
import Teams from './components/TeamCondition/Contact';
import Update from "./components/Dashboard/UpdateUser"

function App() {
const [display, setDisplay] = useState(true)

  const toggle = () => setDisplay(false)
  const changeToggle = () => setDisplay(true)

  return (
      <HashRouter>
        {display? <Header/> : null}
        <Routes>
        <Route path="/" element={<LandingPage changeDisplay = {changeToggle}/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/affiliate" element={<AffiliatePage/>}/>
        <Route path="/trading" element={<TradingPage/>}/>
          <Route path='/login' element={<Login Display = {toggle}/>} />
          <Route path="/siginup" element={<SignUp Display = {toggle}/>} />
          <Route path="/questions" element={<Question />} />
            <Route path="/get_started" element={<GetStarted />} />
            <Route path="/contact" element={<Contact Display = {changeToggle}/>} />
            <Route path="/team" element={<Teams />} />
            <Route path="/forgotpassword" element={<ForgotPassword  Display = {toggle} />} />
            <Route path="/restLink/:userid/:tokenid" element={<RestPassword Display = {toggle} />} />
          <Route element={<Private />}>
            <Route exact path="/dashboard/:userid" element={<Dashboard Display = {toggle}/>} />
            <Route path="/edit/:userid" element={<EditProfile Display = {toggle} />} />
            <Route path="/about-company/:userid" element={<AboutCompany />} />
            <Route path="/deposit/:userid" element={<Deposit  Display = {toggle}/>}/>
            <Route path="/bitcoin-deposit/:userid" element={<BitcoinDeposit />} />
            <Route path="/request-form/:userid" element={<RequestForm />} />
            <Route path="/withdraw/:userid" element={<Withdraw Display = {toggle}/>} />
            <Route path="/request-bank-withdrawal" element={<RequestWithDrawal Display = {toggle}/>} />
            <Route path="/request-bitcoin-withdrawal" element={<RequestBitcoinWithdraw Display = {toggle}/>} />
            <Route path="/faq/:userid" element={<DashboardFaq Display = {toggle} />} />
            <Route path="/contactus/:userid" element={<DashboardContactUs Display = {toggle} />} />
            <Route path="/privacypolicy/:userid" element={<DashboardPrivacy Display = {toggle}/>} />
            <Route path="/update/:userid" element={<Update Display = {toggle}/>} />
          </Route>
        </Routes>
      </HashRouter>
  );
}

export default App
