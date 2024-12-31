import {
  createUsers,
  getAllUsers,
  getAllUsersById,
  updateUsers,
  deleteUsers,
} from "../models/userModel.js";

const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

export const createUser = async (req, res, next) => {
  const {
    user_id,
    user_name,
    user_designation_id,
    user_role,
    user_contact,
    user_email,
  } = req.body;
  try {
    const newUser = await createUsers(
      user_id,
      user_name,
      user_designation_id,
      user_role,
      user_contact,
      user_email
    );
    handleResponse(res, 201, "User Created Successfully", newUser);
  } catch (err) {
    next(err);
  }
};

export const getAllUser = async (req, res, next) => {
  try {
    const User = await getAllUsers();
    console.log("Fetched users:", User);
    if (!User) return handleResponse(res, 404, "No users found");
    handleResponse(res, 200, "User fetched Successfully", User);
  } catch (err) {
    next(err);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const Users = await getAllUsersById(req.params.id);
    if (!Users) return handleResponse(res, 404, "user not found");
    handleResponse(res, 200, "User fetched Successfully", Users);
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  const {
    user_id,
    user_name,
    user_designation_id,
    user_role,
    user_contact,
    user_email,
  } = req.body;
  try {
    const updatedUser = await updateUsers(
      user_id,
      user_name,
      user_designation_id,
      user_role,
      user_contact,
      user_email
    );
    if (!updatedUser) return handleResponse(res, 404, "user not found");
    handleResponse(res, 201, "User updated Successfully", updatedUser);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await deleteUsers(req.params.id);
    if (!Users) return handleResponse(res, 404, "user not found");
    handleResponse(res, 200, "User deleted Successfully", deletedUser);
  } catch (err) {
    next(err);
  }
};
