import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import './app.css'

const App = () => {
  const activeMenu = true
  return <div>
    <BrowserRouter>
      <div className='relative flex dark:bg-main-dark-bg'>
        <div className="fixed right-4 bottom-4 z-50">
          <TooltipComponent content='settings' position='top'>
            <button type="button" className='p-4 rounded-full text-white bg-blue-600 text-2xl'>
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
            SideBar 
          </div>
        ) : (
          <div className='w-0 dark:bg-secondary-dark-bg'>
            No SideBar w-0
          </div>
        )}
        <div className={`
          dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}
        `}>
          <div className='flex md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
            NavBar Here
          </div>
        </div>
        <Routes>
                {/* dashboard  */}
                <Route path="/" element="Home" />
                <Route path="/ecommerce" element="ecommerce" />

                {/* pages  */}
                <Route path="/orders" element="orders" />
                <Route path="/employees" element="employees" />
                <Route path="/customers" element="customers" />

                {/* apps  */}
                <Route path="/kanban" element="kanban" />
                <Route path="/editor" element="editor" />
                <Route path="/calendar" element="calendar" />
                <Route path="/color-picker" element="picker" />

                {/* charts  */}
                <Route path="/line" element="line" />
                <Route path="/area" element="area" />
                <Route path="/bar" element="bar" />
                <Route path="/pie" element="pie" />
                <Route path="/financial" element="financial" />
                <Route path="/color-mapping" element="mapping" />
                <Route path="/pyramid" element="pyramid" />
                <Route path="/stacked" element="stacked" />

              </Routes>
      </div>
    </BrowserRouter>
  </div>
}

export default App