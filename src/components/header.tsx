import { useState } from 'react'
import { Dialog, Disclosure, Popover } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
// import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
// const callsToAction = [
//     { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
//     { name: 'Contact sales', href: '#', icon: PhoneIcon },
// ]

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }

export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="text-slate-100 border-slate-100 bg-slate-800">
            <nav className="flex items-center justify-between p-4 mx-auto max-w-7xl lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">My profile</span>
                        <div className='text-2xl text-white'>fumikun</div>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-100"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="w-6 h-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12 bg-slate-900">
                    <a href="#about" className="text-sm font-semibold leading-6 text-white-900">
                        About me
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-white-900">
                        Works
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-white-900">
                        Company
                    </a>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto text-white bg-slate-900 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <div className='text-2xl text-white'>fumikun</div>
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-slate-100"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="flow-root mt-6">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="py-6 space-y-2">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...products, ...callsToAction].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 rounded-lg text-white-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <a
                                    href="#about"
                                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg text-white-900 hover:bg-gray-50 hover:text-slate-900"
                                >
                                    About me
                                </a>
                                <a
                                    href="#"
                                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg text-white-900 hover:bg-gray-50 hover:text-slate-900"
                                >
                                    Works
                                </a>
                                <a
                                    href="#"
                                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg text-white-900 hover:bg-gray-50 hover:text-slate-900"
                                >
                                    Company
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
