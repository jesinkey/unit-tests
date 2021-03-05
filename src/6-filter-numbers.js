export const filterNumbers = (array, largerThan) => {

    const remove = (param) => {
        return param <= largerThan

    }
    return array.filter(remove)

}