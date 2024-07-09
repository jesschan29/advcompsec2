const contractAddress = '0xdDeE00f6E47E2E59c5C6d9745C0738013df5Bf78'; // Replace with actual contract address
// const abi = [
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": false,
//           "internalType": "string",
//           "name": "description",
//           "type": "string"
//         }
//       ],
//       "name": "MedicalRecordAdded",
//       "type": "event"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": false,
//           "internalType": "string",
//           "name": "description",
//           "type": "string"
//         }
//       ],
//       "name": "MedicalRecordDeleted",
//       "type": "event"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": false,
//           "internalType": "string",
//           "name": "description",
//           "type": "string"
//         }
//       ],
//       "name": "MedicalRecordEdited",
//       "type": "event"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "user",
//           "type": "address"
//         },
//         {
//           "indexed": false,
//           "internalType": "string",
//           "name": "reason",
//           "type": "string"
//         }
//       ],
//       "name": "RegistrationFailed",
//       "type": "event"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "user",
//           "type": "address"
//         },
//         {
//           "indexed": false,
//           "internalType": "string",
//           "name": "name",
//           "type": "string"
//         }
//       ],
//       "name": "UserRegistered",
//       "type": "event"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": false,
//           "internalType": "string",
//           "name": "reason",
//           "type": "string"
//         }
//       ],
//       "name": "accessError",
//       "type": "event"
//     },
//     {
//       "inputs": [],
//       "name": "administrator",
//       "outputs": [
//         {
//           "internalType": "address",
//           "name": "",
//           "type": "address"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function",
//       "constant": true
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "string",
//           "name": "_name",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "_email",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "_password",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "_role",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "_gender",
//           "type": "string"
//         },
//         {
//           "internalType": "uint256",
//           "name": "_age",
//           "type": "uint256"
//         },
//         {
//           "internalType": "string",
//           "name": "_secret",
//           "type": "string"
//         }
//       ],
//       "name": "register",
//       "outputs": [
//         {
//           "internalType": "string",
//           "name": "",
//           "type": "string"
//         }
//       ],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "login",
//       "outputs": [
//         {
//           "internalType": "string",
//           "name": "",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "",
//           "type": "string"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function",
//       "constant": true
//     },
//     {
//       "inputs": [],
//       "name": "getProfile",
//       "outputs": [
//         {
//           "internalType": "string",
//           "name": "",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "",
//           "type": "string"
//         },
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         },
//         {
//           "internalType": "string",
//           "name": "",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "",
//           "type": "string"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function",
//       "constant": true
//     },
//     {
//       "inputs": [],
//       "name": "getSelfMedicalRecords",
//       "outputs": [
//         {
//           "components": [
//             {
//               "internalType": "uint256",
//               "name": "recordId",
//               "type": "uint256"
//             },
//             {
//               "internalType": "string",
//               "name": "description",
//               "type": "string"
//             },
//             {
//               "internalType": "string",
//               "name": "date",
//               "type": "string"
//             },
//             {
//               "internalType": "string",
//               "name": "doctor",
//               "type": "string"
//             }
//           ],
//           "internalType": "struct HealthcareAccessControl.MedicalRecord[]",
//           "name": "",
//           "type": "tuple[]"
//         },
//         {
//           "internalType": "string",
//           "name": "",
//           "type": "string"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function",
//       "constant": true
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "string",
//           "name": "_email",
//           "type": "string"
//         }
//       ],
//       "name": "getMedicalRecords",
//       "outputs": [
//         {
//           "components": [
//             {
//               "internalType": "uint256",
//               "name": "recordId",
//               "type": "uint256"
//             },
//             {
//               "internalType": "string",
//               "name": "description",
//               "type": "string"
//             },
//             {
//               "internalType": "string",
//               "name": "date",
//               "type": "string"
//             },
//             {
//               "internalType": "string",
//               "name": "doctor",
//               "type": "string"
//             }
//           ],
//           "internalType": "struct HealthcareAccessControl.MedicalRecord[]",
//           "name": "",
//           "type": "tuple[]"
//         },
//         {
//           "internalType": "string",
//           "name": "",
//           "type": "string"
//         }
//       ],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "string",
//           "name": "_email",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "_description",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "_date",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "_doctor",
//           "type": "string"
//         }
//       ],
//       "name": "addMedicalRecord",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "string",
//           "name": "_email",
//           "type": "string"
//         },
//         {
//           "internalType": "uint256",
//           "name": "_recordId",
//           "type": "uint256"
//         },
//         {
//           "internalType": "string",
//           "name": "_description",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "_date",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "_doctor",
//           "type": "string"
//         }
//       ],
//       "name": "editMedicalRecord",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "string",
//           "name": "_email",
//           "type": "string"
//         },
//         {
//           "internalType": "uint256",
//           "name": "recordId",
//           "type": "uint256"
//         }
//       ],
//       "name": "deleteMedicalRecord",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     }
//   ];

const abi = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "description",
          "type": "string"
        }
      ],
      "name": "MedicalRecordAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "description",
          "type": "string"
        }
      ],
      "name": "MedicalRecordDeleted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "description",
          "type": "string"
        }
      ],
      "name": "MedicalRecordEdited",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "reason",
          "type": "string"
        }
      ],
      "name": "RegistrationFailed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "UserRegistered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "reason",
          "type": "string"
        }
      ],
      "name": "accessError",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "administrator",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_email",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_password",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_role",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_gender",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_age",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_secret",
          "type": "string"
        }
      ],
      "name": "register",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "login",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "getProfile",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "getSelfMedicalRecords",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "recordId",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "date",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "doctor",
              "type": "string"
            }
          ],
          "internalType": "struct HealthcareAccessControl.MedicalRecord[]",
          "name": "",
          "type": "tuple[]"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_email",
          "type": "string"
        }
      ],
      "name": "getMedicalRecords",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "recordId",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "date",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "doctor",
              "type": "string"
            }
          ],
          "internalType": "struct HealthcareAccessControl.MedicalRecord[]",
          "name": "",
          "type": "tuple[]"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_email",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_description",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_date",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_doctor",
          "type": "string"
        }
      ],
      "name": "addMedicalRecord",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_email",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_recordId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_description",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_date",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_doctor",
          "type": "string"
        }
      ],
      "name": "editMedicalRecord",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_email",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "recordId",
          "type": "uint256"
        }
      ],
      "name": "deleteMedicalRecord",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]


// let currentUser = null;

function openChoicePopup() {
    document.getElementById("choicePopup").style.display = "block";
}

function openFormLogin() {
    closeChoicePopup();
    document.getElementById("Login").style.display = "block";
}

function openFormRegister() {
    closeChoicePopup();
    document.getElementById("Register").style.display = "block";
}

function closeChoicePopup() {
    document.getElementById("choicePopup").style.display = "none";
}

function backToChoice() {
    closeForm();
    openChoicePopup();
}

function ok() {
  document.getElementById("Help").style.display = "none";
}

function openFormHelp() {
  closeChoicePopup();
  document.getElementById("Help").style.display = "block";
}

function closeForm() {
    document.getElementById("Login").style.display = "none";
    document.getElementById("Register").style.display = "none";
    document.getElementById("loginError").style.display = "none";
    document.getElementById("registerError").style.display = "none";
    document.getElementById("emailError").style.display = "none";
    document.getElementById("passwordError").style.display = "none";
    document.getElementById("emailExistsError").style.display = "none";
    document.getElementById("TwoFactorAuthRegister").style.display = "none";
    document.getElementById("TwoFactorAuthLogin").style.display = "none";
    document.getElementById("authLoginError").style.display = "none";
    document.getElementById("authRegisterError").style.display = "none";
    document.getElementById("fullNameError").style.display = "none";
    document.getElementById("ageError").style.display = "none";
    document.getElementById("genderError").style.display = "none";
    document.getElementById("roleError").style.display = "none";
    document.getElementById("userAccountError").style.display = "none";
}

function validateRole() {
    var roleSelect = document.getElementById("role");
    var roleError = document.getElementById("roleError");

    if (roleSelect.value === "") {
        roleError.style.display = "block";
    } else {
        roleError.style.display = "none";
    }
}

function validateGender() {
    var genderSelect = document.getElementById("gender");
    var genderError = document.getElementById("genderError");

    if (genderSelect.value === "") {
        genderError.style.display = "block";
    } else {
        genderError.style.display = "none";
    }
}

function logout() {
    if (confirm("Are you sure you want to log out?")) {
        setTimeout(function() {
            alert("Successfully Logged Out");
            setTimeout(function() {
                // currentUser = null;
                location.reload();
            }, 300);
        }, 300);
    }
}

function openTwoFactorAuthRegister() {
    document.getElementById("TwoFactorAuthRegister").style.display = "block";
}

function openTwoFactorAuthLogin() {
    document.getElementById("TwoFactorAuthLogin").style.display = "block";
}

function cancelAuth() {
    closeForm();
    openChoicePopup();
}

document.addEventListener("DOMContentLoaded", function() {
    openChoicePopup();
});

function openTabs(event, tabName) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName + "Section").style.display = "block";
}

function openTabs2(event, tabName) {
    let j, tabcontent2, tablinks2;

    tabcontent2 = document.getElementsByClassName("tabcontent2");
    for (j = 0; j < tabcontent2.length; j++) {
        tabcontent2[j].style.display = "none";
    }

    tablinks2 = document.getElementsByClassName("tablinks2");
    for (j = 0; j < tablinks2.length; j++) {
        tablinks2[j].classList.remove("active");
    }
    document.getElementById(tabName + "Section").style.display = "block";
    event.currentTarget.className += " active";
}

function openModal() {
    document.getElementById('myModal').style.display = "block";
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

function saveChanges() {
    // Implement save changes functionality here
    closeModal();
}

window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.addEventListener('load', async () => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log("MetaMask connected");
        } catch (error) {
            console.error("User denied account access or MetaMask not installed");
            alert("User denied account access or MetaMask not installed");
            return;
        }
    } else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        console.log("Web3 provider connected");
    } else {
        console.log("No Web3 provider found, please install MetaMask or use a Web3-enabled browser.");
        alert("No Web3 provider found, please install MetaMask or use a Web3-enabled browser.");
        return;
    }

    const contract = new web3.eth.Contract(abi, contractAddress);
    const gasPrice = '20000000000';  // 20 Gwei
    const gasLimit = 3000000; // 3 million gas
    const accounts = await web3.eth.getAccounts();

    window.register = async function() {
        const email = document.querySelector("#Register input[name=email]").value;
        const fullName = document.querySelector("#Register input[name=fullName]").value;
        const password = document.querySelector("#Register input[name=psw]").value;
        const confirmPassword = document.querySelector("#Register input[name=confirm-psw]").value;
        const role = document.querySelector("#Register select[name=role]").value;
        const gender = document.querySelector("#Register select[name=gender]").value;
        const age = document.querySelector("#Register input[name=age]").value;
    
        let valid = true;
        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById("emailError").style.display = "block";
            valid = false;
        } else {
            document.getElementById("emailError").style.display = "none";
        }
    
        // Validate age is a positive integer
        if (isNaN(age) || age <= 0) {
            document.getElementById("ageError").style.display = "block";
            valid = false;
        } else {
            document.getElementById("ageError").style.display = "none";
        }
    
        // Validate fullName
        if (fullName.trim() === "") {
            document.getElementById("fullNameError").style.display = "block";
            valid = false;
        } else {
            document.getElementById("fullNameError").style.display = "none";
        }
    
        // Validate password
        if (password.length < 6) {
            document.getElementById("passwordError").style.display = "block";
            valid = false;
        } else {
            document.getElementById("passwordError").style.display = "none";
        }
    
        // Validate confirm password
        if (password !== confirmPassword) {
            document.getElementById("registerError").style.display = "block";
            valid = false;
        } else {
            document.getElementById("registerError").style.display = "none";
        }
    
        // Check if email already exists        VALIDATE INSIDE BLOCKCHAIN AS IT REQUIRES ACCESS TO STORAGE
        // if (localStorage.getItem('users')) {
        //     const users = JSON.parse(localStorage.getItem('users'));
        //     if (users.find(user => user.email === email)) {
        //         document.getElementById("emailExistsError").style.display = "block";
        //         valid = false;
        //     } else {
        //         document.getElementById("emailExistsError").style.display = "none";
        //     }
        // }
    
        fetch(`/generate?email=${encodeURIComponent(email)}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('qrCodeRegister').innerHTML = `<img src="${data.qrCode}"><br>Scan this QR code with Google Authenticator app`;
            document.getElementById('setupKeyRegister').innerText = `Setup Key: ${data.setupKey}`;
            const secret = data.setupKey
            registration(secret)
        })
        .catch(error => {
            console.error('Error:', error);
        });
    
        async function registration(secretkey){
        if (valid) {
            try {
              const secret = secretkey
                console.log(email, fullName, password, role, gender, age, secret)
                const result = await contract.methods.register(fullName, email, password, role, gender, age, secret).send({ from: accounts[0], gas: gasLimit, gasPrice });
                const message = result.events.UserRegistered ? 'User registered successfully!' : result.events.RegistrationFailed.returnValues.reason;
                console.log('Transaction Receipt:', result);
                accessError = result.events.accessError
                if (accessError) {
                  msg = accessError.returnValues.reason;
                  alert(`Access Error: ${msg}`);
                } else {
                    if (message === "User already registered"){
                        document.getElementById("userAccountError").style.display = "block";
                        // alert("User already registered");
                    } else if (message === "Email already taken") {
                        document.getElementById("emailExistsError").style.display = "block";
                        // alert("Email already taken");
                    } else {
                        document.getElementById("userAccountError").style.display = "none";
                        document.getElementById("emailExistsError").style.display = "none";
                        closeForm();
                        openTwoFactorAuthRegister();
                    }
                //   document.getElementById('registerMessage').innerText = message;
                }
            } catch (error) {
                console.error('Error calling register function:', error);
                console.log(error);
                receipt = web3.eth.waitForTransactionReceipt(contract.methods.register(name, age, gender, role).send({ from: accounts[0], gas: gasLimit, gasPrice }))
                console.log(receipt);
            }
            // Simulate registration (save user details in local storage)
            // let users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
            // const newUser = { email, password, fullName, role, gender, age };
            // users.push(newUser);
            // localStorage.setItem('users', JSON.stringify(users));
            // currentUser = newUser;
          }
        }
    }

    window.login = async function() {
        const emailInput = document.querySelector("#Login input[name=email]").value;
        const passwordInput = document.querySelector("#Login input[name=psw]").value;
    
        try {
            const accounts = await web3.eth.getAccounts();
            const result = await contract.methods.login().call({ from: accounts[0] });
            const email = result[0];
            const password = result[1];
            
            if (email === "Account not registered") {
                alert("Error: User account is not registered.")
                // document.getElementById('loginInfo').innerText = `Error: ${name}`;
            } else if (passwordInput != password) {       // maybe can merge the password validation at here
                // alert("Wrong email or password.")
                document.getElementById("loginError").style.display = "block";
            } else if (emailInput != email) {
                alert("Different Metamask account detected.")
            } else {
                closeForm();
                openTwoFactorAuthLogin();
                // document.getElementById('loginInfo').innerText = `Name: ${name}, Role: ${role}`;
                // login = true;
            }
        } catch (error) {
            console.error('Error calling login function:', error);
        }
    
        // if (localStorage.getItem('users')) {
        //     const users = JSON.parse(localStorage.getItem('users'));
        //     const user = users.find(user => user.email === email && user.password === password);
        //     if (user) {
        //         currentUser = user;
        //         closeForm();
        //         openTwoFactorAuthLogin();
        //     } else {
        //         document.getElementById("loginError").style.display = "block";
        //     }
        // } else {
        //     document.getElementById("loginError").style.display = "block";
        // }
    }

    window.verifyAuthCodeRegister = async function() {
        // if (!currentUser) {
        //     console.error('No current user set.');
        //     return;
        // }
        const result = await contract.methods.login().call({ from: accounts[0] });
        const secret = result[2];
        console.log(secret);
        const authCodeRegister = document.querySelector("#TwoFactorAuthRegister input[name=authCodeRegister]").value;
    
        fetch('/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ secret: secret, token: authCodeRegister })
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === '2FA Token is valid!') {
                alert("Authentication successful! Successfully Logged In");
                closeForm();
                document.getElementById("container").style.display = "block";
                displayProfile();
            } else {
                document.getElementById("authRegisterError").style.display = "block";
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    window.verifyAuthCodeLogin = async function() {
        // if (!currentUser) {
        //     console.error('No current user set.');
        //     return;
        // }
        const result = await contract.methods.login().call({ from: accounts[0] });
        const secret = result[2];
        const authCodeLogin = document.querySelector("#TwoFactorAuthLogin input[name=authCodeLogin]").value;
    
        fetch('/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ secret: secret, token: authCodeLogin })
        })
        .then(response => response.json())
        .then(data => {
          if (data.message === '2FA Token is valid!') {
              alert("Authentication successful! Successfully Logged In");
              closeForm();
              document.getElementById("container").style.display = "block";
              displayProfile();
          } else {
              document.getElementById("authLoginError").style.display = "block"; // Ensure this element is displayed when the token is invalid
          }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    window.displayProfile = async function() {
        try {
            const result = await contract.methods.getProfile().call({from: accounts[0]});
            const name = result[0];
            const gender = result[1];
            const age = result[2];
            const email = result[3];
            const role = result[4];
            if (name == "Account not registered") { // normally wont happen unless change login status manually with dev tools
              alert("Please register an account first.") 
            } else {
                document.getElementById("profile_role").textContent = `Role: ${role}`;
                document.getElementById("profile_name").textContent = `Name: ${name}`;
                document.getElementById("profile_email").textContent = `Email: ${email}`;
                document.getElementById("profile_gender").textContent = `Gender: ${gender}`;
                document.getElementById("profile_age").textContent = `Age: ${age}`;
                // document.getElementById('profileInfo').innerText = `Name: ${name}\nAge: ${age}\nGender: ${gender}\nRole: ${role}`;
                openTabs(event, 'profile')
            }
        } catch (error) {
            console.error('Error calling viewProfile function:', error);
        }
    
        // if (currentUser) {
        //     document.getElementById("profileRole").textContent = currentUser.role;
        //     document.getElementById("profileFullName").textContent = currentUser.fullName;
        //     document.getElementById("profileEmail").textContent = currentUser.email;
        //     document.getElementById("profileGender").textContent = currentUser.gender;
        //     document.getElementById("profileAge").textContent = currentUser.age;
        // }
    }

    window.getSelfMedicalRecord = async function() {
        try {
            const result = await contract.methods.getSelfMedicalRecords().call({from: accounts[0]});
            const medicalRecords = result[0];
            const msg = result[1]
        
            // Clear any existing content in the div
            document.getElementById('medicalRecordInfo').innerHTML = '';
        
            // Iterate over the medical records array and append each record's information
            if (msg == 'Account not registered') {
            document.getElementById('medicalRecordInfo').innerText = "Invalid account";
            } else if (medicalRecords.length == 0){
            document.getElementById('medicalRecordInfo').innerText = "No medical records found";
            } else {
            medicalRecords.forEach(record => {
                const recordId = record[0];
                const description = record[1];
                const date = record[2];
                const doctor = record[3];
        
                // Create a new paragraph element for each record
                const recordElement = document.createElement('p');
                recordElement.innerText = `Record ID: ${recordId}, Description: ${description}, Date: ${date}, Doctor: ${doctor}`;
        
                // Append the record element to the div
                document.getElementById('medicalRecordInfo').appendChild(recordElement);
            })
            };
        } catch (error) {
            console.error("Error fetching medical records:", error);
        }
    }

    window.getMedicalRecord = async function() {
        try {
          // Call the smart contract method to get the medical record
          patient_name = document.getElementById('patientName').value
          const result = await contract.methods.getMedicalRecords(patient_name).call({from: accounts[0]});
          const medicalRecords = result[0];
          const msg = result[1]
      
          // Clear any existing content in the div
          document.getElementById('medicalRecordInfo').innerHTML = '';
      
          // Iterate over the medical records array and append each record's information
          if (msg == 'Only admins, doctors or nurses can perform this action') {
            alert("Only admins, doctors or nurses can perform this action");
          }
          else if (msg == 'Patient account not found') {
            document.getElementById('medicalRecordInfo').innerText = "Patient account not found";
          }
          else if (medicalRecords.length == 0){
            document.getElementById('medicalRecordInfo').innerText = "No medical records found";
          } else {
            medicalRecords.forEach(record => {
              const recordId = record[0];
              const description = record[1];
              const date = record[2];
              const doctor = record[3];
      
              // Create a new paragraph element for each record
              const recordElement = document.createElement('p');
              recordElement.innerText = `Record ID: ${recordId}, Description: ${description}, Date: ${date}, Doctor: ${doctor}`;
      
              // Append the record element to the div
              document.getElementById('medicalRecordInfo').appendChild(recordElement);
            })
          };
        } catch (error) {
            console.error("Error fetching medical records:", error);
        }
    }

    window.addMedicalRecord = async function() {
        try {
          const name = document.getElementById('patientNameadd').value;
          const description = document.getElementById('addDescription').value;
          const date = document.getElementById('addDate').value;
          const doctor = document.getElementById('addDoctor').value;
          const result = await contract.methods.addMedicalRecord(name, description, date, doctor).send({ from: accounts[0], gas: gasLimit, gasPrice });
          accessError = result.events.accessError
          if (accessError) {
            msg = accessError.returnValues.reason;
            alert(`Access Error: ${msg}`);
          } else {
            const msg = result.events.MedicalRecordAdded.returnValues.description;
            if (msg == 'Patient account not found') {
              document.getElementById('addMedicalRecord').innerText = "Patient account not found";
            } else {
              document.getElementById('addMedicalRecord').innerText = `Added Medical Record: ${msg}`; // mayb add a pop up alert stating done
            }
          }
        } catch (error) {
          console.error('Error calling addMedicalRecord function:', error);
        }
    }

    window.editMedicalRecord = async function() {
        try {
            const name = document.getElementById('patientNameedit').value;
            const recordId = document.getElementById('editRecordId').value;
            const description = document.getElementById('editDescription').value;
            const date = document.getElementById('editDate').value;
            const doctor = document.getElementById('editDoctor').value;
            const result = await contract.methods.editMedicalRecord(name, recordId, description, date, doctor).send({ from: accounts[0], gas: gasLimit, gasPrice });
            accessError = result.events.accessError
            if (accessError) {
              msg = accessError.returnValues.reason;
              alert(`Access Error: ${msg}`);
            } else {
              const msg = result.events.MedicalRecordEdited.returnValues.description;
              if (msg == 'Patient account not found') {
                document.getElementById('editMedicalRecord').innerText = "Patient account not found";
              } else {
                document.getElementById('editMedicalRecord').innerText = `Edited Medical Record: ${msg}`; // mayb add a pop up alert stating done
              }
            }
        } catch (error) {
            console.error('Error calling editMedicalRecord function:', error);
        }
    } 

    window.deleteMedicalRecord = async function() {
      try {
          const name = document.getElementById('patientNamedelete').value;
          const recordId = document.getElementById('deleteRecordId').value;
          const result = await contract.methods.deleteMedicalRecord(name, recordId).send({ from: accounts[0], gas: gasLimit, gasPrice });
          accessError = result.events.accessError
          if (accessError) {
            msg = accessError.returnValues.reason;
            alert(`Access Error: ${msg}`);
          } else {
            const msg = result.events.MedicalRecordDeleted.returnValues.description;
            if (msg == 'Patient account not found') {
              document.getElementById('deleteMedicalRecord').innerText = "Patient account not found";
            } else {
              document.getElementById('deleteMedicalRecord').innerText = `Deleted Medical Record: ${msg}`; // mayb add a pop up alert stating done
            }
          }
      } catch (error) {
          console.error('Error calling deleteMedicalRecord function:', error);
      }
}
});
