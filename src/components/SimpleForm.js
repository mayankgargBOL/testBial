import React, { useState } from 'react';
import { BialApp } from '@lji/bial-webapp/dist/bial-webapp'; // Replace with the actual package component

function MemberForm() {
  const [formData, setFormData] = useState({
    member_id: 'WVWPVNNCXTTS',
    pulse_token: 'TTKN:NjdiYzRhM2IyOTg3ZjI5NWU3MmNlOWEy:GqXbbR6JKwsQIQHmsbXtZmE7PtY4gbg7rdwyevdvKuhwNYFsKdU7rawMiHVsEKM3gUwyQ1BWXYuHK0HDiJ1nxWUAxgpaJyDo22xLXsU9KVTL',
    source_path: 'https://api.apm20.gravty.io',
    x_api_key: '6A5ud8cMRY60zlkdwupTu7cG8sBrdH4u5Ix0P1QU',
    member_name: 'Member'
  });
  

  const [showPackageComponent, setShowPackageComponent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.member_id || !formData.pulse_token || !formData.source_path || !formData.x_api_key || !formData.member_name) {
      alert('Please fill in all the fields');
      return;
    }

    // Set state to show the package component
    setShowPackageComponent(true);
  };

  return (
    <div style={{
        display:'flex',
        justifyContent: 'center'
        }}>
          <BialApp member_id="WVWPVNNCXTTS" pulse_token="TTKN:NjdiYzRhM2IyOTg3ZjI5NWU3MmNlOWEy:SuyT4YVrXDgj52H2iy7rq9V0zcPmCgOuhReFu1bHYK7YlPpjKKSAMF3gVsEaWUj9EHbcwjMEGEMbjGqwDgrDgt9EepqbRNhKtIEhNoNj7YBu" source_path="https://api.apm20.gravty.io" x_api_key="6A5ud8cMRY60zlkdwupTu7cG8sBrdH4u5Ix0P1QU" member_name="Mayank Garg" />
      {/* {!showPackageComponent && (<form onSubmit={handleSubmit}>
        <div style={{marginTop:'10px'}}>
          <label style={{color:'white', width:'100px'}}>Member ID:</label>
          <input
            type="text"
            name="member_id"
            value={formData.member_id}
            onChange={handleChange}
            placeholder="Enter Member ID"
            required
          />
        </div>
        <div style={{marginTop:'10px'}}>
          <label style={{color:'white', width:'100px'}}>Token:</label>
          <input
            type="text"
            name="pulse_token"
            value={formData.pulse_token}
            onChange={handleChange}
            placeholder="Enter token"
            required
          />
        </div>

        <div style={{marginTop:'10px'}}>
          <label style={{color:'white', width:'100px'}}>Source Path:</label>
          <input
            type="text"
            name="source_path"
            value={formData.source_path}
            onChange={handleChange}
            placeholder="Source Path"
            required
          />
        </div>

        <div style={{marginTop:'10px'}}>
          <label style={{color:'white', width:'100px'}}>Api Key:</label>
          <input
            type="text"
            name="x_api_key"
            value={formData.x_api_key}
            onChange={handleChange}
            placeholder="API Key"
            required
          />
        </div>

        <div style={{marginTop:'10px'}}>
          <label style={{color:'white', width:'100px'}}>Member Name:</label>
          <input
            type="text"
            name="member_name"
            value={formData.member_name}
            onChange={handleChange}
            placeholder="Member Name"
            required
          />
        </div>
        <div style={{display: 'flex', justifyContent:'center'}}>
        <button type="submit" style={{marginTop:'10px'}}>Submit</button>
        </div>
      </form>
      )} */}

      {/* Conditionally render the package component after form submission */}
      {/* {showPackageComponent && (
        
      )} */}
    </div>
  );
}

export default MemberForm;
