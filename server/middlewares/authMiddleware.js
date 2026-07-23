import { clerkClient } from "@clerk/express";

// Middleware (Protect Educator Routes)
export const protectEducator = async (req, res, next) => {

    try {
        const auth = await req.auth();

        console.log(auth);
        const userId = auth.userId


        console.log("User ID:", userId);
        const response = await clerkClient.users.getUser(userId)

        if (response.publicMetadata.role !== 'educator') {
            return res.json({ success: false, message: "Unauthorized Access" })
        }

        next()
    }
    catch (error) {

        res.json({ success: false, message: error.message })

    }
}