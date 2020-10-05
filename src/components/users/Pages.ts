
export const pagesReturn = (totalUserCount: number, pageSize: number) => {
    let pagesCount = Math.ceil(totalUserCount / pageSize)

    let pages = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }
    return pages
}