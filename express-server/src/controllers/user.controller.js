import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
   // get user details from frontend
   // validation - not empty
   // check if user already exists: username or email
   // check for images, check for avatar and cover image
   // upload them to cloudinary, check avatar
   // create user object - create entry in db
   // remove password and refresh token field from response
   // check for user creation
   // send response back to frontend

   const { username, email, fullname, password } = req.body;

   



})

export { registerUser };