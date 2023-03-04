import { useState } from 'react';
import TabSection from './tabsection';
import data from './portfolioData';

function Portfolio() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="relative bg-white mx-auto max-w-7xl px-5 py-1 sm:px-1 sm:py-4 lg:px-1">
    <div className="mx-auto max-w-7xl py-1 sm:px-1 sm:py-4 lg:px-1">
    <h2 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl text-center">
                Portfolio
      </h2>
      <div className="grid px-5 mt-5 grid-cols-1 gap-4 justify-center text-center">
      
        <div className=" mb-4 justify-cente text-centerr">
          {data.map(tab => (
            <button
              key={tab.id}
              className={`text-lg font-medium py-2 px-4 border-b-2 ${
                activeTab === tab.id ? 'border-blue-500 text-primary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      
      <div className="">
        {data.map(tab => (
          <div key={tab.id} className={`${activeTab === tab.id ? 'block' : 'hidden'} mb-4`}>
            <TabSection items={tab.content} />
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
    
  );
}

export default Portfolio;
