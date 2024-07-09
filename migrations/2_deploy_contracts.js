const HealthcareAccessControl = artifacts.require("HealthcareAccessControl");

module.exports = function(deployer) {
  deployer.deploy(HealthcareAccessControl)
  .then(()=>{
    console.log("Contract deployed at:", HealthcareAccessControl.address);
  });
};
