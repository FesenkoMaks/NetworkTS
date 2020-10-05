import React, {useState} from "react";
import s from "../users/Users.module.css";

type PropsType = {
    totalUserCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (p: number) => void
    portionSize: number
}

export const Paginator = ({totalUserCount, currentPage, pageSize, onPageChanged, portionSize = 10}:PropsType) => {

        let pagesCount = Math.ceil(totalUserCount / pageSize)

        let pages = []
        for (let i = 1; i < pagesCount; i++) {
            pages.push(i)
        }

        let portionCount = Math.ceil(pagesCount/portionSize)
        let [portionNumber, setPortionNumber] = useState(1)
        let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
        let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div>
            { portionNumber > 1 &&
            <button onClick={() => { setPortionNumber(portionNumber - 1)}}> PREV </button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p<= rightPortionPageNumber )
                .map((p: any) => {
                    return <span
                        onClick={(e) => {
                            onPageChanged(p)
                        }}
                        className={currentPage === p ? s.selectedPage : ''}>{p}</span>
            })}
            {portionCount > portionNumber &&
            <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
        </div>
    )
}