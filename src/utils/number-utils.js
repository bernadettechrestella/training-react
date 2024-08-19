export const numberFormat = (price) => {
    const formatted = price.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    })
    return formatted
}

export const numberFormatAbbreviate = (price) => {
    const abbreviations = {
        k: 1000,
        M: 1000000,
        B: 1000000000,
    }

    let formatted = ''

    if (price >= abbreviations.B) {
        formatted = (price / abbreviations.B).toFixed(0) + 'B'
    } else if (price >= abbreviations.M) {
        formatted = (price / abbreviations.M).toFixed(0) + 'M'
    } else if (price >= abbreviations.k) {
        formatted = (price / abbreviations.k).toFixed(0) + 'k'
    } else {
        formatted = price
    }

    return formatted
}
