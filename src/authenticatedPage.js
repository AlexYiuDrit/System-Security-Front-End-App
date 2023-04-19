import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './authenticatedPage.css';

const AuthenticatedPage = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [groupName, setGroupName] = useState('');
    const [members, setMembers] = useState([]);
    const [error, setError] = useState('');

    const userData = JSON.parse(sessionStorage.getItem('userData'));

    const handleLogout = () => {
        localStorage.clear();
        sessionStorage.clear();
        navigate('/login');
    };

    const handleNewChat = () => {
        setIsModalOpen(true);
        setError('');
    };

    const handleCreateGroup = () => {
        if (!groupName || members.length === 0) {
            setError('Missing group name or member not selected');
            return;
        }
        // Send request to server to create new group with groupName and members
        

        setIsModalOpen(false);
        setGroupName('');
        setMembers([]);
        console.log(members);
        setError('');
    };

    const handleCancel = () => {
        setGroupName('');
        setMembers([]);
        setIsModalOpen(false);
        setError('');
    };

    const handleGroupNameChange = (event) => {
        setGroupName(event.target.value);
    };

    const handleMemberChange = (event) => {
        const selectedMemberId = event.target.value;
        const selectedMemberName = event.target.options[event.target.selectedIndex].text;
        let selectedMember = {
            id: selectedMemberId,
            name: selectedMemberName
        };
        if (!members.includes(selectedMemberId)) {
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
                <div className="groups">
        
                </div>
                <div className="chat">
                    {/* Add code for displaying chat messages here */}
                </div>
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
                                    {userData.data.contacts.map((contact) => (
                                        <option value={contact.userId} key={contact.userId}>{contact.userName}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="selected-members">
                                {members.map((member) => (
                                    <div className="selected-member" key={member.id}>
                                        {member.name}
                                        <button className="remove-member-button" onClick={() => handleRemoveMember(member)}>X</button>
                                    </div>
                                ))}
                            </div>
                            <div className="error">{error}</div>
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

    
}

export default AuthenticatedPage;