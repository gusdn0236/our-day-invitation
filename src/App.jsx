import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeroSection from './components/HeroSection';
import InvitationSection from './components/InvitationSection';
import CalendarSection from './components/CalendarSection';
import Container from './components/Container';
import LocationSection from './components/LocationSection';
import AccountSection from './components/AccountSection';
import GallerySection from './components/GallerySection'
import GuestbookSection from './components/GuestbookSection'



import './App.css'

function App() {

 
  return (
  
       <div>
        <Container>
          <HeroSection />
          <InvitationSection />
      <CalendarSection />
      <LocationSection />
      <AccountSection />
      <GallerySection />
      <GuestbookSection />
      </Container>
       </div>
 
  )
}

export default App
