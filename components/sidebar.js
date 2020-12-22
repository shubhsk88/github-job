import React, { useState } from 'react'
import Input from './input'

const Sidebar = () => {

    return (
        <div className="flex flex-col space-y-4 w-1/3">
            <div className="flex text-lg items-center space-x-1">
                <input type="checkbox" className="w-4 h-4" name="full-time" id="full-time" />
                <label htmlFor="full-time" className="font-semibold pl-2 text-gray-800">Full time</label>
            </div>
            <div className="space-y-4">
                <h3 className="text-gray-600 text-md font-bold uppercase">Location</h3>
                <Input classValue="w-full p-2 h-full" space="w-11/12 mr-2 py-2" />
                

            </div>
            <div className="space-y-2 py-2">
                <div className="flex items-center">
                    <input type="radio" className="w-4 h-4" name="london" id="london"/>
                
                    <label className="ml-2 text-gray-800 text-lg font-bold" htmlFor="london">London</label>
                    
                </div>
                <div>
                    <input type="radio" name="london" id="london"/>
                
                    <label htmlFor="london">London</label>
                    
                </div>
                <div>
                    <input type="radio" name="london" id="london"/>
                
                    <label htmlFor="london">London</label>
                    
                </div>
                <div>
                    <input type="radio" name="london" id="london"/>
                
                    <label htmlFor="london">London</label>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Sidebar
