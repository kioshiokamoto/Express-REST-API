import express from 'express';
import { createUser, deleteUser, getUserById, getUsers, updateUser } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUserById)

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser)


export default router;
