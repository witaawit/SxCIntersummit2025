const { StaffRole } = require('@prisma/client');


const AllAdminRoles = [
  StaffRole.ADMIN,
  StaffRole.BMC_ADMIN,
  StaffRole.BCL_ADMIN,
  StaffRole.IBCC_ADMIN,
  StaffRole.IBPC_ADMIN,
  StaffRole.CHAMBERS_ADMIN,
  StaffRole.COMPANY_VISIT_ADMIN,
  StaffRole.IC_ADMIN,
  StaffRole.PO
];

module.exports = {
    AllAdminRoles
};

/**  BMC_ADMIN
  BCL_ADMIN
  IBCC_ADMIN
  IBPC_ADMIN
  CHAMBERS_ADMIN
  COMPANY_VISIT_ADMIN
  IC_ADMIN
  PO*/