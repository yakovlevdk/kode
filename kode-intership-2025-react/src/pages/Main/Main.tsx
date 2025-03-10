import {  useState } from "react"
import { MainInput } from "./ui/MainInput"
import TabNavigation from "./ui/TabNavigation"
import { UsersList } from "./ui/UsersList"
import FilterModal from "../../shared/ui/Modal"
import styles from './main.module.css'
export const Main = () => { 
    const [currentDepartment, setCurrentDepartment] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [sortOption, setSortOption] = useState<string>('');
    const [searchValue, setSearchValue] = useState<string>('')
    const onClose = () => { 
        setIsOpen(false)
    }


    return ( 
    <div className={styles.main}>
        <span className={styles.header}>Поиск</span>
        <MainInput setIsOpen={setIsOpen} searchValue={searchValue} setSearchValue={setSearchValue}/>
        <TabNavigation setCurrentDepartment={setCurrentDepartment} />
        <UsersList filter={sortOption} currentDepartment={currentDepartment} searchValue={searchValue}/>
        <FilterModal sortOption={sortOption} setSortOption={setSortOption} isOpen={isOpen} onClose={onClose}/>
 
    </div>
    )
}
