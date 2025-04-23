import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const generateAccessAndRefreshToken = async (userId) => {
   try {
      const user = await User.findById(userId)
      
      const accessToken = user.generateAccessToken;
      const refreshToekn = user.generateRefreshToken;

      user.refreshToken = refreshToekn;
      await user.save({ validateBeforeSave: false });

      return {
         accessToken,
         refreshToekn
      }
   } catch (error) {
         throw new ApiError(500, "Unable to generate tokens, unable to generate access and refresh tokens");
      }
}

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

   const { username, email, fullName, password } = req.body;

   if([fullName, email, username, password].some((field) => field?.trim() === "")) {
      throw new ApiError(400, "Please fill all the fields");
   }

   const existedUser = await User.findOne({
      $or: [
         { username }, { email }
      ]
   });
   if (existedUser) {
      throw new ApiError(409, "User already exists");
   }

   const avatarLocalPath = req.files?.avatar[0]?.path;
   // const coverImageLocalPath = req.files?.coverImage[0]?.path;
   let coverImageLocalPath;
   if(req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
      coverImageLocalPath = req.files.coverImage[0].path;
   } 

   if(!avatarLocalPath) {
      throw new ApiError(400, "Please upload an avatar");
   }
   const avatar = await uploadOnCloudinary(avatarLocalPath);

  /*
   * if cover image required then this code will be uncommented
   if(!coverImageLocalPath) {
      throw new ApiError(400, "Please upload a cover image");
   }
   */
   const coverImage = await uploadOnCloudinary(coverImageLocalPath);

   if(!avatar) {
      throw new ApiError(400, "Unable to upload avatar");
   }

   const user = await User.create({
      username: username.toLowerCase(),
      email,
      fullName,
      password,
      avatar: avatar?.url,
      coverImage: coverImage?.url || ""
   });

   const createdUser = await User.findById(user._id).select("-password -refreshToken");

   if(!createdUser) {
      throw new ApiError(500, "Unable to create user");
   }

   return res.status(201).json(
      new ApiResponse(
         200,
         { user: createdUser },
         "User created successfully"
      )
   );
})

const loginHandler = asyncHandler(async (req, res) => {
   // get data from body
   // username or email
   // find the user
   // check for password
   // generate access token & refresh token
   // save refresh token in db
   // send cookies
   // send response back to frontend

   const {username, password, email} = req.body;

   if (!(username || email)) {
      throw new ApiError(400, "Please provide username or email");
   }

   const user = awaitUser.findOne({ $or: [{ username }, { email }] });

   if (!user) {
      throw new ApiError(404, "User not found");
   }

   const isPasswordValid = await user.isPasswordCorrect(password);

   if (!isPasswordValid) {
      throw new ApiError(401, "Incorrect password");
   }

   

})

export { loginHandler, registerUser };

