import { Grid, styled } from "@mui/material"

const Component = styled(Grid)`
    margin-top: 64px;
`;

const Profile = () => {
    return (
        <Component className="h-[100vh]">
            <Grid item>Hello</Grid>
            <Grid item>Prince</Grid>
        </Component>
    )
}


export default Profile;