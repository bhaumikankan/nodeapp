const DefaultUserRoles = [
    'DRIVER',
    'TRANSPORT_HELPER',
    'ASSET',
    'EMPLOYEE',
    'SECURITY',
    'HOUSE_KEEPING_STAFF',
    'VISITOR',
  ];
  const DomainSpecificUserRoles = {
    SCHOOL: [...DefaultUserRoles, 'TEACHING_STAFF', 'NON_TEACHING_STAFF', 'STUDENT', 'ATTENDANT'],
    CORPORATES: [...DefaultUserRoles],
  };
  module.exports.DomainSpecificUserRoles = DomainSpecificUserRoles;
  module.exports.UserRoles = [...DomainSpecificUserRoles.SCHOOL, ...DomainSpecificUserRoles.CORPORATES];
  
  module.exports.AccessRoles = ['ADMIN', 'MANAGER', 'OPERATOR', 'USER'];