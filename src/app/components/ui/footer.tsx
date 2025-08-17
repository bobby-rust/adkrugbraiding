import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (<footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <div className="flex items-center space-x-3 mb-4">
                        <Image src="/adirondack-logo.png" width={50} height={50} alt="ADK Rug Braiding Logo" />
                        <div>
                            <h4 className="font-bold">Adirondack Rug Braiding</h4>
                            <p className="text-sm text-gray-400">Fine Hand Braided Heirlooms</p>
                        </div>
                    </div>
                    <p className="text-gray-400 text-sm">
                        Preserving the traditional art of rug braiding since 1863, creating beautiful heirloom pieces that last
                        for generations.
                    </p>
                </div>

                <div>
                    <h5 className="font-semibold mb-4">Contact Information</h5>
                    <div className="space-y-2 text-sm text-gray-400">
                        <div className="flex items-center space-x-2">
                            <Mail className="w-4 h-4" />
                            <span>hcondon@frontiernet.com</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4" />
                            <span>315-265-4722</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>Parishville, NY</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h5 className="font-semibold mb-4">Quick Links</h5>
                    <div className="space-y-2 text-sm">
                        <div>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                Our Rugs
                            </a>
                        </div>
                        <div>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                Braiding Classes
                            </a>
                        </div>
                        <div>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                Custom Orders
                            </a>
                        </div>
                        <div>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                Supplies
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                <p>
                    &copy; 2024 Adirondack Rug Braiding. All rights reserved. | Preserving traditional craftsmanship for
                    future generations.
                </p>
            </div>
        </div>
    </footer >
    )
}