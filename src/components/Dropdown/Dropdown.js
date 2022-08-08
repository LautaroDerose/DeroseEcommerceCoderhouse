import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import './Dropdown.css'
import onClickOutside from 'react-onclickoutside'
const items = [
    {
        id:1,
        label:"Home",
        toLink:"/home"
    },
    {
        id:2,
        label:"About us",
        toLink:"/about"
    },
    // {
    //     id:3,
    //     label:"Products",
    //     toLink:"/products"
    // },
    {
        id:4,
        label:"Contact",
        toLink:"/contact"
    },
    {
        id:5,
        label:"televisores",
        toLink:"/category/televisores"
    },
    {
        id:6,
        label:"celulares",
        toLink:"/category/celulares"
    },
    {
        id:7,
        label:"notebooks",
        toLink:"/category/notebooks"
    }
]


function Dropdown ({title, items= [], multiSelect = false}) {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggle = () => setOpen(!open)
    Dropdown.handleClickOutSide = () => setOpen(false);


    function handleOnClick(item) {
        if(!selection.some(current => current.id === item.id)) {
            if (!multiSelect) {
                setSelection([item]);
            }else if(multiSelect){
                setSelection([...selection, item])
            }
        } else {
            let selectionAfterRemoval = selection;
            selectionAfterRemoval = selectionAfterRemoval.filter(
                current => current.id !== item.id
            );
            setSelection([...selectionAfterRemoval])
        }
    }



    function isItemInSelection(item) {
        if (selection.find(current => current.id === item.id)){
            return true;
        }else{

            return false;
        }
    }


    return (
        <div className="dd-wrapper">
            <div 
            tabIndex={0} 
            className="dd-header" 
            role="button" 
            onKeyPress={()=> toggle(!open)} 
            onClick={()=>toggle(!open)} >

                <div className="dd-header__title">
                    <p className="dd-header__title--bold" >{title}</p>
                </div>
                <div className="dd-header__action" >
                    <p>{ open ? 'Close' : 'Open' }</p>
                </div>
            </div>
            { open && (
                <ul className="dd-list" >
                     {
                        items.map((item)=> (
                            <li className="dd-list-item" key={item.id} >
                                <button type="button" onClick={()=> handleOnClick(item)} >
                                    <span>{item.label}</span>
                                    <span>{isItemInSelection(item) && 'Selected'}</span>
                                </button>
                            </li>   ))
                    }
                </ul>
            )}
        </div>
    )

}

const clickOutsideConfig = {
    handleClickOutSide: () => Dropdown.handleClickOutSide,
}

export default onClickOutside(Dropdown, clickOutsideConfig);


// export const Dropdown = () => {
//     return (
//         <div>
            
//         </div>
//     )
// }
