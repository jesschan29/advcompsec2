// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HealthcareAccessControl {
    struct MedicalRecord {
        uint recordId;
        string description;
        string date;
        string doctor;
    }
    
    struct User {
        string name;
        string email;
        string password;
        string role; 
        string gender;
        uint age;
        string secret; // 2FA secret code
    }

    mapping(address => User) private users;
    mapping(address => MedicalRecord[]) private medicalRecords;
    mapping(address => bool) private owner;
    mapping(address => bool) private registered;
    mapping(string => address) private emails;
    address public administrator;

    // constructor() {
    //     administrator = msg.sender; // Deployer of the contract is the initial administrator
    // }
    
    event accessError (string reason);
    event UserRegistered(address indexed user, string name);
    event RegistrationFailed(address indexed user, string reason);
    function register(string memory _name, string memory _email, string memory _password, string memory _role, string memory _gender, uint _age, string memory _secret) public returns (string memory) {
        // if (msg.sender != administrator) {       // irl situation only administrator can register, but this function use current user address for registration, so not applcition
        //     emit accessError("Only administrator can perform this action");
        //     return ("Only administrator can perform this action");
        // }
        
        // Check if metamask account is already registered
        if (registered[msg.sender]) {
            emit RegistrationFailed(msg.sender, "User already registered");
            return "User already registered";
        }

        // Check if email is already taken
        if (emails[_email] != address(0)) {
            emit RegistrationFailed(msg.sender, "Email already taken");
            return "Email already taken";
        }

        // // Validate gender (must be either "male" or "female")
        // if (!(keccak256(abi.encodePacked(_gender)) == keccak256(abi.encodePacked("male")) ||
        //       keccak256(abi.encodePacked(_gender)) == keccak256(abi.encodePacked("female")))) {
        //     emit RegistrationFailed(msg.sender, "Gender must be male or female");
        //     return "Gender must be male or female";
        // }

        // // Validate role (must be either "doctor" or "patient")
        // if (!(keccak256(abi.encodePacked(_role)) == keccak256(abi.encodePacked("admin")) ||
        //       keccak256(abi.encodePacked(_role)) == keccak256(abi.encodePacked("doctor")) ||
        //       keccak256(abi.encodePacked(_role)) == keccak256(abi.encodePacked("nurse")) ||
        //       keccak256(abi.encodePacked(_role)) == keccak256(abi.encodePacked("patient")))) {
        //     emit RegistrationFailed(msg.sender, "Role must be admin, doctor, nurse or patient");
        //     return "Role must be admin, doctor, nurse or patient";
        // }

        // Save user data
        users[msg.sender] = User(_name, _email, _password, _role, _gender, _age, _secret);
        registered[msg.sender] = true;
        emails[_email] = msg.sender;

        // Emit success event
        emit UserRegistered(msg.sender, _email);
        return "User registered";
    }

    function login() public view returns (string memory, string memory, string memory) {
        if (!registered[msg.sender]) {
            return ("Account not registered", "", "");
        }

        User memory user = users[msg.sender];
        return (user.email, user.password, user.secret);
    }

    function getProfile() public view returns (string memory, string memory, uint, string memory, string memory) {
        if (!registered[msg.sender]) {
            return ("Account not registered", "", 0, "", "");
        }
        User memory user = users[msg.sender];
        return (user.name, user.gender, user.age, user.email, user.role);
    }

    function getSelfMedicalRecords() public view returns (MedicalRecord[] memory, string memory) {      // for patients to view their own records (need chg in js code)
        if (!registered[msg.sender]) {
            return (medicalRecords[msg.sender], "Account not registered");
        }
        return (medicalRecords[msg.sender], "");
    }

    function getMedicalRecords(string memory _email) public returns (MedicalRecord[] memory, string memory) {
        address _userAddress = emails[_email];
        if (
            keccak256(abi.encodePacked(users[msg.sender].role)) == keccak256(abi.encodePacked("admin")) ||
            keccak256(abi.encodePacked(users[msg.sender].role)) == keccak256(abi.encodePacked("doctor")) ||
            keccak256(abi.encodePacked(users[msg.sender].role)) == keccak256(abi.encodePacked("nurse"))
            ) {
                if (!registered[_userAddress]) {
                    return (medicalRecords[_userAddress], "Patient account not found");
                }
                return (medicalRecords[_userAddress], "");
        } else {
            emit accessError("Only admins, doctors or nurses can perform this action");
            return (medicalRecords[_userAddress],"Only admins, doctors or nurses can perform this action");
        }
    }

    // Events emitted when a medical record is added, edited or deleted.
    event MedicalRecordAdded(string description);
    event MedicalRecordEdited(string description);
    event MedicalRecordDeleted(string description);

    // Function to add a medical record to a specific patient
    function addMedicalRecord(string memory _email, string memory _description, string memory _date, string memory _doctor) public {
        if (
            keccak256(abi.encodePacked(users[msg.sender].role)) == keccak256(abi.encodePacked("admin")) ||
            keccak256(abi.encodePacked(users[msg.sender].role)) == keccak256(abi.encodePacked("doctor"))
            ) {
            address _userAddress = emails[_email];
            if (!registered[_userAddress]) {
                emit MedicalRecordAdded ("Patient account not found");
            } else {
                uint _recordId = medicalRecords[_userAddress].length+1;
                medicalRecords[_userAddress].push(MedicalRecord(_recordId, _description, _date, _doctor));
                emit MedicalRecordAdded("Medical record added");
            }
        } else {
            emit accessError("Only admins or doctors can perform this action");
            // return ("Only doctors or nurses can perform this action");
        }
    }

    // Function to edit a medical record with specific recordId
    function editMedicalRecord(string memory _email, uint _recordId, string memory _description, string memory _date, string memory _doctor) public {
        if (
            keccak256(abi.encodePacked(users[msg.sender].role)) == keccak256(abi.encodePacked("admin")) ||
            keccak256(abi.encodePacked(users[msg.sender].role)) == keccak256(abi.encodePacked("doctor"))
            ) {
            address _userAddress = emails[_email];
            if (!registered[_userAddress]) {
                emit MedicalRecordEdited ("Patient account not found");
            } else if (_recordId > medicalRecords[_userAddress].length) {
                emit MedicalRecordEdited ('Record ID does not exist');
            } else {          
                medicalRecords[_userAddress][_recordId-1].description = _description;
                medicalRecords[_userAddress][_recordId-1].date = _date;
                medicalRecords[_userAddress][_recordId-1].doctor = _doctor;
                emit MedicalRecordEdited('Medical record updated');
            }
        } else {
            emit accessError("Only admins or doctors can perform this action");
            // return ("Only doctors or nurses can perform this action");
        }
    }

    // Function to delete a medical record with specific recordId
    function deleteMedicalRecord(string memory _email, uint recordId) public {    
        if (
            keccak256(abi.encodePacked(users[msg.sender].role)) == keccak256(abi.encodePacked("admin")) ||
            keccak256(abi.encodePacked(users[msg.sender].role)) == keccak256(abi.encodePacked("doctor"))
            ) {
            address _userAddress = emails[_email];
            if (!registered[_userAddress]) {
                emit MedicalRecordDeleted ("Patient account not found");
            } else if (recordId > medicalRecords[_userAddress].length){
                emit MedicalRecordDeleted("Record ID does not exist");
            } else {
                // Move the last element to the position of the element to delete
                for (uint i = recordId-1; i < medicalRecords[_userAddress].length-1; i++) {
                    medicalRecords[_userAddress][i] = medicalRecords[_userAddress][i+1];
                    medicalRecords[_userAddress][i].recordId = i+1;
                }
                // medicalRecords[_userAddress][recordId] = medicalRecords[_userAddress][medicalRecords[_userAddress].length - 1];
                // Remove the last element
                medicalRecords[_userAddress].pop();
                emit MedicalRecordDeleted('Medical record deleted.');
            }
        } else {
            emit accessError("Only admins or doctors can perform this action");
            // return ("Only doctors or nurses can perform this action");
        }
    }
}
