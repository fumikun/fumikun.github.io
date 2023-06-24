import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'

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
                    <a href="#skill" className="text-sm font-semibold leading-6 text-white-900">
                        Skills
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
                                <a
                                    href="#about"
                                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg text-white-900 hover:bg-gray-50 hover:text-slate-900"
                                >
                                    About me
                                </a>
                                <a
                                    href="#skill"
                                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg text-white-900 hover:bg-gray-50 hover:text-slate-900"
                                >
                                    Skills
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
