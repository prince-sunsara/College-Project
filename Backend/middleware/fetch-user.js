import Jwt from "jsonwebtoken";

const jwtToken = process.env.JWT_SECRETE;

const fetchUser = (req, res, next) => {
    const token = req.headers['auth-token'];
    // console.log("backend : ", token);
    if (!token) {
        return res.status(401).json({ error: 'Cannot get auth-token' });
    }
    try {
        const data = Jwt.verify(token, jwtToken);
        // console.log(data);
        req.user = data.newUser;
        next();
    } catch (error) {
        return res.status(500).json({ error: "An error occured while verifying the token" });
    }
}

export default fetchUser;