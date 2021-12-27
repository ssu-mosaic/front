

function RequestOrder({requestForm}){

    const requestData = {
        retailerId: requestForm.retailerId,
        retailerName: requestForm.retailerName
    } 
    console.log(requestForm);

    return(
        <div>
            <input type="text" value={requestData.retailerName} disabled/>
            <button></button>
        </div>
    );

}


export default RequestOrder;