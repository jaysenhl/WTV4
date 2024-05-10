import { Link } from 'react-router-dom';
import Header from './Header';
import Quotes from './Quotes';

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
        <Header iconname="home" title="INICIO"/>
        <h1 className='title'>CREA RUTINAS Y GUARDALAS</h1>
        <div className="linkItems">
          <LinkButton title="CREAR RUTINA" icon="history" to="/create-workout" />
          <LinkButton title="VER HISTORIAL" icon="message-square-add" to="/history" />
        </div>
        <Quotes/>
    </section>
  );
}

export default Dashboard;