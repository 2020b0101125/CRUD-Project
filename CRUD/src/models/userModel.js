import db from "../config/db.js";
import dotenv from "dotenv";

dotenv.config();

export const getAllUsers = async () => {
  const result = await db.query("Select * from users");
  return result.rows;
};
export const getAllUsersById = async (id) => {
  const result = await db.query("Select * from users where id = $1", [id]);
  return result.rows[0];
};
export const createUsers = async (
  user_id,
  user_name,
  user_designation_id,
  user_role,
  user_contact,
  user_email
) => {
  const chk = await db.query("Select * from users where user_id=$1", [user_id]);
  if (chk.rowCount === 0) {
    const insert =
      "insert into users(user_id,user_name,user_designation_id,user_role,user_contact,user_email) values ($1,$2,$3,$4,$5,$6);";
    const val = [
      user_id,
      user_name,
      user_designation_id,
      user_role,
      user_contact,
      user_email,
    ];
    const result = await db.query(insert, val);
    return result.rows[0];
  }
};

export const updateUsers = async (
  user_id,
  user_name,
  user_designation_id,
  user_role,
  user_contact,
  user_email
) => {
  const update =
    "update users set user_name=$2,user_designation_id=$3,user_role=$4,user_contact=$5,user_email=$6 where user_id=$1 returning *;";
  const val = [
    user_id,
    user_name,
    user_designation_id,
    user_role,
    user_contact,
    user_email,
  ];
  const result = await db.query(update, val);
  return result.rows[0];
};

export const deleteUsers = async (id) => {
  const result = await db.query(
    "delete from users where user_id=$1 returning *",
    [id]
  );
  return result.rows[0];
};
