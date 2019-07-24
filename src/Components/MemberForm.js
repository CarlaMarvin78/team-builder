import React, { useState } from 'react';


function MemberForm(props) {
    const setMembers = props.setter;
    const [member, setMember] = useState({});
    function handleSubmit(event) {
        event.preventDefault()
        const updatedMembers=[...props.members,member];
        props.setMembers(updatedMembers);
    };

    function handleChange (event) {
        const updatedMember = { ...member, [event.target.name]: event.target.value };
        setMember(updatedMember);
    }
    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Member List</legend>
                <div className="form-group row">
                    <label for="name" className="label">
                        Name
                        <div className="input">
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter name"
                                value={member.name}
                                onChange={handleChange}
                            />
                        </div>
                    </label>
                </div>
            
                            
                <div className="form-group row">
                    <label for="email" className="label">
                 Email
                        <div className="input">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={member.email}
                                onChange={handleChange}

                            />
                        </div>
                    </label>
                </div>     
                    <div className="form-group row">
                    <label for="role" className="label">
                        Role
                        <div className="input">
                            <input
                                type="text"
                                name="role"
                                placeholder="Role"
                                value={member.role}
                                onChange={handleChange}

                            />
                        </div>
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                 Submit
                </button>
            </fieldset>
        </form>
    )

}

export default MemberForm;