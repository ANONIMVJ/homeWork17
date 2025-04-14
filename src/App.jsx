import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './layout'
import PromoBanner from './components/PromoBanner'
import Catalog from './components/Catalog'

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route
            index
            element={(
              <>
                <PromoBanner />
                <Catalog />
              </>
            )}
          />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
