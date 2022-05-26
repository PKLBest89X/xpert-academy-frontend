export const classNames = (...classses: string[]) => {
    return classses.filter(Boolean).join("")
}