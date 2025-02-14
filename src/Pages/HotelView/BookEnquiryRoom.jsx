import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SelectRoom from './SelectRoom';
import WriteReview from './WriteReview';

function BookEnquiryRoom() {
  return (
    <section className='container w-full px-4 py-12 '>
           <h3 className='text-xl font-semibold text-[#21253D] border-b-2 w-fit pb-1 border-[#8B3EEA] mb-4 ml-10'>Select your room
           </h3>

   <Tabs>
    <TabList className="flex flex-col justify-around gap-5 mb-10 lg:flex-row lg:w-[70%] text-center w-[50%] mx-auto">
      <Tab className="px-20 py-2 rounded-md cursor-pointer hover:text-[#3C7AD5] bg-[#8B3EEA] transition-all duration-700 hover:bg-[#8B3EEA] text-white focus:outline-none focus:bg-[#8B3EEA]">Book</Tab>
      <Tab className="px-20 py-2 rounded-md cursor-pointer hover:text-[#3C7AD5] bg-[#8B3EEA]  transition-all duration-700 hover:bg-[#8B3EEA] text-white focus:outline-none focus:bg-[#8B3EEA]">Enquiry</Tab>

    </TabList>

    <TabPanel>
    <SelectRoom className="w-full "/>

    </TabPanel>
    <TabPanel>
      <WriteReview btnText = "Enquiry"/>
    </TabPanel>
  </Tabs>
  </section>
  )
  
}

export default BookEnquiryRoom
