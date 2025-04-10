// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//     return (
//         <>
//             <div style={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 gap: '20px',
//                 margin: '20px 0px'
//             }}>
//                 <Link to={''}>Home</Link>
//                 <Link to={'about'}>About</Link>
//                 <Link to={'contact'}>Contact</Link>
//                 <Link to={'services'}>Services</Link>
//             </div>
//         </>
//     )
// }

// export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header style={{
            background: '#ffffff',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            padding: '15px 0',
            position: 'sticky',
            top: '0',
            zIndex: '100'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '30px',
                margin: '0 auto',
                maxWidth: '1200px',
                padding: '0 20px'
            }}>
                <Link 
                    to={''} 
                    style={{
                        textDecoration: 'none',
                        color: '#333',
                        fontWeight: '600',
                        fontSize: '18px',
                        transition: 'all 0.3s ease',
                        padding: '5px 10px',
                        borderRadius: '5px'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#4CAF50'}
                    onMouseOut={(e) => e.target.style.color = '#333'}
                >
                    Home
                </Link>
                <Link 
                    to={'about'} 
                    style={{
                        textDecoration: 'none',
                        color: '#333',
                        fontWeight: '600',
                        fontSize: '18px',
                        transition: 'all 0.3s ease',
                        padding: '5px 10px',
                        borderRadius: '5px'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#4CAF50'}
                    onMouseOut={(e) => e.target.style.color = '#333'}
                >
                    About
                </Link>
                <Link 
                    to={'contact'} 
                    style={{
                        textDecoration: 'none',
                        color: '#333',
                        fontWeight: '600',
                        fontSize: '18px',
                        transition: 'all 0.3s ease',
                        padding: '5px 10px',
                        borderRadius: '5px'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#4CAF50'}
                    onMouseOut={(e) => e.target.style.color = '#333'}
                >
                    Contact
                </Link>
                <Link 
                    to={'services'} 
                    style={{
                        textDecoration: 'none',
                        color: '#333',
                        fontWeight: '600',
                        fontSize: '18px',
                        transition: 'all 0.3s ease',
                        padding: '5px 10px',
                        borderRadius: '5px'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#4CAF50'}
                    onMouseOut={(e) => e.target.style.color = '#333'}
                >
                    Services
                </Link>
            </div>
        </header>
    )
}

export default Navbar