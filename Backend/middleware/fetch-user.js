import Jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

const fetchUser = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).json({ error: 'Invalid token' });
    }
    try {
        const data = Jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        return res.status(500).json({ error: "Invalid token" });
    }
}

export default fetchUser;