export const currencyFormatter = (amount)=> {
    return (amount)?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}