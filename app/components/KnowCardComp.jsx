import Image from 'next/image'
import React from 'react'
import items from '../constants/knowYourCardData'

const KnowCardComp = () => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-max w-full table-auto border-collapse">
                <thead>
                    <tr className="bg-gray-100 border-b border-gray-300">
                        <th className="px-4 py-2 text-left text-sm md:text-base border-l-0 border-r-0">Card Type</th>
                        <th className="px-4 py-2 text-left text-sm md:text-base border-l-0 border-r-0">Test Requirements</th>
                        <th className="px-4 py-2 text-left text-sm md:text-base border-l-0 border-r-0">Training Requirements</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, id) => (
                        <tr key={id} className="border-b border-gray-300 text-sm md:text-base">
                            <td className="px-4 py-2 border-l-0 border-r-0">{item.card_type}</td>
                            <td className="px-4 py-2 border-l-0 border-r-0">{item.test_requirement}</td>
                            <td className="px-4 py-2 flex gap-2 items-center border-l-0 border-r-0">
                                <Image
                                    src={item.image_path}
                                    alt="card-image"
                                    width={80}
                                    height={50}
                                    className="rounded-sm h-[50px] w-[80px] md:h-[60px] md:w-[100px]"
                                />
                                {item.training_requirement}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default KnowCardComp
