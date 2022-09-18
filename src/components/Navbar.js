import { Menu, Transition  } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon, Bars4Icon, CurrencyDollarIcon, LanguageIcon } from '@heroicons/react/20/solid'
import { Cog6ToothIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import useLocales from '../hooks/useLocales';
import logo from '../logo.svg';

const Navbar = () => {
    const { translate, onChangeLang } = useLocales();

    return (<div className="h-20 flex justify-center align-middle absolute w-full" style={{borderBottom: "1px solid #e0e0e0"}}>
        <div className="max-w-7xl w-full  flex justify-between mx-4 items-center">
            <img  width="150px" height="auto" className=" flex align-middle" src={logo} style={{  verticalAlign:"middle", backgroundRepeat: "no-repeat"}}alt="logo"/>
            <span className="  flex-row space-x-6 items-center hidden md:flex">
                <ul className="flex  flex-row space-x-8 font-normal items-center text-lg">
                    <li><FeaturesDropDown /></li>
                    
                    <li className="hover:text-[#229A16]"><button>{translate("navbar.pricing")}</button></li>
                    <li className="hover:text-[#229A16]"><button>{translate("navbar.signIn")}</button></li>
                    <li className="hover:text-[#229A16]"><button onClick={()=>{onChangeLang(translate("navbar.language").toLocaleLowerCase())}}>{translate("navbar.language")}</button></li>
                </ul>
                <button className="h-12 rounded-md text-white font-semibold hover:translate-x-1 duration-200" style={{background:"linear-gradient(to top,#54a832,#a1b81c)", padding:"13px 25px"}}>
                    {translate("components.getQuote")}
                </button>
            </span>
            <MobileDropDown className="flex md:hidden" />
        </div>
    </div>)
}

const FeaturesDropDown = () => {
    const { translate } = useLocales();
    return (
        <div >
          <Menu as="div" className="relative inline-block text-left z-10">
            <div className='flex items-center'>
              <Menu.Button className="inline-flex w-full justify-center  py-2 text-lg font-normal  ">
              {translate("navbar.features")}
                <ChevronDownIcon
                  className="ml-2 -mr-1 mt-1 h-5 w-5 "
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                       
                      <button
                        className={`${
                          active ? 'bg-[#229A16] text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm space-x-1`}
                      >
                         <News className="mr-3 w-5"   aria-hidden="true"/>
                        {translate('sections.communications')}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-[#229A16] text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <Requests className="mr-3 w-5"   aria-hidden="true"/>
                        {translate('sections.requests')}
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-[#229A16] text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <Folder className="mr-3 w-5"/>
                        {translate('sections.folders')}
                      </button>
                    )}
                  </Menu.Item>
                  
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-[#229A16] text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <Reservations className="mr-3 w-5"/>
                        {translate('sections.reservation')}
                      </button>
                    )}
                  </Menu.Item>
                  
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      )
  }

  const MobileDropDown = (props) => {
    const { translate, onChangeLang } = useLocales();
    return (
        <div {...props}>
          <Menu as="div" className="relative inline-block text-left z-10">
            <div className='flex items-center'>
              <Menu.Button className="inline-flex w-full justify-center  py-2 text-lg font-normal  ">
                <Bars4Icon
                  className="ml-2 -mr-1 mt-1 h-10 w-10 "
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                       
                      <button
                        className={`${
                          active ? 'bg-[#229A16] text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm space-x-1`}
                      >
                         <Cog6ToothIcon className="mr-3 w-5"   aria-hidden="true"/>
                        {translate('navbar.features')}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-[#229A16] text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <CurrencyDollarIcon className="mr-3 w-5"   aria-hidden="true"/>
                        {translate("navbar.pricing")}
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-[#229A16] text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <ArrowRightOnRectangleIcon className="mr-3 w-5"/>
                        {translate('navbar.signIn')}
                      </button>
                    )}
                  </Menu.Item>
                  
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                      onClick={()=>{onChangeLang(translate("navbar.language").toLocaleLowerCase())}}
                        className={`${
                          active ? 'bg-[#229A16] text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <LanguageIcon className="mr-3 w-5"/>
                        {translate('navbar.language')}
                      </button>
                    )}
                  </Menu.Item>
                  
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      )
  }


  const News = (props) => {
      return (
          <div {...props}>
            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
            </svg>
          </div>
       )
    
  }

  const Requests = (props) => {
      return (
        <div {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
    </svg> </div>)
    
  }

  const Folder = (props) => {
      return (
        <div {...props}>
      <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
    </svg></div>)
    
  }

  const Reservations = (props) => {
      return (
        <div {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
      </div>
      )
  }

export default Navbar;