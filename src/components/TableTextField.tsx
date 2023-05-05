// TODO #rm useRef
import { useRef, useState } from "react";

// TODO #rm 
export const TableTextField = (props: { value: string | number, onChange: (value: string | number) => void }) => {
    // TODO - won't get to fix tabs 
    // fiddling with the linter
    // on my machine will fix it
    // const [value, setValue] = useState('');

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log('e tar', e.target.value)
    //     setValue(e.target.value)
    // }

    return (
        <>
            {/* this td should be seperate from the input  */}
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                {/* TODO add placeholder placeholder="Jane" */}
                <input
                    value={props.value}
                    onChange={(e) => props.onChange(e.target.value)}
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </td>
        </>
    )
}