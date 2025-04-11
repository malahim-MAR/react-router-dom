
import React from 'react'

function Home() {
  return (
    <div style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f9f9f9',
        padding: '40px 20px',
        textAlign: 'center'
    }}>
        <h1 style={{ color: '#2c3e50', fontSize: '48px', marginBottom: '20px' }}>Welcome to Contact Page</h1>
        <p style={{ color: '#555', fontSize: '18px', maxWidth: '800px', lineHeight: '1.6' }}>
            This is a sample homepage with centered content. You can replace this with your own text, images, and components.
        </p>
    </div>
  )
}

export default Home