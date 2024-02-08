import { Box, Grid, Typography, styled } from "@mui/material"
import Details from "./Details";
import { useContext, useEffect } from "react";
import { getUser } from "../../services/api";
import { ContextApi } from "../../context/ContextApi";

const Component = styled(Grid)`
    padding-top: 64px;
    background: azure;
    height: 100vh;
`;

const Profile = () => {
    const { userData, setUserData, file, setFile } = useContext(ContextApi);
    const defaultImage = "https://thumbs.dreamstime.com/z/young-student-profile-icon-illustration-graphic-design-88972970.jpg";

    useEffect(() => {
        const data = getUser();
        console.log(data);
        data
            .then((user, absoluteImage) => {
                setUserData({
                    name: user.user.name,
                    email: user.user.email,
                    phone: user.user.phone,
                    password: user.user.password,
                });
                const path = user.absoluteImage;
                // path = path.slice(0, -1);
                setFile(path.slice(0, -1));
            })
            .catch((error) => console.log("Error while updating user", error));
    }, []);


    return (
        <Component container>
            <Grid item lg={3} xl={4} md={4} sm={4} xs={12}
                className="flex justify-center bg-gray-400"
            >
                <Box className="mt-8">
                    <Box className="mx-2">
                        <img
                            style={{ width: "15rem", borderRadius: "50%" }}
                            src={file ? file : defaultImage}
                            alt="student image"
                        />
                    </Box>
                    <Typography align="center" variant="h4">{userData.name}</Typography>
                </Box>
            </Grid>
            <Grid item lg={9} xl={8} md={8} sm={8} xs={12}>
                <Details userData={userData} setUserData={setUserData} />
            </Grid>
        </Component>
    )
}


export default Profile;