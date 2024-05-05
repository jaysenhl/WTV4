import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './Header';
import Quotes from './Quotes';
import 'boxicons'

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
        <Quotes/>
        <div className="linkItems">
          <LinkButton title="CREAR RUTINA" icon="history" to="/create-workout" />
          <LinkButton title="VER HISTORIAL" icon="message-square-add" to="/history" />
        </div>
    </section>
  );
}

export default Dashboard;