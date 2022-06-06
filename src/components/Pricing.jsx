import React from 'react'

const Pricing = () => {
  return (
    <section className="pricing">
        <div className="container">
            <div className="title-container">
                <h1>Pricing Plan</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum facere quis tempora officia rem magni delectus sed.</p>
            </div>
            <div className="cards">
                <div className="card">
                    <div className="top">
                    <h2 className="title">Starter</h2>
                    <p>up to 3 users</p>
                    </div>
                    <div className="center">
                        <h2>29</h2>
                        <p>per month</p>
                    </div>
                    <button>Order</button>
                </div>
                <div className="card">
                    <div className="top">
                    <h2 className="title">Standard</h2>
                    <p>up to 20 users</p>
                    </div>
                    <div className="center">
                        <h2>99</h2>
                        <p>per month</p>
                    </div>
                    <button>Order</button>
                </div>
                <div className="card">
                    <div className="top">
                    <h2 className="title">Premium</h2>
                    <p>up to 200 users</p>
                    </div>
                    <div className="center">
                        <h2>299</h2>
                        <p>per month</p>
                    </div>
                    <button>Order</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Pricing