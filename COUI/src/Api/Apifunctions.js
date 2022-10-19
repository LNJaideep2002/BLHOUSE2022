
const CompanyOrdersapi = async (value) => {
    const response = await fetch('http://localhost:6500/companyOrder', {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}
export { CompanyOrdersapi }
