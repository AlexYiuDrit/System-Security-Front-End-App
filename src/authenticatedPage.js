import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './authenticatedPage.css';

const AuthenticatedPage = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [groupName, setGroupName] = useState('');
    const [members, setMembers] = useState([]);

    const handleLogout = () => {
        localStorage.clear();
        sessionStorage.clear();
        navigate('/login');
    };

    const handleNewChat = () => {
        setIsModalOpen(true);
    };

    const handleCreateGroup = () => {
        // Send request to server to create new group with groupName and members
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setGroupName('');
        setMembers([]);
        setIsModalOpen(false);
    };

    const handleGroupNameChange = (event) => {
        setGroupName(event.target.value);
    };

    const handleMemberChange = (event) => {
        const selectedMember = event.target.value;
        if (!members.includes(selectedMember)) {
            setMembers([...members, selectedMember]);
        }
    };

    const handleRemoveMember = (member) => {
        const newMembers = members.filter(m => m !== member);
        setMembers(newMembers);
    };

    return (
        <div>
            <div className="header">
                <button className="button" onClick={handleNewChat}>New Chat</button>
                <h1>Conversation</h1>
                <button className="button" onClick={handleLogout}>Logout</button>
            </div>
            <div className="content">
                <h1>You are authenticated!</h1>
                {/* Add any other content or components for the authenticated page */}
            </div>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>Create a new group</h2>
                            <button className="close-button" onClick={handleCancel}>X</button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="group-name">Group Name:</label>
                                <input type="text" id="group-name" value={groupName} onChange={handleGroupNameChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="members">Members:</label>
                                <select id="members" multiple onChange={handleMemberChange}>
                                    <option value="member1">Member 1</option>
                                    <option value="member2">Member 2</option>
                                    <option value="member3">Member 3</option>
                                    <option value="member4">Member 4</option>
                                </select>
                            </div>
                            <div className="selected-members">
                                {members.map((member) => (
                                    <div className="selected-member" key={member}>
                                        {member}
                                        <button className="remove-member-button" onClick={() => handleRemoveMember(member)}>X</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="cancel-button" onClick={handleCancel}>Cancel</button>
                            <button className="create-button" onClick={handleCreateGroup}>Create</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AuthenticatedPage;
