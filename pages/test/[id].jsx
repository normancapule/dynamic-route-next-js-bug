import React, { useEffect, useState } from 'react'

const Test = () => {
  const [uiState, setUiState] = useState({ show: false })

  useEffect(() => {
    setUiState({ ...uiState, show: true })
    console.log('I was called!')
  })

  return <>{uiState.show && <h1>I am visible!</h1>}</>
}

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: '1' } }],
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params && context.params.id

  return { props: { id } }
}

export default Test
