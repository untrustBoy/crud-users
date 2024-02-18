import { Router } from "express"
import { deleteUser, getAllUsers, getUser, postUser, updateUser } from "../controllers/user"
import login from "../auth/auth";

const router = Router();

router.post('/login', login)
router.get('/', getAllUsers);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.post('/', postUser);
router.put('/:id', updateUser);

export default router;