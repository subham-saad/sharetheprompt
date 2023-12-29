import Feed from '@components/Feed'
import React from 'react'

function Home() {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Discover & Share
        <br className='max-md:hidden'/>
        <span className='violet_gradient text-center'>AI-Utility Prompts</span>
      </h1>
      <p className='desc text-center'>
        Prompt Junction is an open-source AI prompting platform for discover, create and share creative prompts
      </p>
      <Feed />
    </section>
  )
}

export default Home