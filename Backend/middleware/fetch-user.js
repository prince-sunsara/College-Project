import Jwt from "jsonwebtoken";

const jwtToken = process.env.JWT_SECRETE;

const fetchUser = (req, res, next) => {
    const token = req.headers['auth-token'];
    if (!token) {
        return res.status(401).json({ error: 'Cannot get auth-token' });
    }
    try {
        const data = Jwt.verify(token, jwtToken);
        // console.log(data.user);
        req.user = data.user;
        next();
    } catch (error) {
        return res.status(500).json({ error: "An error occured while verifying the token" });
    }
}

export default fetchUser;