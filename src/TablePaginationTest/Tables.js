import './table.css'


function Tables({ id, first_name, last_name, email, birth, age, country, phone, handleEditClick, handleDeleteClick }) {
    
    const rowData = {
        id: id,
        first_name: first_name,
        last_name: last_name,
        email: email,
        dAteofbirth: birth,
        age: age,
        country: country,
        phine: phone
    }

    return (
            <tr key ={id}>
                <td key={'first_name_td'}>{first_name}</td>
                <td key={'last_name_td'}>{last_name}</td>
                <td key={'email_td'}>{email}</td>
                <td key={'birth_td'}>{birth}</td>
                <td key={'age_td'}>{age}</td>
                <td key={'country_td'}>{country}</td>
                <td key={'phone_td'}>{phone}</td>
                <td> 
                    <button type="button" onClick={(event)=> handleEditClick(event, rowData)}> edit </button>
                    <button type="button" onClick={()=> handleDeleteClick(id)}> delete </button>
                </td>
            </tr>
    );
}

export default Tables;