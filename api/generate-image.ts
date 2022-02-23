import express from "express";
import IMAGE_GENERATION_SERVICE from "../services/image-generation-service";
const router = express.Router();

router.post("/api/placeholder", (req, res) => {
    if (req?.body) {
        const base64 = IMAGE_GENERATION_SERVICE.textToBase64({ ...req.body });
        res.send({ base64 });
    }
    else {
        res.status(400);
        res.send({ error: 'Not valid request body' });
    }
});

export default router;
