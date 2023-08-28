"use client"
import Homebanner from './components/homebanner';
import Contentslider from './components/contentslider';
import Impact from './components/impact';
import Collab from './components/collab';
import Footer from './components/footer';
import Copyright from './components/copyright';

export default function Home() {
  return (
    <>
    <Homebanner />
    <Contentslider />
    <Impact />
    <Collab />
    <Footer />
    <Copyright />
    </>
    
  )
}