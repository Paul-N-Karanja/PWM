import React from 'react'
import Hero from '../components/Hero.jsx'
import LatestAdditions from '../components/LatestAdditions.jsx'
import Policy from '../components/Policy.jsx'
import NewsletterBox from '../components/NewsletterBox.jsx'
const Home = () => {
    return (
        <div>
            <Hero />
            <LatestAdditions />
            <Policy />
            <NewsletterBox />
        </div>
    )
}
export default Home
