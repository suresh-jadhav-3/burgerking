import React from 'react'
import AppStoreLink from '../../../assets/app_store.png'
import PlayStore from '../../../assets/play_store.png'

function AppStore() {
  return (
    
    <div className='bg-gray-100 py-14'>
        <div className='container'>
            <div className='grid items-center'>
                <div className='space-y-6 max-w-xl mx-auto'>
                    <h1 className='text-xl sm:text-4xl font-semibold text-center text-gray-700'>Burger King is available for Android and IOS</h1>
                    <div className='flex flex-wrap justify-center items-center'>
                        <a href="www.google.com" target='_blanck'>
                            <img src={PlayStore} alt="" className='max-w-[100px] sm:max-w-[200px]'/>
                        </a>
                        <a href="www.google.com" target='_blanck'>
                            <img src={AppStoreLink} alt="" className='max-w-[100px] sm:max-w-[200px]'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppStore