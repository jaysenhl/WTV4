import { useEffect, useState, useRef } from "react"
import { FaAt, FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import gsap from 'gsap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Quotes(){

    const [quote, setQuote] = useState({})
    const quoteTextRef = useRef()

    useEffect(()=>{
        async function getQuote(){
            gsap.to(quoteTextRef.current, { opacity: 0, duration: 0.5 });
            const response = await fetch('https://stoic.tekloon.net/stoic-quote')
            const data = await response.json()
            setQuote(data)
            gsap.fromTo(quoteTextRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });
        }
        getQuote()
        const instervalId = setInterval(getQuote,7000)
        return () => clearInterval(instervalId)
    },[])

    return(
        <div className='quoteBox'>
        <h1 className="quoteTitle">Stoicism Quotes</h1>
        <h2 className="quoteAuthor">
        <FaAt color="black"/>
        {quote.author || 'Uknown'}
        </h2>
        <h2 className="quoteText" ref={quoteTextRef}>
            <FaQuoteLeft size="3rem" color="lime"/> 
                { quote.quote }
            <FaQuoteRight size="3rem" color="lime"/>
        </h2>
        </div>
    )
}

export default Quotes;