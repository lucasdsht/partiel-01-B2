import React from 'react'
import { 
    Header,
    Footer,
} from './index'

export interface LayoutProps {
    children: React.ReactElement
}

export const Layout: React.FC<LayoutProps> = ({
    children
}) => {
    return (
        <>
            <Header loggedIn={true}/>
            <main className='font-body'>{children}</main>
            <Footer/>
        </>
    )
}

export default Layout