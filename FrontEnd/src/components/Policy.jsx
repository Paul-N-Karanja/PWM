import React from 'react'
import { FaExchangeAlt } from 'react-icons/fa'
import { MdOutlineReport } from 'react-icons/md'
import { BiSupport } from 'react-icons/bi'

const Policy = () => {
    return (
        <div
            className={
                'flex flex-col justify-around gap-12 text-center py-20 text-xs'
            }
        >
            <div>
                <FaExchangeAlt className={'text-3xl m-auto mb-5'} />
                <p className={'font-semibold'}>Return Policy</p>
                <p>
                    For faulty item shipments, we do offer a 30 day return
                    policy
                </p>
            </div>

            <div>
                <MdOutlineReport className={'text-3xl m-auto mb-5'} />
                <p className={'font-semibold'}>Report Vendor</p>
                <p>
                    For suspicious or fraudulent vendor activity, notify us to
                    begin an investigation
                </p>
            </div>

            <div>
                <BiSupport className={'text-3xl m-auto mb-5'} />
                <p className={'font-semibold'}>Customer Support</p>
                <p>We offer 24/7 customer support</p>
            </div>
        </div>
    )
}
export default Policy
