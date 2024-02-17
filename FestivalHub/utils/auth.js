// enter authonrization code below
const authenticateUser = (req, res, next) => {
    //code to verify token and authen user
    const token = req.header.authorization;
    if (!toekn || !isValidToken (token)){
        return res.status(401).json({error: "unauthorized"});
    }
next ();
};

//middleware function to check user permissions
const checkUserPermissions = (req, res, next) => {
    const userId = re.user.userId;
    const resourceID = req.params. resourceId;

    //if user does not have permission to access the source
    if (!hasPermission(userId, resourceId)) {
        return res.status(403).json({error: 'forbidden'});
    }
    next();
};

module.exports ={
    authenticateUser,
    checkUserPermissions,
};