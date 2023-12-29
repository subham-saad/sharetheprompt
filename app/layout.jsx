import Nav from '@components/Nav'
import Provider from '@components/Provider'
import '@styles/globals.css'


export const metadata = {
    title: "Prompt-Junction",
    description: "Discover & Share AI Prompts"
}

function RootLayout({children}) {
  return (
   <html lang='eng'>
     <body>
        <Provider>
        <div className='main'>
            <div className='gradient'></div>
        </div>

        <main className='app'>
            <Nav />
            {children}
        </main>
        </Provider>
     </body>
   </html>
  )
}

export default RootLayout