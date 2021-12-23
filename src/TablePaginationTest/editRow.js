import './table.css'


function EditRow({ id, first_name, last_name, email, birth, age, country, phone, editFormData, handleEditFormChange, handleCancelClick }) {
    
    return (
            <tr key ={id}>
                <td key ={'first_name_edit'}>{first_name}</td>
                <td key ={'last_name_edit'}>{last_name}</td>
                <td key ={'email_edit'}>{email}</td>
                <td key ={'birth_edit'}>{birth}</td>
                <td key ={'age_edit'}>
                    <input 
                        type="number" 
                        required='required'
                        placeholder = {age}
                        name="age"
                        value={editFormData.age}
                        onChange={handleEditFormChange}
                    ></input>
                </td>
                <td key ={'country_edit'}>{country}</td>
                <td key ={'phone_edit'}>{phone}</td>
                <td key ={'button_edit'}> 
                    <button type="submit"> save </button>
                    <button type="button" onClick={handleCancelClick}> cancel </button>
                </td>
                
            </tr>
    );
}

export default EditRow;