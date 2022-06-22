// import { Menu, Transition } from '@headlessui/react'
// import Link from 'next/link'
// import { Fragment } from 'react'
// import { ChevronDownIcon } from '../../assets/icons/ChevronDownIcon'
// import MenuIconBars from '../../assets/icons/MenuIconBars'


// export default function MenuDropdown_({ menuList = [] }: any) {
//     return (
//         <div className="w-56 text-right">
//             <Menu as="div" className="relative inline-block text-left">
//                 <div>
//                     <Menu.Button className="inline-flex w-full justify-center rounded-md bg-primary-900 bg-opacity-90 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
//                         <MenuIconBars className='h-5 w-5' />
//                         <ChevronDownIcon
//                             className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
//                             aria-hidden="true"
//                         />
//                     </Menu.Button>
//                 </div>
//                 <Transition
//                     as={Fragment}
//                     enter="transition ease-out duration-100"
//                     enterFrom="transform opacity-0 scale-95"
//                     enterTo="transform opacity-100 scale-100"
//                     leave="transition ease-in duration-75"
//                     leaveFrom="transform opacity-100 scale-100"
//                     leaveTo="transform opacity-0 scale-95"
//                 >
//                     <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                         <div className="px-1 py-1 ">
//                             {menuList.map((items: any, index: number) => {
//                                 return (
//                                     <Menu.Item key={`menu_items_${items.title?.concat("_", index)}`}>
//                                         {({ active }) => (
//                                             <Link href={items.link}>
//                                                 <button

//                                                     className={`${active ? 'bg-primary-500 text-white' : 'text-gray-900'
//                                                         } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
//                                                 >
//                                                     {active ? (
//                                                         <MenuIconBars
//                                                             fill='#357266'
//                                                             stroke='#357266'
//                                                             className='h-5 w-5' />
//                                                     ) : (
//                                                         <MenuIconBars
//                                                             fill='#357266'
//                                                             stroke='#357266'
//                                                             className='h-5 w-5' />
//                                                     )}
//                                                     {items.title}
//                                                 </button>
//                                             </Link>
//                                         )}
//                                     </Menu.Item>
//                                 )
//                             })}
//                         </div>
//                     </Menu.Items>
//                 </Transition>
//             </Menu>
//         </div>
//     )
// }

export {}
