import { Link } from 'react-router-dom';
import Header from './Header';
import Quotes from './Quotes';
import Lottie from 'lottie-react';
import lottie_Pad from '../assets/lottie_Pad.json'
import lottie_dumbell from '../assets/lottie_dumbell.json'

function LinkButton({ title, to,icon }) {
  return (
    <Link to={to} className="linkBtn">
      <box-icon animation="flashing" color="white" size="md" name={icon} ></box-icon> {title}
    </Link>
  );
}

function Dashboard() {
  return (
    <section className='dashboardComponent'>
          <h1 className='title'>CREA RUTINAS Y GUARDALAS</h1>
        <Lottie className='customLottie' animationData={lottie_Pad} />
          <small className="text-white">Made By Jaysen 🇵🇷</small>
        {/* <Header iconname="home" title="INICIO"/> */}
        <div className="linkItems">
          <h1 className='title'>Crea una Rutina Muscular</h1>
          <Lottie className='customLottie' animationData={lottie_dumbell} />
          <LinkButton title="CREAR RUTINA" icon="history" to="/create-workout" />
          <LinkButton title="VER HISTORIAL" icon="message-square-add" to="/history" />
        </div>
        <Quotes/>
    </section>
  );
}

export default Dashboard;