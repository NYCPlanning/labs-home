import React from 'react'
import Link from 'gatsby-link'

const ContactPage = () => (

<div id="main" class="main">
   <div class="hero">
      <div class="grid-container">
         <div class="grid-x grid-padding-x">
            <div class="cell">
               <h1>Contact</h1>
            </div>
         </div>
      </div>
   </div>
   <div class="grid-container">
      <div class="grid-x grid-padding-x">
         <div class="cell large-8">
            <h2>Let’s work together to tackle your division’s urban planning technology&nbsp;problems.</h2>
            <p>Email us, or swing by our cubes in the IT Division at 120 Broadway, 30th floor. We'll coordinate to document and understand the problem you're trying to solve, and determine whether it is a good fit in scope and subject matter for a Labs project. </p>
         </div>
         <div class="cell large-4">
            <ul>
               <li>
                  <p>Email us at <a href="mailto:labs_dl@planning.nyc.gov">labs_dl@planning.nyc.gov</a></p>
               </li>
               <li>
                  <p>Follow <a href="https://twitter.com/nycplanninglabs">@nycplanninglabs</a> on Twitter</p>
               </li>
               <li>
                  <p>Contribute to <a href="https://github.com/nycplanning">NYCPlanning on GitHub</a></p>
               </li>
               <li>
                  <p>Subscribe to our blog's <a href="/feed.xml">RSS feed</a></p>
               </li>
            </ul>
         </div>
      </div>
   </div>
</div>

export default ContactPage
