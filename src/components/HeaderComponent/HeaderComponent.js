import React from 'react'
import { Link } from 'react-router-dom'
import styles from './HeaderComponent.scss'

export const HeaderComponent = ()=>
  (
    <section className="hero is-primary is-warning is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-3 has-text-left has-text-grey-dark">
            <Link href="/" className="a is-info" to="/">KitchenHub</Link>
          </h1>
          <h2 className="subtitle has-text-left has-text-grey-dark">
            an application by Zigmund Sun Oo©
          </h2>
        </div>
      </div>
    </section>
  ) 

export default HeaderComponent
