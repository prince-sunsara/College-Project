import User from '../schemas/user-schema.js';
import jwt from 'jsonwebtoken';

/// jwt secrete key
const jwtToken = process.env.JWT_SECRETE;

/// create a new user
export const createUser = async (req, res) => {
    let success = false;

    const user = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        filename: req.file.filename,
        filepath: req.file.path
    }

    try {
        /// user exist already??
        const exist = await User.findOne({ email: req.body.email });
        if (exist) {
            return res.status(401).json({ success, message: "User allready exist!" });
        } else {
            const newUser = new User(user);
            await newUser.save();

            const data = {
                newUser: {
                    id: newUser.id,
                }
            }

            const authtoken = jwt.sign(data, jwtToken);
            success = true;
            return res.status(200).json({ success, authtoken });
        }
    } catch (err) {
        console.log("Backend Error : while creating new user", err)
        return res.status(500).json({ success, message: err.message });
    }
}

/// login to existing user
export const loginUser = async (req, res) => {
    // console.log(req.body);
    try {
        const user = await User.findOne({ email: req.body.email, password: req.body.password });
        if (!user) {
            return res.status(401).json({ message: "Invalid Email or Password" });
        } else {
            return res.status(200).json({ user });
        }
    } catch (error) {
        console.log("Backend error : while login to existing user", error)
        return res.status(500).json({ message: error.message });
    }
}

/// get user
export const getUser = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId);
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}