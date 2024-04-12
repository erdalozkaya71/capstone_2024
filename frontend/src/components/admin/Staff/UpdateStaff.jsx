import { React, useState, useEffect} from 'react';
import Navbar from '../Shared/Navbar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getStaff , updateStaff } from './apiStaffCalls';


const initialStaffState = {
  staffInformation: {
    name: '',
    surname: '',
    position: '',
  },
  contactDetails: {
    email: '',
    tel: '',
  },
  address: {
    street: '',
    city: '',
    province: 'Province',
    zipCode: '',
    country: '',
  },
  personalDetails: {
    qualifications: '',
    specialization: '',
    licence: '', 
    dateOfBirth: '', 
    gender: '',
    workschedule: '', 
    hobbies: '',
    photo: '',
  },
};


const UpdateStaffForm = () => {

  const [staff, setStaff] = useState({ ...initialStaffState });
  const navigate = useNavigate();
  const { id } = useParams();

  function formatDateToYYYYMMDD(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0'); // Months are 0-based
    const day = `${date.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
}

  useEffect(() => {
    const fetchStaff = async () => {
        try{
            const data = await getStaff(id);
            // console.log(data);
            data.personalDetails.dateOfBirth = formatDateToYYYYMMDD(data.personalDetails.dateOfBirth);
            setStaff(data);
        }catch(error){
            console.error('Error:', error);
        }
    }    
    fetchStaff();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [section, field] = name.split('.');

    setStaff((prevStaff) => ({
      ...prevStaff,
      [section]: {
        ...prevStaff[section],
        [field]: value
      }
    }));
  };
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setStaff((prevStaff) => ({
        ...prevStaff,
        personalDetails: {
          ...prevStaff.personalDetails,
          photo: reader.result // store image data as base64 string
        }
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await updateStaff(id, staff);
    const data = await response.json();

    if (response.ok) {
      alert('Staff member info Edited successfully');
      navigate('/admin/staff');
    } else {
      console.error('Error response:', data);
      alert(`Error: ${response.statusText}`);
    }
  };

  const handleCancel = () => {
    setStaff({ ...initialStaffState });
    navigate('/admin/staff');
  }


  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-200 flex items-center justify-center px-4">
        <div className="bg-white m-6 p-6 rounded-lg shadow-lg w-full max-w-3xl">
          <div className="mb-6">
            <Link to="/admin/staff" className="text-blue-500 hover:text-blue-700">
              <i className="fas fa-arrow-left mr-2"></i>Back
            </Link>
          </div>
          <h2 className="text-2xl font-semibold mb-6">Edit Staff</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Basic Information */}
              <input type="text" name="staffInformation.name" value={staff.staffInformation.name}
                     onChange={handleChange} placeholder="Name" className="form-input px-4 py-2 rounded" required/>
              <input type="text" name="staffInformation.surname" value={staff.staffInformation.surname}
                     onChange={handleChange} placeholder="Surname" className="form-input px-4 py-2 rounded" required/>
              <input type="text" name="staffInformation.position" value={staff.staffInformation.position}
                     onChange={handleChange} placeholder="Position" className="form-input px-4 py-2 rounded" required/>

              {/* Contact Details */}
              <input type="email" name="contactDetails.email" value={staff.contactDetails.email} onChange={handleChange}
                     placeholder="Email" className="form-input px-4 py-2 rounded" required/>
              <input type="tel" name="contactDetails.tel" value={staff.contactDetails.tel} onChange={handleChange}
                     placeholder="Tel" className="form-input px-4 py-2 rounded" required/>

              {/* Address */}
              <input type="text" name="address.street" value={staff.address.street} onChange={handleChange}
                     placeholder="Street" className="form-input px-4 py-2 rounded" required/>
              <input type="text" name="address.city" value={staff.address.city} onChange={handleChange}
                     placeholder="City" className="form-input px-4 py-2 rounded" required/>
              <select name="address.province" value={staff.address.province} onChange={handleChange}
                      className="form-select px-4 py-2 rounded" required>
                {/* Province options */}
                <option disabled value="Province">Province</option>
                <option>Ontario</option>
                <option>Quebec</option>
                <option>British Columbia</option>
                <option>Alberta</option>
                <option>Manitoba</option>
                <option>Saskatchewan</option>
                <option>Nova Scotia</option>
                <option>New Brunswick</option>
                <option>Newfoundland and Labrador</option>
                <option>Prince Edward Island</option>
                <option>Northwest Territories</option>
                <option>Nunavut</option>
                <option>Yukon</option>
                {/* Add other provinces */}
              </select>
              <input type="text" name="address.zipCode" value={staff.address.zipCode} onChange={handleChange}
                     placeholder="Zip Code" className="form-input px-4 py-2 rounded" required/>
              <input type="text" name="address.country" value={staff.address.country} onChange={handleChange}
                     placeholder="Country" className="form-input px-4 py-2 rounded" required/>

              {/* Professional Details */}
              <textarea name="personalDetails.qualifications" value={staff.personalDetails.qualifications}
                        onChange={handleChange} placeholder="Qualifications" className="form-textarea px-4 py-2 rounded"
                        rows="3" required></textarea>
              <textarea name="personalDetails.specialization" value={staff.personalDetails.specialization}
                        onChange={handleChange} placeholder="Specialization" className="form-textarea px-4 py-2 rounded"
                        rows="3" required></textarea>
              <textarea name="personalDetails.licence" value={staff.personalDetails.licence} onChange={handleChange}
                        placeholder="License/Certification" className="form-textarea px-4 py-2 rounded" rows="3"
                        required></textarea>

              {/* Personal Details */}
              <input type="date" name="personalDetails.dateOfBirth" value={staff.personalDetails.dateOfBirth}
                     onChange={handleChange} placeholder="Date of Birth" className="form-input px-4 py-2 rounded"
                     required/>
              <input type="text" name="personalDetails.gender" value={staff.personalDetails.gender}
                     onChange={handleChange} placeholder="Gender" className="form-input px-4 py-2 rounded" required/>
              <input type="text" name="personalDetails.workschedule" value={staff.personalDetails.workschedule}
                     onChange={handleChange} placeholder="Working Schedule" className="form-input px-4 py-2 rounded"
                     required/>
              <input type="text" name="personalDetails.hobbies" value={staff.personalDetails.hobbies}
                     onChange={handleChange} placeholder="Hobbies/Interests" className="form-input px-4 py-2 rounded"
                     required/>
              <input type="file" name="personalDetails.photo" onChange={handlePhotoChange} className="form-input"
                     accept="image/*"/>
            </div>

            <div className="flex justify-end gap-4 mt-4">
              <button
                  onClick={handleCancel}
                  type="button"
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                Update Staff
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateStaffForm;
