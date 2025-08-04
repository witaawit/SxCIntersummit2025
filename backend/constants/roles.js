const { staff_role } = require('@prisma/client');

const AllAdminRoles = [
  staff_role.Admin,
  staff_role.BMC_Admin,
  staff_role.BCL_Admin,
  staff_role.IBCC_Admin,
  staff_role.IBPC_Admin,
  staff_role.CHAMBERS_Admin,
  staff_role.COMPANY_VISIT_Admin,
  staff_role.IC_Admin,
  staff_role.PO
];

module.exports = {
  AllAdminRoles
};