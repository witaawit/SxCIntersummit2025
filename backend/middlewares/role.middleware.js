const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden: Role not allowed" });
    }
    next();
  };
};

const authorizeDivisions = (...allowedDivisions) => {
  return (req, res, next) => {
    const { role, division } = req.user;

    if (role === "ADMIN") return next();

    if (!Array.isArray(division) || !division.some(d => allowedDivisions.includes(d))) {
      return res.status(403).json({
        message: `Forbidden: Only for divisions: ${allowedDivisions.join(", ")}`,
      });
    }

    next();
  };
};

const authorizeAccess = ({ roles = [], divisions = [] }) => {
  return (req, res, next) => {
    const { role, division } = req.user;

    const roleOk = roles.length === 0 || roles.includes(role);
    const divisionOk = Array.isArray(division)
      ? divisions.length === 0 || division.some(d => divisions.includes(d))
      : divisions.length === 0 || divisions.includes(division);

    if (!roleOk || !divisionOk) {
      return res.status(403).json({
        message: `Access denied for role ${role} and division ${division}`,
      });
    }

    next();
  };
};

const authorizeInstitution = (...allowedInstitutions) => {
  return (req, res, next) => {
    if (!req.user || !allowedInstitutions.includes(req.user.institution)) {
      return res.status(403).json({ message: "Forbidden: Institution not allowed" });
    }
    next();
  };
};


const isAdmin = (req, res, next) => {
  if (req.user.role === "ADMIN" || req.user.role.endsWith("_ADMIN")) {
    return next();
  }
  return res.status(403).json({ message: "Admins only" });
};

const isProjectOfficer = (req, res, next) => {
  if (req.user.role !== "PO") {
    return res.status(403).json({ message: "Only for Project Officer (PO)" });
  }
  next();
};

const isSuperAdmin = (req, res, next) => {
  if (req.user?.role === 'IT') return next();
  return res.status(403).json({ message: 'Access denied: Super Admin only' });
};

const isPO = (req, res, next) => {
  if (req.user?.role === 'PO') return next();
  return res.status(403).json({ message: 'Access denied: PO only' });
};

const isBMCAdmin = (req, res, next) => {
  if (req.user?.role === 'BMC_ADMIN') return next();
  return res.status(403).json({ message: 'Access denied: BMC Admin only' });
};
module.exports = {
  authorizeRoles,
  authorizeDivisions,
  authorizeAccess,
  isAdmin,
  isProjectOfficer,
  authorizeInstitution,
  isSuperAdmin,
  isPO,
  isBMCAdmin
};
     