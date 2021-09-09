import Head from 'next/head'
import Image from 'next/image'
import Blacknavbar from '../components/Blacknavbar'
import styles from '../styles/Home.module.css'
import { FaSearch, FaTwitter, FaEnvelopeOpenText,FaPhoneAlt,FaCommentDots } from 'react-icons/fa';
import Bluenavbar from '../components/Bluenavbar';
import Backgroundimage from '../components/Backgroundimage';

export default function Home() {
  return (
    <div>





      <section>
      <Blacknavbar />
      </section>


      <section>
        <Bluenavbar />
       
      </section>


    <section>
      <Backgroundimage />
    </section>



    </div>
  )
}
