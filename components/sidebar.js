import React from 'react'
import Input from './input'

const Sidebar = () => {
    return (
        <div className="flex flex-col space-y-2">
            <div className="flex space-x-1">
                <input type="checkbox" name="full-time" id="full-time" />
                <label htmlFor="full-time" className="text-xs font-semibold bg-gray-800">Full time</label>
            </div>
            <div className="space-y-2">
                <h3 className="text-gray-600 uppercase">Location</h3>
                <Input />
                

            </div>
            <div>
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
                <div>
                    <input type="radio" name="london" id="london"/>
                
                    <label htmlFor="london">London</label>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Sidebar
