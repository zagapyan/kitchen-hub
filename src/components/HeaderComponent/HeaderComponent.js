import React from 'react'
import { Link } from 'react-router-dom'
import styles from './HeaderComponent.css'

export const HeaderComponent = ()=>
  (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-3 has-text-left">
            <Link className="link is-info" to="/">KitchenHub</Link>
          </h1>
          <h2 className="subtitle has-text-left">
            an application by Zigmund Sun Oo©
          </h2>
        </div>
      </div>
    </section>
  ) 

export default HeaderComponent
