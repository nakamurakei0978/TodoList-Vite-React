import PropTypes from 'prop-types'
import { useState } from 'react'

TodoItem.propTypes = {
    item: PropTypes.object.isRequired,
    removeItem: PropTypes.func.isRequired,
    index:PropTypes.number.isRequired
}


export default function TodoItem(props) {
    const [isChecked, setIsChecked] = useState(props.item.isChecked)

    return (
        <div className="flex justify-between items-center bg-slate-50/30 p-3 rounded-md">
            <div className="flex items-center gap-2">
                <input checked={isChecked} onChange={e=>setIsChecked(e.target.checked)} className="w-5 h-5" type="checkbox" />
                <span className={ isChecked ? 'line-through':''}>{props.item.title}</span>
            </div>
            <button onClick={()=>props.removeItem(props.index)} className="hover:text-red-400 duration-200">Remove</button>
        </div>
    )
}